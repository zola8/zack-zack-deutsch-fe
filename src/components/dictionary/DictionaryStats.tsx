import type { StatsResponse } from "../../data/types/dictionary";

type DictionaryStatsProps = {
  stats: StatsResponse | null;
};

export default function DictionaryStats({ stats }: DictionaryStatsProps) {
  if (!stats) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="loading loading-spinner loading-sm"></span>
          Loading dictionary stats...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-sm font-medium text-gray-600 mb-3">Dictionary Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Total entries</p>
          <p className="text-2xl font-bold text-gray-800">
            {stats.total_entries.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Language pairs</p>
          <div className="space-y-1">
            {stats.language_pairs.slice(0, 3).map((pair) => (
              <p key={`${pair.lang_from}-${pair.lang_to}`} className="text-sm text-gray-700">
                <span className="uppercase font-medium">{pair.lang_from}</span>
                <span className="text-gray-400"> → </span>
                <span className="uppercase font-medium">{pair.lang_to}</span>
                <span className="text-gray-400 ml-2">({pair.count})</span>
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Top word types</p>
          <div className="flex flex-wrap gap-2">
            {stats.top_word_types.slice(0, 5).map((type) => (
              <span
                key={type.word_type}
                className="badge badge-outline badge-sm text-gray-700 border-gray-300 bg-white"
              >
                {type.word_type} ({type.count})
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
