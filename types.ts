
export type ChannelType = 'text' | 'voice';

export interface Channel {
  id: string;
  name: string;
  type: ChannelType;
  isActive?: boolean;
}

export interface Category {
  id: string;
  name: string;
  channels: Channel[];
}

export interface User {
  id: string;
  username: string;
  status: 'online' | 'idle' | 'dnd' | 'offline';
  role: 'Owner' | 'Admin' | 'Moderator' | 'Member';
  avatar: string;
}

export interface Message {
  id: string;
  userId: string;
  username: string;
  content: string;
  timestamp: string;
  avatar: string;
  replyTo?: string; // ID of the message being replied to
}
