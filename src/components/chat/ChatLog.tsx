export default function ChatLog() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">

      {/* Header with buttons */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
        <h3 className="text-sm font-medium text-gray-600">Conversation Log</h3>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-sm text-xs text-red-600 hover:bg-red-50">
            Clear
          </button>
        </div>
      </div>

      {/* Log content */}
      <div className="flex-1 min-h-[120px] bg-gray-50 rounded-lg p-4 overflow-y-auto">
        <div className="text-center text-sm text-gray-400 italic">
          No log entries yet.
        </div>
      </div>

    </div>
  );
}
