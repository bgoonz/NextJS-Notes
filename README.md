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
