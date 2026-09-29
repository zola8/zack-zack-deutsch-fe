type TranslatedTextAreaProps = {
  value: string;
};


export default function TranslatedTextArea({ value }: TranslatedTextAreaProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <label className="label mb-2">
        <span className="label-text text-sm font-medium text-gray-600">Translation</span>
      </label>
      <textarea
        value={value}
        readOnly
        placeholder="Translated text will appear here..."
        className="textarea textarea-bordered w-full h-40 resize-none bg-gray-50 cursor-text select-text"
      />
    </div>
  );
}
