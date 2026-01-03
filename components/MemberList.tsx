
import React from 'react';
import { MOCK_USERS } from '../constants';
import { User } from '../types';

export const MemberList: React.FC = () => {
  const roles = ['Owner', 'Admin', 'Moderator', 'Member'];

  return (
    <div className="w-60 bg-[#2b2d31] flex flex-col pt-3 px-2 overflow-y-auto h-full border-l border-[#1f2023] shrink-0">
      {roles.map(role => {
        const usersInRole = MOCK_USERS.filter(u => u.role === role);
        if (usersInRole.length === 0) return null;

        return (
          <div key={role} className="mb-4">
            <h3 className="uppercase text-[12px] font-bold text-[#949ba4] px-2 mb-1">
              {role} — {usersInRole.length}
            </h3>
            <div className="space-y-[1px]">
              {usersInRole.map(user => (
                <div 
                  key={user.id} 
                  className="flex items-center px-2 py-1.5 rounded-md hover:bg-[#35373c] cursor-pointer group transition-colors"
                >
                  <div className="relative shrink-0">
                    <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full" />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-[#2b2d31] rounded-full group-hover:border-[#35373c] ${
                      user.status === 'online' ? 'bg-[#23a559]' : 
                      user.status === 'idle' ? 'bg-[#f0b232]' : 
                      user.status === 'dnd' ? 'bg-[#f23f43]' : 'bg-[#80848e]'
                    }`} />
                  </div>
                  <span className={`ml-3 text-[15px] truncate font-medium ${
                    role === 'Owner' ? 'text-[#e91e63]' : 
                    role === 'Admin' ? 'text-[#f1c40f]' : 
                    role === 'Moderator' ? 'text-[#3498db]' : 'text-[#949ba4] group-hover:text-[#dbdee1]'
                  }`}>
                    {user.username}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
