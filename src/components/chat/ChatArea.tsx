import { useState } from 'react';

export default function ChatArea() {
  const [input, setInput] = useState<string>('');

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">

      {/* Options row */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
        <h3 className="text-sm font-medium text-gray-600">Conversation</h3>
      </div>

      {/* Messages area */}
      <div className="flex-1 min-h-[200px] bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto">
        <div className="text-center text-sm text-gray-400 italic">
          Start a conversation...
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message or click the mic..."
          className="input input-bordered flex-1"
        />
        <button className="btn btn-neutral" title="Send">
          Send
        </button>
        <button className="btn btn-outline btn-neutral" title="Clear">
          Clear
        </button>
      </div>
    </div>
  );
}
