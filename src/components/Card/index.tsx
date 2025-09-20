
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
  title: string;
  body: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, body, url }) => {
  return (
    <Link href={url}>
      <motion.div
        className="bg-gradient-to-br from-white to-gray-100 text-gray-800 shadow-lg rounded-2xl p-8 flex flex-col justify-between h-full border border-gray-200 cursor-pointer"
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-tight text-gray-900">{title}</h2>
          <p className="text-gray-600">{body}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
