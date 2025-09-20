
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ title, body }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-white to-gray-100 text-gray-800 shadow-lg rounded-2xl p-8 flex flex-col justify-between h-full border border-gray-200"
      whileHover={{ scale: 1.05, rotate: -1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <div>
        <h2 className="text-3xl font-extrabold mb-4 tracking-tight text-gray-900">{title}</h2>
        <p className="text-gray-600">{body}</p>
      </div>
      <div className="mt-4 text-right">
        <p className="text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors">Read more...</p>
      </div>
    </motion.div>
  );
};

export default Card;
