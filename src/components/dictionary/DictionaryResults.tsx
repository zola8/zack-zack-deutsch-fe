import { useState } from 'react';
import DictionaryResultCard from './DictionaryResultCard';
import WordTypeFilter from './WordTypeFilter';
import type { DictionaryEntry } from '../../data/types/dictionary';


type DictionaryResultsProps = {
  items: DictionaryEntry[];
  count: number;
  searchType: string;
};

export default function DictionaryResults({ items, count, searchType }: DictionaryResultsProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleToggle = (wordType: string) => {
    setSelectedTypes((prev) =>
      prev.includes(wordType)
        ? prev.filter((t) => t !== wordType)
        : [...prev, wordType]
    );
  };

  const handleClearFilter = () => {
    setSelectedTypes([]);
  };

  const availableTypes = new Set(items.map((i) => i.word_type).filter(Boolean));
  const validSelectedTypes = selectedTypes.filter((t) => availableTypes.has(t));
  if (validSelectedTypes.length !== selectedTypes.length) {
    setTimeout(() => setSelectedTypes(validSelectedTypes), 0);
  }

  const filteredItems =
    validSelectedTypes.length === 0
      ? items
      : items.filter((item) => item.word_type && validSelectedTypes.includes(item.word_type));

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">Results</h3>
        <span className="text-xs text-gray-500">
          {filteredItems.length} of {count} {count === 1 ? 'match' : 'matches'} ({searchType})
        </span>
      </div>

      <WordTypeFilter
        results={items}
        selectedTypes={validSelectedTypes}
        onToggle={handleToggle}
        onClear={handleClearFilter}
      />

      {count === 0 ? (
        <div className="text-center py-8 text-sm text-gray-500">
          No matches found. Try a different search.
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center py-8 text-sm text-gray-500">
          No matches for the selected types. Try clearing the filter.
        </div>
      ) : (
        <div className="space-y-2 mt-3">
          {filteredItems.map((entry, index) => (
            <DictionaryResultCard key={`${entry.id}-${index}`} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
