import React from 'react'
import User from '@/components/User'
type User = {
    id: number;
    name: string;
    status: string;
};

type GradientStyle = {
    gradient: string;
    text: string;
};


const users: User[] = [
    { id: 1, name: 'Sabbir Ahmed', status: 'Coding is fun!' },
    { id: 2, name: 'Ratul Khan', status: 'Available' },
    { id: 3, name: 'Jannatul Ferdous', status: 'At work' },
    { id: 4, name: 'Mithun Roy', status: 'Hey there! I am using this app.' },
    { id: 5, name: 'Afia Rahman', status: 'Sleeping' },
    { id: 6, name: 'Tanvir Hasan', status: 'On a trip' },
    { id: 7, name: 'Bonna Akter', status: 'Busy' },
    { id: 8, name: 'Zahid', status: 'Can\'t talk now.' }
];

const gradientStyles: GradientStyle[] = [
    { gradient: 'linear-gradient(135deg, #ff7e5f, #feb47b)', text: '#ffffff' }, // Peach
    { gradient: 'linear-gradient(135deg, #89f7fe, #66a6ff)', text: '#ffffff' }, // Light Blue
    { gradient: 'linear-gradient(135deg, #ff9a9e, #fad0c4)', text: '#ffffff' }, // Pinkish
    { gradient: 'linear-gradient(135deg, #a1c4fd, #c2e9fb)', text: '#27272a' }, // Sky Blue (dark text)
    { gradient: 'linear-gradient(135deg, #d4fc79, #96e6a1)', text: '#27272a' }, // Lime Green (dark text)
    { gradient: 'linear-gradient(135deg, #f6d365, #fda085)', text: '#ffffff' }, // Orange
    { gradient: 'linear-gradient(135deg, #c79081, #dfa579)', text: '#ffffff' }, // Bronze
    { gradient: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)', text: '#ffffff' }, // Lavender
    { gradient: 'linear-gradient(135deg, #84fab0, #8fd3f4)', text: '#ffffff' }, // Aqua
    { gradient: 'linear-gradient(135deg, #e0c3fc, #8ec5fc)', text: '#ffffff' }, // Purple-Blue
    { gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', text: '#ffffff' }  // Pink-Red
];

const getInitials = (name: string): string => {
    if (!name) return '?';
    const nameParts = name.trim().split(' ');
    if (nameParts.length > 1) {
        const firstName = nameParts[0];
        const lastName = nameParts[nameParts.length - 1];
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    } else {
        return name.charAt(0).toUpperCase();
    }
};

const generateAvatarStyle = (name: string): GradientStyle => {
    if (!name) return { gradient: 'linear-gradient(135deg, #e2e8f0, #f1f5f9)', text: '#475569' }; // Default gray
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash % gradientStyles.length);
    return gradientStyles[index];
};

export default function SingelUser() {
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
