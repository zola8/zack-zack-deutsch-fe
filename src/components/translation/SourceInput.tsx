import { useState, type ChangeEvent } from 'react';
import type { SourceMode } from '../../types/translation';

const ACCEPT = '.txt,.md';

interface SourceInputProps {
  text: string;
  onTextChange: (text: string) => void;
  file: File | null;
  onFileChange: (file: File | null) => void;
}

const modeButtonClass = (active: boolean) =>
  `rounded-md px-4 py-1.5 text-sm font-semibold transition-colors ${active ? 'bg-black text-german-gold' : 'text-black/60 hover:text-black'
  }`;

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
      <div className="inline-flex rounded-lg bg-black/5 p-1">
        <button
          type="button" // would submit the form otherwise
          onClick={() => switchMode('text')}
          className={modeButtonClass(mode === 'text')}
        >
          Text
        </button>
        <button
          type="button"
          onClick={() => switchMode('file')}
          className={modeButtonClass(mode === 'file')}
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
            className="w-full resize-y rounded-lg border border-black/15 bg-white px-3.5 py-2.5 leading-relaxed text-black placeholder:text-black/35 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
          />
        ) : file ? (
          <div className="flex items-center justify-between gap-3 rounded-lg border border-black/15 bg-white px-4 py-3">
            <span className="truncate text-sm text-black">{file.name}</span>
            <button
              type="button"
              onClick={() => onFileChange(null)}
              className="shrink-0 rounded-md px-2 py-1 text-sm font-medium text-black/50 transition-colors hover:bg-black/5 hover:text-black"
            >
              Entfernen
            </button>
          </div>
        ) : (
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-black/20 bg-white px-4 py-10 text-center transition-colors hover:border-black">
            <input
              type="file"
              accept={ACCEPT}
              onChange={handleFileChange}
              className="sr-only"
            />
            <span className="font-semibold text-black">Datei auswählen</span>
            <span className="mt-1 text-sm text-black/50">
              erlaubt: {ACCEPT.replaceAll('.', '').replaceAll(',', ', ')}
            </span>
          </label>
        )}
      </div>
    </div>
  );
}
