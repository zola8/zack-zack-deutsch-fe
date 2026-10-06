import { useState } from 'react';
import ChatArea from '../components/chat/ChatArea';
import ChatLog from '../components/chat/ChatLog';
import ConversationHeader from '../components/chat/ConversationHeader';
import ConversationSidebar from '../components/chat/ConversationSidebar';
import { SAMPLE_SESSIONS } from '../data/sample_conversation_sessions';
import type { ConversationSession } from '../data/types/conversation';
import { groupSessionsByDate } from '../data/utils/chat_helpers';



export default function ChatPage() {
  const [sessions, setSessions] = useState<ConversationSession[]>(SAMPLE_SESSIONS);
  const [activeSessionId, setActiveSessionId] = useState<string | null>('1');

  const groups = groupSessionsByDate(sessions);
  const activeSession = sessions.find((s) => s.id === activeSessionId) || null;

  const handleNew = () => {
    const newSession: ConversationSession = {
      id: Date.now().toString(),
      title: 'New conversation',
      date: new Date().toISOString().split('T')[0],
      messages: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setSessions([newSession, ...sessions]);
    setActiveSessionId(newSession.id);
  };

  const handleRename = (id: string, newTitle: string) => {
    setSessions(
      sessions.map((s) =>
        s.id === id ? { ...s, title: newTitle, updatedAt: new Date().toISOString() } : s
      )
    );
  };

  const handleDelete = (id: string) => {
    const filtered = sessions.filter((s) => s.id !== id);
    setSessions(filtered);
    if (activeSessionId === id) {
      setActiveSessionId(filtered[0]?.id || null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[calc(100vh-8rem)]">
      <div className="lg:col-span-1">
        <ConversationSidebar
          groups={groups}
          activeSessionId={activeSessionId}
          onSelect={setActiveSessionId}
          onRename={handleRename}
          onDelete={handleDelete}
          onNew={handleNew}
        />
      </div>

      <div className="lg:col-span-3 flex flex-col gap-4">
        {activeSession ? (
          <>
            <ConversationHeader
              title={activeSession.title}
              date={activeSession.date}
              onRename={(newTitle) => handleRename(activeSession.id, newTitle)}
            />

            <div className="space-y-4">
              <ChatArea />
              <ChatLog />
            </div>
          </>
        ) : (
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="text-lg font-medium mb-1">No conversation selected</p>
              <p className="text-sm">Create a new one to get started.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
