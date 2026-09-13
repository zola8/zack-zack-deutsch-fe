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
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as TranslationEngine)}
        className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-gray-900 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
      >
        {ENGINE_OPTIONS.map((engine) => (
          <option key={engine.id} value={engine.id}>
            {engine.label}
          </option>
        ))}
      </select>
    </label>
  );
}
