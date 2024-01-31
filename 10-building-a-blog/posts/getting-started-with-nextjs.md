---
title: Getting Started with NextJS
date:2023-01-30

---

# NextJS

### [Docs](https://nextjs.org/docs)

##### How to setup a nextJS project:

```bash
npx create-next-app nextjs-course
```

## File Based Routing

- NextJS uses file based routing
- Each file inside the pages directory becomes a route
- We can nest files inside the pages directory to create nested routes
- We can use the Link component from next/link to navigate between pages
- We can use the useRouter hook from next/router to get the current route
- We can use the withRouter HOC from next/router to inject the router object into the component's props
