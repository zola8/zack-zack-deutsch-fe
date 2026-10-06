import { Plus } from 'lucide-react';
import type { ConversationGroup } from '../../data/types/conversation';
import ConversationDateGroup from './ConversationDateGroup';
import ChatAvatar from './ChatAvatar';


type ConversationSidebarProps = {
  groups: ConversationGroup[];
  activeSessionId: string | null;
  onSelect: (id: string) => void;
  onRename: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
  onNew: () => void;
};



export default function ConversationSidebar({
  groups,
  activeSessionId,
  onSelect,
  onRename,
  onDelete,
  onNew,
}: ConversationSidebarProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col h-full">
      <div className="mb-4">
        <ChatAvatar />
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-700">Conversations</h3>
        <button
          onClick={onNew}
          className="btn btn-sm btn-neutral text-white gap-1"
          title="New conversation"
        >
          <Plus size={14} />
          New
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {groups.length === 0 ? (
          <div className="text-center py-8 text-sm text-gray-400">
            No conversations yet.
            <br />
            Start a new one!
          </div>
        ) : (
          groups.map((group) => (
            <ConversationDateGroup
              key={group.date}
              group={group}
              activeSessionId={activeSessionId}
              onSelect={onSelect}
              onRename={onRename}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}
