
'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const variants = {
    open: { width: 240 },
    closed: { width: 60 },
  };

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className="bg-gray-800 text-white h-full"
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && <h1 className="text-xl font-bold">Menu</h1>}
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/">
              <p>{isOpen ? 'Home' : 'H'}</p>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/posts">
              <p>{isOpen ? 'Posts' : 'P'}</p>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/users">
              <p>{isOpen ? 'Users' : 'U'}</p>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
