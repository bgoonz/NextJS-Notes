import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Getting Started",
  image: "getting-started-nextjs.webp",
  content:
    "## File Based Routing - NextJS uses file based routing - Each file inside the pages directory becomes a route - We can nest files inside the pages directory to create nested routes - We can use the Link component from next/link to navigate between pages - We can use the useRouter hook from next/router to get the current route - We can use the withRouter HOC from next/router to inject the router object into the components props",
  date: "2023-02-10",
  slug: "getting-started",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      CONTENT
    </article>
  );
}

export default PostContent;
