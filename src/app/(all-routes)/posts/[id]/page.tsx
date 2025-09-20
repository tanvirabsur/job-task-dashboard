
'use client'
import React from 'react';
import { useParams } from 'next/navigation';
import useFetch from '@/hooks/useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostPage = () => {
  const { id } = useParams();
  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
      <p className="text-gray-600">{post?.body}</p>
    </div>
  );
};

export default PostPage;
