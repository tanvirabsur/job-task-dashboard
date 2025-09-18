import React from 'react'
type GradientStyle = {
    gradient: string;
    text: string;
}
type User = {
    id: number;
    name: string;
    status: string;
};

type Props = {
    initials: string;
    avatarStyle: GradientStyle; // match the new prop name and type
    user: User
};
export default function user({initials, avatarStyle,user}: Props) {
    return (
        <div  className="flex items-center p-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
            {/* Avatar Circle */}
            <div className="flex-shrink-0">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold transition-transform duration-200 hover:scale-110"
                    style={{
                        backgroundImage: avatarStyle.gradient,
                        color: avatarStyle.text,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15), inset 0 2px 3px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.2)',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
                    }}
                >
                    {initials}
                </div>
            </div>
            {/* User Info */}
            <div className="ml-4 flex-grow">
                <h3 className="text-md font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500 truncate">{user.status}</p>
            </div>
        </div>
    )
}
