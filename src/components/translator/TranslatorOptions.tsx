type TranslatorOptionsProps = {
  engine: string;
  formality: string;
  onFormalityChange: (value: string) => void;
};


export default function TranslatorOptions({ engine, formality, onFormalityChange }: TranslatorOptionsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-sm font-medium text-gray-600 mb-3">Options</h3>

      {engine === 'azure' && (
        <p className="text-sm text-gray-400 italic">
          No additional options available for this Translator.
        </p>
      )}

      {engine === 'deepl' && (
        <div>
          <p className="text-sm text-gray-700 mb-3 font-medium">Formality</p>
          <div className="flex flex-col gap-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="formality"
                value="less"
                checked={formality === 'less'}
                onChange={(e) => onFormalityChange(e.target.value)}
                className="radio radio-sm radio-neutral mt-0.5"
              />
              <div>
                <span className="text-sm font-medium text-gray-800">Less formal</span>
                <p className="text-xs text-gray-500 mt-0.5">
                  Friendly, casual tone — suitable for chats and informal messages.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="formality"
                value="more"
                checked={formality === 'more'}
                onChange={(e) => onFormalityChange(e.target.value)}
                className="radio radio-sm radio-neutral mt-0.5"
              />
              <div>
                <span className="text-sm font-medium text-gray-800">More formal</span>
                <p className="text-xs text-gray-500 mt-0.5">
                  Polite, respectful tone — suitable for business emails and official documents.
                </p>
              </div>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
