import { useEffect, useState } from 'react';
import cookies from 'js-cookie';
import { languages } from '../data/languages';
import { ArrowRightLeft } from 'lucide-react';
import FlagSelect from './FlagSelect';

const COOKIE_FROM = 'lang_from';
const COOKIE_TO = 'lang_to';
const DEFAULT_FROM = 'en';
const DEFAULT_TO = 'de';


type LanguageSelectorProps = {
  onChange?: (from: string, to: string) => void;
};


export default function LanguageFromToSelector({ onChange }: LanguageSelectorProps) {
  const [from, setFrom] = useState<string>(cookies.get(COOKIE_FROM) || DEFAULT_FROM);
  const [to, setTo] = useState<string>(cookies.get(COOKIE_TO) || DEFAULT_TO);

  useEffect(() => {
    cookies.set(COOKIE_FROM, from, { expires: 365, sameSite: 'lax' });
    cookies.set(COOKIE_TO, to, { expires: 365, sameSite: 'lax' });
    onChange?.(from, to);
  }, [from, to, onChange]);

  const availableToLanguages = languages.filter((lang) => lang.code !== from);

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">

        <FlagSelect
          label="From"
          value={from}
          options={languages}
          onChange={setFrom}
        />

        <div className="flex items-end pb-2">
          <button
            onClick={handleSwap}
            className="btn btn-sm btn-ghost btn-circle hover:bg-gray-100 text-gray-500"
            aria-label="Swap languages"
            title="Swap languages"
          >
            <ArrowRightLeft size={18} />
          </button>
        </div>

        <FlagSelect
          label="To"
          value={to}
          options={availableToLanguages}
          onChange={setTo}
        />

      </div>
    </div>
  );
}
