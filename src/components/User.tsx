import React from 'react'
// type GradientStyle = {
//     bg: string;
//     text: string;
// }
interface UserType {
  id: number;
  name: string;
  email?: string; 
}

interface Props {
  avatarStyle: React.CSSProperties;
  user: UserType;
  initials: string;
}

export default function user({initials, avatarStyle,user}: Props) {
    return (
        <div  className="flex items-center p-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
            {/* Avatar Circle */}
            <div className="flex-shrink-0">
                <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold transition-transform duration-200 hover:scale-110"
                    
                    style={avatarStyle}

                >
                    {initials}
                </div>
            </div>
            {/* User Info */}
            <div className="ml-4 flex-grow">
                <h3 className="text-md font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-gray-500 truncate">{user.email}</p>
            </div>
        </div>
    )
}
