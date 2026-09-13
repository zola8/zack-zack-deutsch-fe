import { useState, type SubmitEvent } from 'react';
import { requestTranslation } from '../api/translation';
import { Gloss } from '../components/Gloss';
import { EngineSelect } from '../components/translation/EngineSelect';
import { SourceInput } from '../components/translation/SourceInput';
import type {
  SubmitStatus,
  TranslationEngine,
  TranslationResult,
} from '../types/translation';

export default function TranslationPage() {
  const [text, setText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [engine, setEngine] = useState<TranslationEngine>('deepl');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [result, setResult] = useState<TranslationResult | null>(null);

  const hasInput = file !== null || text.trim().length > 0;
  const loading = status === 'loading';

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!hasInput || loading) return;
    setStatus('loading');
    setResult(null);
    try {
      const data = await requestTranslation({ text, file, engine });
      setResult(data);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
        <Gloss de="Übersetzen" en="translate" />
      </p>
      <h1 className="mt-2 text-4xl font-black tracking-tight text-black">
        Textübersetzung
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 rounded-xl border border-black/10 bg-white p-6 shadow-sm"
      >
        <SourceInput
          text={text}
          onTextChange={setText}
          file={file}
          onFileChange={setFile}
        />

        <div className="mt-6">
          <EngineSelect value={engine} onChange={setEngine} />
        </div>

        <button
          type="submit"
          disabled={!hasInput || loading}
          className="mt-6 w-full rounded-md bg-black px-6 py-3 font-semibold text-german-gold transition-all enabled:hover:-translate-y-0.5 enabled:hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? 'Übersetzen…' : 'Übersetzen'}
        </button>
      </form>

      {status === 'error' && (
        <p className="mt-4 rounded-lg border border-german-red/20 bg-german-red/10 px-4 py-3 text-sm font-medium text-german-red">
          <Gloss
            de="Etwas ist schiefgelaufen. Bitte versuche es erneut."
            en="Something went wrong. Please try again."
          />
        </p>
      )}

      {result && (
        <div className="mt-6 rounded-xl border border-black/10 bg-olive-100 p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
            <Gloss de="Übersetzung" en="translation" />
          </h2>
          <p className="mt-3 whitespace-pre-wrap leading-relaxed text-black">
            {result.translation}
          </p>
        </div>
      )}
    </div>
  );
}
