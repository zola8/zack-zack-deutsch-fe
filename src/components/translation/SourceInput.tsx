import { useState, type ChangeEvent } from 'react';
import type { SourceMode } from '../../types/translation';

const ACCEPT = '.txt,.md';

interface SourceInputProps {
  text: string;
  onTextChange: (text: string) => void;
  file: File | null;
  onFileChange: (file: File | null) => void;
}

export function SourceInput({
  text,
  onTextChange,
  file,
  onFileChange,
}: SourceInputProps) {
  const [mode, setMode] = useState<SourceMode>('text');

  const switchMode = (next: SourceMode) => {
    if (next === mode) return;
    setMode(next);
    onTextChange('');
    onFileChange(null);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFileChange(e.target.files?.[0] ?? null);
  };

  return (
    <div>
      {/* Mode switch */}
      <div className="inline-flex rounded-xl bg-gray-100 p-1">
        <button
          type="button" // would submit the form otherwise
          onClick={() => switchMode('text')}
          className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${mode === 'text'
            ? 'bg-black text-german-gold'
            : 'text-gray-600 hover:text-black'
            }`}
        >
          Text
        </button>
        <button
          type="button"
          onClick={() => switchMode('file')}
          className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${mode === 'file'
            ? 'bg-black text-german-gold'
            : 'text-gray-600 hover:text-black'
            }`}
        >
          Datei
        </button>
      </div>

      <div className="mt-3">
        {mode === 'text' ? (
          <textarea
            value={text}
            onChange={(e) => onTextChange(e.target.value)}
            placeholder="Füge deinen deutschen Text hier ein…"
            rows={8}
            className="w-full resize-y rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 leading-relaxed text-gray-900 placeholder:text-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        ) : file ? (
          <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3">
            <span className="truncate text-sm text-gray-900">{file.name}</span>
            <button
              type="button"
              onClick={() => onFileChange(null)}
              className="shrink-0 rounded-lg px-2 py-1 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black"
            >
              Entfernen
            </button>
          </div>
        ) : (
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white px-4 py-10 text-center transition-colors hover:border-black">
            <input
              type="file"
              accept={ACCEPT}
              onChange={handleFileChange}
              className="sr-only"
            />
            <span className="font-semibold text-black">Datei auswählen</span>
            <span className="mt-1 text-sm text-gray-500">
              erlaubt: {ACCEPT.replaceAll('.', '').replaceAll(',', ', ')}
            </span>
          </label>
        )}
      </div>
    </div>
  );
}
