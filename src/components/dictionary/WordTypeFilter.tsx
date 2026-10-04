import type { DictionaryEntry } from "../../data/types/dictionary";


type WordTypeFilterProps = {
  results: DictionaryEntry[];
  selectedTypes: string[];
  onToggle: (wordType: string) => void;
  onClear: () => void;
};

export default function WordTypeFilter({
  results,
  selectedTypes,
  onToggle,
  onClear,
}: WordTypeFilterProps) {
  const typeCounts = results.reduce<Record<string, number>>((acc, entry) => {
    if (entry.word_type) {
      acc[entry.word_type] = (acc[entry.word_type] || 0) + 1;
    }
    return acc;
  }, {});

  const types = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);

  if (types.length <= 1) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs text-gray-500 font-medium mr-1">Filter by type:</span>

      {types.map(([type, count]) => {
        const isSelected = selectedTypes.includes(type);
        return (
          <button
            key={type}
            onClick={() => onToggle(type)}
            className={`badge badge-sm cursor-pointer transition-colors ${isSelected
              ? 'bg-neutral text-neutral-content border-neutral'
              : 'badge-outline text-gray-700 border-gray-300 bg-white hover:border-gray-400'
              }`}
          >
            {type}
            <span className={`ml-1 ${isSelected ? 'text-neutral-content/70' : 'text-gray-400'}`}>
              {count}
            </span>
          </button>
        );
      })}

      {selectedTypes.length > 0 && (
        <button
          onClick={onClear}
          className="text-xs text-gray-500 hover:text-gray-700 underline ml-1"
        >
          Clear filter
        </button>
      )}
    </div>
  );
}
