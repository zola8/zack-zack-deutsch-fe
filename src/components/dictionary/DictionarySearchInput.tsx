import type { SearchMode } from './SearchModeSelector';

type ContainsField = 'word_from' | 'word_to' | 'classification';

type DictionarySearchInputProps = {
  mode: SearchMode;
  value: string;
  onChange: (value: string) => void;
  containsField: ContainsField;
  onContainsFieldChange: (field: ContainsField) => void;
};

const fieldLabels: Record<ContainsField, string> = {
  word_from: 'Source word',
  word_to: 'Target word',
  classification: 'Classification',
};

export default function DictionarySearchInput({
  mode,
  value,
  onChange,
  containsField,
  onContainsFieldChange,
}: DictionarySearchInputProps) {
  const placeholder =
    mode === 'exact'
      ? 'Enter exact word to find...'
      : mode === 'contains'
        ? 'Enter text to search for...'
        : 'Enter search query...';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <label className="label">
        <span className="label-text text-sm font-medium text-gray-600">
          {mode === 'exact' ? 'Word' : mode === 'contains' ? 'Search text' : 'Query'}
        </span>
      </label>

      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="input input-bordered flex-1"
        />

        {mode === 'contains' && (
          <select
            value={containsField}
            onChange={(e) => onContainsFieldChange(e.target.value as ContainsField)}
            className="select select-bordered sm:w-48"
          >
            {(Object.keys(fieldLabels) as ContainsField[]).map((field) => (
              <option key={field} value={field}>
                {fieldLabels[field]}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
