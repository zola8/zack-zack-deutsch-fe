import { ENGINE_OPTIONS, type TranslationEngine } from '../../types/translation';

interface EngineSelectProps {
  value: TranslationEngine;
  onChange: (engine: TranslationEngine) => void;
}

export function EngineSelect({ value, onChange }: EngineSelectProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-black">
        Übersetzungs-Engine
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as TranslationEngine)}
          className="w-full appearance-none rounded-lg border border-black/15 bg-white py-2.5 pl-3.5 pr-10 text-black focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
        >
          {ENGINE_OPTIONS.map((engine) => (
            <option key={engine.id} value={engine.id}>
              {engine.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/50"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </div>
    </label>
  );
}
