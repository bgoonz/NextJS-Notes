# NextJS

## File Based Routing

- NextJS uses file based routing
- Each file inside the pages directory becomes a route
- We can nest files inside the pages directory to create nested routes
- We can use the Link component from next/link to navigate between pages
- We can use the useRouter hook from next/router to get the current route
- We can use the withRouter HOC from next/router to inject the router object into the component's props

---

## Dynamic Routes

- We can create dynamic routes by adding brackets to a page name
  > i.e. `pages/[projectid].js`

**Extracting Dynamic Route Data**

- We can extract dynamic route data by using the useRouter hook from next/router

```js
const router = useRouter();
```

> This gives us a router object with useful properties and methods

**Catchall Routes**

- we can create catchall (for multiple dynamic segments) routes by prepending three dots to the file name
  > i.e. `pages/[...projectid].js`

**Link Component**

- We can use the Link component from next/link to navigate between pages

```js
import Link from "next/link";
function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio/1">Portfolio Project 1</Link>
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
```

---

### Imperative (Programatic) Navigation

- We can use the router object from next/router to navigate imperatively using `router.push()`

```js
import { useRouter } from "next/router";
function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    router.push("/clients/max/projecta");
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectsPage;
```

**Serving static files** _static files like images must be placed in the public folder_

---

**Icons SVG** _[Hero Icons](https://heroicons.com/)_

---

### Page Pre-Rendering

- NextJS pre-renders pages by default
- Pre-rendering generates HTML for each page in advance
- Pre-rendering can be done in two ways:
  - **Static Generation** (Recommended): The HTML is generated at build time and will be reused on each request
  - **Server-side Rendering**: The HTML is generated on each request

**getStaticProps** _Static Generation... must return an object that will then get fed into your component as props_

```js
export async function getStaticProps() {
  return {
    props: {
      products: [],
    },
  };
}
```

**getStaticProps** is executed at build time and is not exposed to the client side, you can run code that wouldn't be possible on the client side like accessing the file system.

- When you import the fs module to use in `getStaticProps` next is smart enough to seperate your code so it doesn't get bundled with the client side code.

```js
const filePath = path.join(process.cwd(), "data", "dummy-data.json");
const products = await fs.readFileSync(filePath);
```

`process.cwd()` gives you the current working directory

` const filePath = path.join(process.cwd(), "data", "dummy-data.json")` builds an absolute path to the dummy-data.json file

**Incremental Static Generation** _regenerate the page on the server after the initial request comes in_

- runs getStaticProps on the server after the initial request comes in... rather than just at build time...

> Pre-generate page then re-generate it on the server on every request at most every X seconds then either serve the old page or the new page depending on the request

**To do this you set a time in seconds on the revalidate key of the object returned by getStaticProps**

```js
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
```

- the code above tells next that for this page the data should be revalidated on every request unless it's been less than 10 seconds since the last request.

- In development the page is refreshed on every request regardless of the revalidate value.

**getStaticProps Context** _context object that is passed to getStaticProps_

- context object has a params key that contains the dynamic route parameters for the page

**Other keys in the object returned by getStaticProps**

- notFound: true... tells next that the page should return a 404 page

  - could be used for instance if the data fetching in getStaticProps fails... you could return a 404 page

- redirect: `{ destination: "/redirect-page" }`... tells next to redirect to the page specified in the destination key

```js
export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
```

**Context Object** _context object that is passed to getStaticProps_

- context object has a params key that contains the dynamic route parameters for the page

**Pre-Generated Paths** _getStaticPaths_

- getStaticPaths is used to tell next which dynamic routes it should pre-generate
- getStaticPaths is used in conjunction with getStaticProps
