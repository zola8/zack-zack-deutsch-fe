import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import ConversationListItem from './ConversationListItem';
import type { ConversationGroup } from '../../data/types/conversation';


type ConversationDateGroupProps = {
  group: ConversationGroup;
  activeSessionId: string | null;
  onSelect: (id: string) => void;
  onRename: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
};


export default function ConversationDateGroup({
  group,
  activeSessionId,
  onSelect,
  onRename,
  onDelete,
}: ConversationDateGroupProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1 w-full px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide hover:text-gray-700"
      >
        {isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        {group.label}
        <span className="ml-auto text-gray-400 normal-case font-normal">
          {group.sessions.length}
        </span>
      </button>

      {isExpanded && (
        <div className="space-y-0.5 mt-1">
          {group.sessions.map((session) => (
            <ConversationListItem
              key={session.id}
              session={session}
              isActive={session.id === activeSessionId}
              onSelect={onSelect}
              onRename={onRename}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
