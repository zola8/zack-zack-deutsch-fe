import type { ConversationSession, ConversationGroup } from "../types/conversation";


export function groupSessionsByDate(sessions: ConversationSession[]): ConversationGroup[] {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const isToday = (date: string) => {
    const d = new Date(date);
    return d.toDateString() === today.toDateString();
  };
  const isYesterday = (date: string) => {
    const d = new Date(date);
    return d.toDateString() === yesterday.toDateString();
  };

  const groups: Record<string, ConversationGroup> = {};

  sessions.forEach((session) => {
    let label: string;
    if (isToday(session.date)) {
      label = 'Today';
    } else if (isYesterday(session.date)) {
      label = 'Yesterday';
    } else {
      label = new Date(session.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    }

    if (!groups[session.date]) {
      groups[session.date] = { date: session.date, label, sessions: [] };
    }
    groups[session.date].sessions.push(session);
  });

  return Object.values(groups).sort((a, b) => b.date.localeCompare(a.date));
}
