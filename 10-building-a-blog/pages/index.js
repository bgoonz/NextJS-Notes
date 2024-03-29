import Hero from "./../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  console.log(featuredPosts);

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
