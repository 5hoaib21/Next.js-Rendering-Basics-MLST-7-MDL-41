import Posts from "@/components/Posts";
import React, { Suspense } from "react";

const PostsPage = () => {
  const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div>
      <h2>Those are my posts</h2>
      <Suspense fallback={<h2 className="text-3xl">Loading posts...</h2>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
    </div>
  );
};

export default PostsPage;
