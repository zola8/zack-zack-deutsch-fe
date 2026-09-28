import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CountryFlag from './CountryFlag';
import type { Language } from '../data/languages';


type FlagSelectProps = {
  label: string;
  value: string;
  options: Language[];
  onChange: (code: string) => void;
};


export default function FlagSelect({ label, value, options, onChange }: FlagSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find((opt) => opt.code === value);

  return (
    <div className="flex-1" ref={dropdownRef}>
      <label className="label">
        <span className="label-text text-sm font-medium text-gray-600">{label}</span>
      </label>

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="btn btn-bordered w-full justify-between h-12 normal-case bg-white hover:bg-gray-50 hover:border-gray-300"
        >
          <span className="flex items-center gap-3">
            {selected && <CountryFlag langCode={selected.code} size="sm" />}
            <span className="text-gray-800">{selected?.name}</span>
          </span>
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <ul className="menu bg-white rounded-box absolute z-50 w-full mt-1 p-1 shadow-lg border border-gray-200 max-h-72 overflow-y-auto">
            {options.map((option) => (
              <li key={option.code}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 ${option.code === value ? 'bg-gray-100 font-medium' : ''
                    }`}
                >
                  <CountryFlag langCode={option.code} size="sm" />
                  <span className="text-gray-800">{option.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
