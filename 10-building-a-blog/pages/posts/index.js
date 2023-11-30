import AllPosts from "../../components/posts/all-posts";
import { DUMMY_POSTS } from "..";
function AllPostsPage() {
  return (
    <div>
      <AllPosts posts={DUMMY_POSTS} />
    </div>
  );
}

export default AllPostsPage;
