'use client';
import React from 'react';
import { motion } from 'framer-motion';

const data = [
  { name: 'Posts', value: 100 },
  { name: 'Users', value: 10 },
  { name: 'Tasks', value: 5 },
  { name: 'Completed', value: 20 },
];

const Chart = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Statistics</h2>
      <div className="flex justify-around items-end h-64">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              className="w-12 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative"
              initial={{ height: 0 }}
              animate={{ height: `${(item.value / 120) * 256}px` }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-bold text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {item.value}
              </motion.span>
            </motion.div>
            <p className="text-sm font-medium text-gray-600 mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
