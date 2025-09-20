'use client'
import React, { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import Card from '@/components/Card';
import { motion } from 'framer-motion';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostsPage = () => {
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts');
  const { data: posts, loading, error } = useFetch<Post[]>(url);

  const simulateError = () => {
    setUrl('https://jsonplaceholder.typicode.com/invalid-posts');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8 text-red-500">Error</h1>
        <p>{error}</p>
        <button
          onClick={() => setUrl('https://jsonplaceholder.typicode.com/posts')}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Posts</h1>
        <button
          onClick={simulateError}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Simulate Error
        </button>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {posts?.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            body={post.body}
            url={`/posts/${post.id}`}
          />
        ))}
      </motion.div> 
    </div>
  );
};

export default PostsPage;
