export type ConversationRole = 'user' | 'assistant';


export interface ConversationMessage {
  id: string;
  role: ConversationRole;
  content: string;
  timestamp: string;
}


export interface ConversationSession {
  id: string;
  title: string;
  date: string;
  messages: ConversationMessage[];
  createdAt: string;
  updatedAt: string;
}


export interface ConversationGroup {
  date: string;
  label: string; // "Today", "Yesterday", "Oct 5"
  sessions: ConversationSession[];
}
