'use client'
import React, { use } from 'react';

const Posts = ({postsPromise}) => {
  const posts = use(postsPromise)
  console.log('posts in posts component',posts);
  return (
    <div>
      <h2 className="text-4xl">Post: {posts.length}</h2>
    </div>
  );
};

export default Posts;