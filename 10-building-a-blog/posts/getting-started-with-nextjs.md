---
title: 'Getting Started with NextJS'
date:'2023-01-30'
image: gettting-started-nextjs.webp
exerpt: "Dive into the world of NextJS, a powerful React framework. This guide provides a comprehensive introduction for beginners, covering the basics of setting up your development environment, understanding the core concepts, and creating your first NextJS application."
isFeatured: true
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
