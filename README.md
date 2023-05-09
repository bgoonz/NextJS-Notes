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
    const filePath = path.join(process.cwd(), "data", "dummy-data.json")
    const products = await fs.readFileSync(filePath)
```

`process.cwd()` gives you the current working directory

`  const filePath = path.join(process.cwd(), "data", "dummy-data.json")` builds an absolute path to the dummy-data.json file
