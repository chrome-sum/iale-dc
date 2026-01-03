
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChannelList } from './components/ChannelList';
import { ChatContent } from './components/ChatContent';
import { MemberList } from './components/MemberList';
import { SERVER_DATA, MOCK_MESSAGES } from './constants';
import { Channel, Message } from './types';

const App: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<Channel>(SERVER_DATA[0].channels[0]);
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);

  const handleChannelSelect = (channel: Channel) => {
    if (channel.type === 'text') {
      setActiveChannel(channel);
    }
  };

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: `m-${Date.now()}`,
      userId: 'user-me',
      username: 'Kamu',
      content,
      timestamp: `Hari ini pukul ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      avatar: 'https://picsum.photos/seed/me/40'
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className="flex h-screen w-full bg-[#1e1f22] text-[#dbdee1] overflow-hidden">
      {/* 1. Server Sidebar */}
      <Sidebar />

      {/* 2. Channel Sidebar */}
      <ChannelList 
        activeChannelId={activeChannel.id} 
        onSelectChannel={handleChannelSelect} 
      />

      {/* 3. Main Chat Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <ChatContent 
          channelName={activeChannel.name} 
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      </div>

      {/* 4. Member List (Visible on larger screens) */}
      <div className="hidden lg:block">
        <MemberList />
      </div>
    </div>
  );
};

export default App;
