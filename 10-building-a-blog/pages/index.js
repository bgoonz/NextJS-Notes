import Hero from "./../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    title: "Getting Started",
    image: "getting-started-nextjs.webp",
    excerpt: "Getting started with nextJS a React framework",
    date: "2023-02-10",
    slug: "getting-started",
  },
  {
    title: "Advanced Features",
    image: "advanced-features-nextjs.webp",
    excerpt: "Exploring advanced features in NextJS",
    date: "2023-02-17",
    slug: "advanced-features",
  },
  {
    title: "NextJS for E-commerce",
    image: "nextjs-ecommerce.webp",
    excerpt: "Building e-commerce sites with NextJS",
    date: "2023-02-24",
    slug: "nextjs-ecommerce",
  },
  {
    title: "Performance Optimization",
    image: "performance-optimization-nextjs.webp",
    excerpt: "Optimizing performance in NextJS applications",
    date: "2023-03-03",
    slug: "performance-optimization",
  },
  {
    title: "SEO with NextJS",
    image: "seo-nextjs.webp",
    excerpt: "Implementing SEO strategies in NextJS",
    date: "2023-03-10",
    slug: "seo-nextjs",
  },
  {
    title: "Deploying NextJS Apps",
    image: "deploying-nextjs-apps.webp",
    excerpt: "Best practices for deploying NextJS applications",
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
