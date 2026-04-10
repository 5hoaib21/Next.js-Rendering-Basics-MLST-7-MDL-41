'use client'
import React, { use } from 'react';

const Posts = ({postsPromise}) => {
  const posts = use(postsPromise)
  console.log('posts in posts component',posts);
  return (
    <div>
      <h2 className="text-4xl">Post: {posts.length}</h2>
     {
      posts.map((post) =>(  <ol key={post.id} className='text-3xl font-semibold border my-5 mx-5 p-5'><li>{post.title}</li></ol>) )
     }
    </div>
  );
};

export default Posts;