type SearchMode = 'search' | 'contains';

type SearchModeSelectorProps = {
  value: SearchMode;
  onChange: (mode: SearchMode) => void;
};

const modes: { value: SearchMode; label: string; description: string }[] = [
  { value: 'search', label: 'Search', description: 'Fuzzy match with ranking' },
  { value: 'contains', label: 'Contains', description: 'Text contains specific substring' },
];

export default function SearchModeSelector({ value, onChange }: SearchModeSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-sm font-medium text-gray-600 mb-3">Search Mode</h3>
      <div className="flex flex-col sm:flex-row gap-2">
        {modes.map((mode) => (
          <button
            key={mode.value}
            onClick={() => onChange(mode.value)}
            className={`flex-1 rounded-lg border p-3 text-left transition-colors ${value === mode.value
                ? 'border-neutral bg-neutral/5'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
          >
            <p className={`text-sm font-medium ${value === mode.value ? 'text-neutral' : 'text-gray-800'}`}>
              {mode.label}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{mode.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export type { SearchMode };
