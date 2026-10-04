import type { DictionaryEntry } from "../../data/types/dictionary";

type DictionaryResultCardProps = {
  entry: DictionaryEntry;
  rank?: number | null;
};

export default function DictionaryResultCard({ entry, rank }: DictionaryResultCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-white transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-lg font-semibold text-gray-800">{entry.word_from}</span>
          <span className="text-gray-400">→</span>
          <span className="text-lg font-semibold text-gray-800">{entry.word_to}</span>
        </div>
        {rank != null && (
          <span className="badge badge-sm bg-gray-200 text-gray-600 border-0">
            #{rank}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {entry.word_type && (
          <span className="badge badge-outline badge-sm text-blue-700 border-blue-300 bg-white">
            {entry.word_type}
          </span>
        )}
        {entry.classification && (
          <span className="badge badge-outline badge-sm text-purple-700 border-purple-300 bg-white">
            {entry.classification}
          </span>
        )}
        <span className="badge badge-ghost badge-sm text-gray-500">
          {entry.lang_from.toUpperCase()} → {entry.lang_to.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
