import Hero from "./../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
    {
      title: "Getting Started",
      image: "getting-started-nextjs.webp",
      excerpt: "Dive into the world of NextJS, a powerful React framework. This guide provides a comprehensive introduction for beginners, covering the basics of setting up your development environment, understanding the core concepts, and creating your first NextJS application.",
      date: "2023-02-10",
      slug: "getting-started",
    },
    {
      title: "Advanced Features",
      image: "advanced-features-nextjs.webp",
      excerpt: "Explore the advanced features of NextJS and take your web development skills to the next level. Learn about server-side rendering, static site generation, API routes, and dynamic routing. Enhance your applications with these powerful capabilities for a robust NextJS experience.",
      date: "2023-02-17",
      slug: "advanced-features",
    },
    {
      title: "NextJS for E-commerce",
      image: "nextjs-ecommerce.webp",
      excerpt: "Discover how NextJS can revolutionize e-commerce websites. This article delves into building scalable, fast, and SEO-friendly e-commerce platforms using NextJS. Learn about integrating shopping carts, payment gateways, and product catalogs with ease and efficiency.",
      date: "2023-02-24",
      slug: "nextjs-ecommerce",
    },
    {
      title: "Performance Optimization",
      image: "performance-optimization-nextjs.webp",
      excerpt: "Master the art of performance optimization in NextJS applications. This comprehensive guide covers techniques for reducing load times, optimizing images and assets, leveraging caching strategies, and ensuring your NextJS app runs at peak efficiency.",
      date: "2023-03-03",
      slug: "performance-optimization",
    },
    {
      title: "SEO with NextJS",
      image: "seo-nextjs.webp",
      excerpt: "Learn how to implement effective SEO strategies in NextJS. This article provides insights into optimizing your NextJS application for search engines, including server-side rendering for SEO, managing meta tags, and improving site structure for better search rankings.",
      date: "2023-03-10",
      slug: "seo-nextjs",
    },
    {
      title: "Deploying NextJS Apps",
      image: "deploying-nextjs-apps.webp",
      excerpt: "Uncover the best practices for deploying NextJS applications. From choosing the right hosting solutions to setting up continuous integration and deployment pipelines, this guide walks you through the process of deploying your NextJS app to production environments.",
      date: "2023-03-17",
      slug: "deploying-nextjs-apps",
    },
  ];
  

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
