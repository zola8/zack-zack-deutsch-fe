import type { DictionaryEntry } from '../../data/types/dictionary';
import DictionaryResultCard from './DictionaryResultCard';

type ResultItem = {
  entry: DictionaryEntry;
  rank?: number | null;
};

type DictionaryResultsProps = {
  items: ResultItem[];
  count: number;
  searchType: string;
};

export default function DictionaryResults({ items, count, searchType }: DictionaryResultsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">Results</h3>
        <span className="text-xs text-gray-500">
          {count} {count === 1 ? 'match' : 'matches'} ({searchType})
        </span>
      </div>

      {count === 0 ? (
        <div className="text-center py-8 text-sm text-gray-500">
          No matches found. Try a different search.
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item, index) => (
            <DictionaryResultCard
              key={`${item.entry.id}-${index}`}
              entry={item.entry}
              rank={item.rank}
            />
          ))}
        </div>
      )}
    </div>
  );
}
