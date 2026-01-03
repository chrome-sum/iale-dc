
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';

interface ChatContentProps {
  channelName: string;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

// Helper: Find a message by ID
const findMessageById = (messages: Message[], id: string | undefined): Message | undefined => {
  if (!id) return undefined;
  return messages.find(msg => msg.id === id);
};

// Reply preview component
const ReplyPreview: React.FC<{ message: Message | undefined }> = ({ message }) => {
  if (!message) {
    return <div className="text-xs text-[#949ba4] italic mb-1">Pesan yang dirujuk tidak ditemukan</div>;
  }
  
  return (
    <div className="text-xs mb-1 pl-3 border-l-2 border-[#5865f2] text-[#b5bac1]">
      <span className="font-semibold text-[#5865f2]">{message.username}</span>
      <p className="text-[#949ba4] truncate">{message.content}</p>
    </div>
  );
};

export const ChatContent: React.FC<ChatContentProps> = ({ channelName, messages, onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-[#313338] h-full">
      {/* Header */}
      <div className="h-12 border-b border-[#1f2023] flex items-center px-4 shadow-sm shrink-0">
        <svg className="w-6 h-6 mr-2 text-[#80848e]" fill="currentColor" viewBox="0 0 24 24"><path d="M5.88631 21L6.40777 17H2.48828L2.87942 14H6.79891L7.5812 8H3.66171L4.05285 5H7.97234L8.4938 1H11.4286L10.9071 5H14.8266L15.3481 1H18.2829L17.7614 5H21.6809L21.2897 8H17.3703L16.588 14H20.5075L20.1163 17H16.1968L15.6754 21H12.7406L13.262 17H9.34254L8.82109 21H5.88631ZM9.73368 14H13.6532L14.4355 8H10.5159L9.73368 14Z" /></svg>
        <h2 className="font-bold text-white text-[15px]">{channelName}</h2>
        <div className="ml-auto flex items-center gap-4 text-[#b5bac1]">
          <button className="hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          </button>
          <button className="hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z"/></svg>
          </button>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Cari" 
              className="bg-[#1e1f22] text-sm rounded-md px-2 py-1 w-36 outline-none text-[#dbdee1] placeholder-[#949ba4]"
            />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex group hover:bg-[#2e3035] -mx-4 px-4 py-1 transition-colors">
            <img src={msg.avatar} alt={msg.username} className="w-10 h-10 rounded-full mr-4 mt-1 shrink-0 cursor-pointer" />
            <div className="flex flex-col w-full">
              {msg.replyTo && (
                <ReplyPreview message={findMessageById(messages, msg.replyTo)} />
              )}
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-white cursor-pointer hover:underline text-[15px]">{msg.username}</span>
                <span className="text-xs text-[#949ba4]">{msg.timestamp}</span>
              </div>
              <p className="text-[#dbdee1] leading-5 text-[15px] whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="px-4 pb-6 shrink-0">
        <form onSubmit={handleSubmit} className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b5bac1] hover:text-[#dbdee1] cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
          </div>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Kirim pesan ke #${channelName}`}
            className="w-full bg-[#383a40] text-[#dbdee1] rounded-lg py-2.5 pl-14 pr-12 outline-none focus:ring-0 placeholder-[#949ba4] text-[15px]"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3 text-[#b5bac1]">
            <button type="button" className="hover:text-[#dbdee1]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3v-3zM11 5h2v3h-2zM13 11h-2v3H8v2h3v3h2v-3h3v-2h-3v-3z"/></svg>
            </button>
            <button type="button" className="hover:text-[#dbdee1]">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
