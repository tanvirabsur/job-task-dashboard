'use client'
import React, { useState } from 'react';
import useFetch from '@/hooks/useFetch';
import Modal from '@/components/Modal';
import Loading from '@/components/Loading';

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

const UsersPage = () => {
  const { data: users, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  if (loading) {
    return <Loading/>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((user) => (
              <tr key={user.id} onClick={() => setSelectedUser(user)} className="cursor-pointer hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={!!selectedUser} onClose={() => setSelectedUser(null)}>
        {selectedUser && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedUser.name}</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Company:</strong> {selectedUser.company.name}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UsersPage;