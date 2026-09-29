type EngineSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};


export default function EngineSelector({ value, onChange }: EngineSelectorProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <label className="label mr-3">
        <span className="label-text text-sm font-medium text-gray-600">Translation Engine</span>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="select select-bordered w-full max-w-xs"
      >
        <option value="azure">Azure</option>
        <option value="deepl">DeepL</option>
      </select>
    </div>
  );
}
