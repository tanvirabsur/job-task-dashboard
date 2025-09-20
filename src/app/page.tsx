'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <motion.div
        className="bg-white shadow-md rounded-lg p-8 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-4">Welcome to the Dashboard!</h1>
        <p className="text-gray-600">This is a mini-dashboard built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold mb-2">Total Posts</h2>
          <p className="text-3xl font-bold text-blue-500">100</p>
        </motion.div>
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-green-500">10</p>
        </motion.div>
        <motion.div
          className="bg-white shadow-md rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-xl font-bold mb-2">Pending Tasks</h2>
          <p className="text-3xl font-bold text-yellow-500">5</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
