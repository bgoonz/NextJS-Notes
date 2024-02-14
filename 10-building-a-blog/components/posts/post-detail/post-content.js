import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Getting Started",
  image: "getting-started-nextjs.webp",
  content:
    "## File Based Routing \n- NextJS uses file based routing \n- Each file inside the pages directory becomes a route \n- We can nest files inside the pages directory to create nested routes \n- We can use the Link component from next/link to navigate between pages \n- We can use the useRouter hook from next/router to get the current route \n- We can use the withRouter HOC from next/router to inject the router object into the components props",
  date: "2023-02-10",
  slug: "getting-started",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
