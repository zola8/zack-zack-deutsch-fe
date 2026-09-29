const MAX_CHARS = 5000;

type SourceTextAreaProps = {
  value: string;
  onChange: (value: string) => void;
};


export default function SourceTextArea({ value, onChange }: SourceTextAreaProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-2">
        <label className="label">
          <span className="label-text text-sm font-medium text-gray-600">Source Text</span>
        </label>
        <span className={`text-xs ${value.length >= MAX_CHARS ? 'text-red-500 font-bold' : 'text-gray-500'}`}>
          {value.length} / {MAX_CHARS}
        </span>
      </div>
      <textarea
        value={value}
        onChange={(e) => {
          if (e.target.value.length <= MAX_CHARS) {
            onChange(e.target.value);
          }
        }}
        placeholder="Enter text to translate..."
        className="textarea textarea-bordered w-full h-40 resize-none"
        maxLength={MAX_CHARS}
      />
    </div>
  );
}
