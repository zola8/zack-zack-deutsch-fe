import type { GrammarCheckResponse } from "../../data/types/grammar";


type GrammarOutputAreaProps = {
  response: GrammarCheckResponse | null;
};


export default function GrammarOutputArea({ response }: GrammarOutputAreaProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <label className="label mb-2">
        <span className="label-text text-sm font-medium text-gray-600">Grammar check results</span>
      </label>

      {!response ? (
        <textarea
          value=""
          readOnly
          placeholder="Results will appear here..."
          className="textarea textarea-bordered w-full h-30 resize-none bg-gray-50 cursor-text select-text"
        />
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gray-500">Language:</span>
            <span className="font-medium text-gray-800">{response.language}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">Provider:</span>
            <span className="font-medium text-gray-800">{response.provider}</span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">Issues found:</span>
            <span className={`font-medium ${response.match_count > 0 ? 'text-red-600' : 'text-green-600'}`}>
              {response.match_count}
            </span>
          </div>

          {response.match_count === 0 ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
              ✓ No grammar issues found. Your text looks good!
            </div>
          ) : (
            <div className="space-y-3">
              {response.matches.map((match, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                >
                  <p className="text-sm text-gray-800 mb-2">{match.message}</p>
                  <div className="text-xs text-gray-500 mb-2">
                    In: <span className="italic">"{match.sentence}"</span>
                  </div>
                  {match.replacements.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-gray-500">Suggestions:</span>
                      {match.replacements.map((replacement, i) => (
                        <span
                          key={i}
                          className="badge badge-outline badge-sm text-green-700 border-green-300 bg-white"
                        >
                          {replacement}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
