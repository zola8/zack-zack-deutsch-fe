import type { SearchMode } from './SearchModeSelector';

type DictionarySearchInputProps = {
  mode: SearchMode;
  value: string;
  onChange: (value: string) => void;
};

export default function DictionarySearchInput({
  mode,
  value,
  onChange,
}: DictionarySearchInputProps) {
  const placeholder =
    mode === 'contains'
      ? 'Enter text to search for...'
      : 'Enter search query...';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <label className="label mb-2">
        <span className="label-text text-sm font-medium text-gray-600">
          {mode === 'contains' ? 'Search text' : 'Query'}
        </span>
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </div>
  );
}
