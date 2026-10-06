import type { ConversationSession } from "./types/conversation";

export const SAMPLE_SESSIONS: ConversationSession[] = [
  {
    id: '1',
    title: 'Practice at the bakery',
    date: new Date().toISOString().split('T')[0],
    messages: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Ordering coffee',
    date: new Date().toISOString().split('T')[0],
    messages: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Asking for directions',
    date: new Date(Date.now() - 286400000).toISOString().split('T')[0],
    messages: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
