import React from 'react'
import User from '@/components/User'

export interface UserType {
  id: number;
  name: string;
  email?: string; 
}

interface SingelUserProps {
  users: UserType[];
}

type GradientStyle = {
    bg: string;
    text: string;
}

const colorPairs:GradientStyle[] = [
    { bg: '#ef4444', text: '#ffffff' }, // Red
    { bg: '#f97316', text: '#ffffff' }, // Orange
    { bg: '#10b981', text: '#ffffff' }, // Emerald
    { bg: '#3b82f6', text: '#ffffff' }, // Blue
    { bg: '#6366f1', text: '#ffffff' }, // Indigo
    { bg: '#8b5cf6', text: '#ffffff' }, // Violet
    { bg: '#ec4899', text: '#ffffff' }, // Pink
    { bg: '#14b8a6', text: '#ffffff' }, // Teal
    { bg: '#f59e0b', text: '#ffffff' }, // Amber
    { bg: '#22c55e', text: '#ffffff' }, // Green
];


const generateAvatarStyle = (name: string)=> {
    // Create a simple hash from the name to get a consistent index
    const charCodeSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const index = charCodeSum % colorPairs.length;
    const selectedStyle = colorPairs[index];

    return {
        backgroundColor: selectedStyle.bg,
        color: selectedStyle.text,
    };
};


const getInitials = (name: string): string => {
    const names = name.trim().split(' ');
    if (names.length === 1) {
        return names[0][0] ? names[0][0].toUpperCase() : '';
    }
    const firstNameInitial = names[0][0] ? names[0][0].toUpperCase() : '';
    const lastNameInitial = names[names.length - 1][0] ? names[names.length - 1][0].toUpperCase() : '';
    return `${firstNameInitial}${lastNameInitial}`;
};

export default function SingelUser({ users }: SingelUserProps) {
    console.log(users);
    return (
        <>
            <div className="w-full  mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                {/* Header */}
                <header className="bg-gray-100 p-4 border-b border-gray-200">
                    <h1 className="text-xl font-bold text-gray-800">Contacts</h1>
                </header>

                {/* User list container */}
                <div className="divide-y divide-gray-200">
                    {users.map((user,index) => {
                        const initials= getInitials(user?.name);
                        const style = generateAvatarStyle(user.name);

                        return (
                            <User  avatarStyle={style} user={user} initials={initials} key={index}/>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
