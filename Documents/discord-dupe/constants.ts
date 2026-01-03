
import { Category, User, Message } from './types';

export const SERVER_DATA: Category[] = [
  {
    id: 'cat-1',
    name: 'Main Lobby',
    channels: [
      { id: 'ch-1', name: 'general-chat', type: 'text' },
      { id: 'ch-2', name: 'braindead-chat', type: 'text' },
      { id: 'ch-3', name: 'diskusi-buku', type: 'text' },
      { id: 'ch-4', name: 'curhat', type: 'text' },
      { id: 'ch-5', name: 'bot-command', type: 'text' },
      { id: 'ch-6', name: 'download-emoji', type: 'text' },
    ]
  },
  {
    id: 'cat-2',
    name: 'Hobi',
    channels: [
      { id: 'ch-7', name: 'kreasi-member', type: 'text' },
      { id: 'ch-8', name: 'anime-movie', type: 'text' },
      { id: 'ch-9', name: 'mabar-dan-chat-game', type: 'text' },
      { id: 'ch-10', name: 'food-truck', type: 'text' },
      { id: 'ch-11', name: 'game-gratis', type: 'text' },
      { id: 'ch-12', name: 'mari-berhitung', type: 'text' },
    ]
  },
  {
    id: 'cat-3',
    name: 'Pois Yuk',
    channels: [
      { id: 'ch-13', name: 'general', type: 'voice' },
      { id: 'ch-14', name: 'music', type: 'voice' },
      { id: 'ch-15', name: 'discussion', type: 'voice' },
    ]
  },
  {
    id: 'cat-4',
    name: 'Free',
    channels: [
      { id: 'ch-16', name: 'manage vc', type: 'voice' },
      { id: 'ch-17', name: '+ create vc', type: 'voice' },
    ]
  }
];

export const MOCK_USERS: User[] = [
  { id: 'u1', username: 'Asparagus', status: 'online', role: 'Member', avatar: 'https://picsum.photos/seed/u1/40' },
  { id: 'u2', username: 'Noona', status: 'dnd', role: 'Member', avatar: 'https://picsum.photos/seed/u2/40' },
  { id: 'u3', username: 'The last creature', status: 'idle', role: 'Member', avatar: 'https://picsum.photos/seed/u3/40' },
  { id: 'u4', username: 'Cloudy', status: 'online', role: 'Member', avatar: 'https://picsum.photos/seed/u4/40' },
  { id: 'u5', username: 'Edina', status: 'online', role: 'Member', avatar: 'https://picsum.photos/seed/u5/40' },
];

export const MOCK_MESSAGES: Message[] = [
  { id: 'm1', userId: 'u1', username: 'Asparagus', content: 'Halo semuanya! Selamat datang di Euphoria Empire 🌟', timestamp: 'Hari ini pukul 14:30', avatar: 'https://picsum.photos/seed/u1/40' },
  { id: 'm2', userId: 'u4', username: 'Cloudy', content: 'Halo Min! Gak sabar nunggu mabar nanti malam.', timestamp: 'Hari ini pukul 14:32', avatar: 'https://picsum.photos/seed/u4/40' },
  { id: 'm3', userId: 'u2', username: 'Noona', content: 'Jangan lupa cek channel #announcements ya teman-teman.', timestamp: 'Hari ini pukul 14:35', avatar: 'https://picsum.photos/seed/u2/40' },
  { id: 'm4', userId: 'u5', username: 'Edina', content: 'Ada yang mau main Valorant? Gas mabar-dan-chat-game.', timestamp: 'Hari ini pukul 14:40', avatar: 'https://picsum.photos/seed/u5/40' },
  { id: 'm5', userId: 'u1', username: 'Asparagus', content: 'Nanti aku ikutan! 💪', timestamp: 'Hari ini pukul 14:42', avatar: 'https://picsum.photos/seed/u1/40', replyTo: 'm4' },
];
