
import React, { useState } from 'react';
import { SERVER_DATA } from '../constants';
import { Channel } from '../types';

interface ChannelListProps {
  activeChannelId: string;
  onSelectChannel: (channel: Channel) => void;
}

const HashIcon = () => (
  <svg className="w-5 h-5 mr-1.5 text-[#80848e]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M5.88631 21L6.40777 17H2.48828L2.87942 14H6.79891L7.5812 8H3.66171L4.05285 5H7.97234L8.4938 1H11.4286L10.9071 5H14.8266L15.3481 1H18.2829L17.7614 5H21.6809L21.2897 8H17.3703L16.588 14H20.5075L20.1163 17H16.1968L15.6754 21H12.7406L13.262 17H9.34254L8.82109 21H5.88631ZM9.73368 14H13.6532L14.4355 8H10.5159L9.73368 14Z" />
  </svg>
);

const SpeakerIcon = () => (
  <svg className="w-5 h-5 mr-1.5 text-[#80848e]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.303 3.28604L5.303 8.28604H3C2.448 8.28604 2 8.73404 2 9.28604V14.714C2 15.266 2.448 15.714 3 15.714H5.303L10.303 20.714C10.467 20.878 10.686 20.969 10.912 20.969C11.073 20.969 11.233 20.931 11.383 20.854C11.758 20.669 12 20.283 12 19.863V4.13704C12 3.71704 11.758 3.33104 11.383 3.14604V3.07904ZM14 5V7C16.206 7 18 8.794 18 11C18 13.206 16.206 15 14 15V17C17.309 17 20 14.309 20 11C20 7.691 17.309 5 14 5ZM14 9V13C15.103 13 16 12.103 16 11C16 9.897 15.103 9 14 9Z" />
  </svg>
);

export const ChannelList: React.FC<ChannelListProps> = ({ activeChannelId, onSelectChannel }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    SERVER_DATA.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {})
  );

  const toggleCategory = (id: string) => {
    // FIX: Changed 'acc' to 'prev' as it's the correct reference to the previous state object in the setter callback
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-60 bg-[#2b2d31] flex flex-col shrink-0 overflow-hidden">
      {/* Server Header */}
      <div className="h-12 border-b border-[#1f2023] flex items-center px-4 shadow-sm hover:bg-[#35373c] cursor-pointer transition-colors shrink-0">
        <h1 className="font-bold text-white truncate flex-1">Euphoria Empire</h1>
        <svg className="w-4 h-4 text-[#dbdee1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Categories & Channels Scrollable Area */}
      <div className="flex-1 overflow-y-auto pt-4 pb-4 px-2 custom-scrollbar">
        {SERVER_DATA.map(category => (
          <div key={category.id} className="mb-5">
            <div 
              className="flex items-center px-1 mb-1 group cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              <svg 
                className={`w-3 h-3 mr-0.5 text-[#80848e] transition-transform ${expanded[category.id] ? '' : '-rotate-90'}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="uppercase text-[12px] font-bold text-[#80848e] group-hover:text-[#dbdee1] flex-1">
                {category.name}
              </span>
              <button className="text-[#80848e] hover:text-[#dbdee1] hidden group-hover:block">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </button>
            </div>

            {expanded[category.id] && (
              <div className="space-y-[2px]">
                {category.channels.map(channel => (
                  <div
                    key={channel.id}
                    onClick={() => onSelectChannel(channel)}
                    className={`flex items-center px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
                      activeChannelId === channel.id 
                        ? 'bg-[#404249] text-white' 
                        : 'text-[#80848e] hover:bg-[#35373c] hover:text-[#dbdee1]'
                    }`}
                  >
                    {channel.type === 'text' ? <HashIcon /> : <SpeakerIcon />}
                    <span className="font-medium truncate text-[15px]">{channel.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* User Status Footer */}
      <div className="h-[52px] bg-[#232428] flex items-center px-2 shrink-0">
        <div className="relative group cursor-pointer hover:bg-[#3f4147] p-1 rounded-md flex items-center flex-1">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-2 relative">
            <img src="https://picsum.photos/seed/me/32" alt="My Profile" className="w-full h-full" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#23a559] border-2 border-[#232428] rounded-full" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-white text-sm font-semibold truncate leading-4">EuphoriaUser</span>
            <span className="text-[#b5bac1] text-xs truncate">#0001</span>
          </div>
        </div>
        <div className="flex items-center text-[#b5bac1]">
           <button className="p-1.5 hover:bg-[#3f4147] rounded-md transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
           </button>
           <button className="p-1.5 hover:bg-[#3f4147] rounded-md transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 12v-1.92c0-2.62-1.52-5.4-4.03-6.67C13.91 2.38 10.97 2.09 8.2 3.01 5.37 3.96 3 6.64 3 9.6V12c-1.66 0-3 1.34-3 3v2c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3v-2c0-1.66-1.34-3-3-3zm-7 0h-2v-1h2v1zm0-3h-2V8h2v1zm0-3h-2V5h2v1z"/></svg>
           </button>
           <button className="p-1.5 hover:bg-[#3f4147] rounded-md transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
           </button>
        </div>
      </div>
    </div>
  );
};
