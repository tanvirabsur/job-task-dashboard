'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Chart from '@/components/Chart';
import Card from '@/components/Card';

const Home = () => {
  return (
    <div className="p-8">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500">Welcome back, here s a look at your stats.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Chart />
        </div>
        <div className="grid grid-cols-1 gap-8">
          <Card title="Total Posts" body="100" url="/posts" />
          <Card title="Total Users" body="10" url="/users" />
          <Card title="Pending Tasks" body="5" url="#" />
        </div>
      </div>
    </div>
  );
};

export default Home;