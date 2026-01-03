
import React from 'react';

const ServerIcon: React.FC<{ active?: boolean; color?: string; name?: string; image?: string }> = ({ active, color = "#5865f2", name, image }) => {
  return (
    <div className="relative group flex items-center justify-center mb-2 cursor-pointer">
      <div className={`absolute left-0 w-1 bg-white rounded-r-full transition-all duration-200 ${active ? 'h-10' : 'h-0 group-hover:h-5'}`} />
      <div className={`w-12 h-12 flex items-center justify-center rounded-3xl group-hover:rounded-2xl transition-all duration-200 overflow-hidden ${active ? 'rounded-2xl' : ''}`} style={{ backgroundColor: image ? 'transparent' : active ? color : '#313338' }}>
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className={`font-semibold ${active ? 'text-white' : 'text-[#dbdee1] group-hover:text-white'}`}>
            {name ? name.substring(0, 1) : 'D'}
          </span>
        )}
      </div>
    </div>
  );
};

export const Sidebar: React.FC = () => {
  return (
    <div className="w-[72px] bg-[#1e1f22] flex flex-col items-center pt-3 shrink-0 h-full">
      <ServerIcon active color="#5865f2" name="E" />
      <div className="w-8 h-[2px] bg-[#35363c] rounded-full mb-2" />
      <ServerIcon name="G" />
      <ServerIcon name="W" />
      <ServerIcon image="https://picsum.photos/seed/discord1/48" />
      <ServerIcon image="https://picsum.photos/seed/discord2/48" />
      
      <div className="mt-auto pb-4">
        <ServerIcon color="#23a559" name="+" />
        <ServerIcon color="#23a559" name="🧭" />
      </div>
    </div>
  );
};
