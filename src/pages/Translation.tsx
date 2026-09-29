import { useState } from 'react';
import LanguageFromToSelector from '../components/LanguageFromToSelector';
import ActionButtons from '../components/translator/ActionButtons';
import EngineSelector from '../components/translator/EngineSelector';
import ErrorBanner from '../components/translator/ErrorBanner';
import SourceTextArea from '../components/translator/SourceTextArea';
import TranslatedTextArea from '../components/translator/TranslatedTextArea';
import TranslatorOptions from '../components/translator/TranslatorOptions';
import UsageLimits from '../components/translator/UsageLimits';
import { api, ApiError } from '../data/api';


export default function Translation() {
  const [fromLang, setFromLang] = useState<string>('en');
  const [toLang, setToLang] = useState<string>('de');
  const [engine, setEngine] = useState<string>('azure');
  const [formality, setFormality] = useState<string>('default');
  const [sourceText, setSourceText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLanguageChange = (from: string, to: string) => {
    setFromLang(from);
    setToLang(to);
  };

  const handleClear = () => {
    setSourceText('');
    setTranslatedText('');
    setError('');
  };

  const handleSubmit = async () => {
    setError('');
    setIsLoading(true);

    const payload: Record<string, unknown> = {
      text: sourceText,
      source_lang: fromLang.toUpperCase(),
      target_lang: toLang.toUpperCase(),
      provider: engine,
    };

    if (engine === 'deepl' && formality !== 'default') {
      payload.options = { formality };
    }

    try {
      const result = await api.post<{ translated_text: string }>('/api/v1/translate', payload);
      setTranslatedText(result.translated_text);
    } catch (err: unknown) {
      console.log(err)
      let errorMessage = 'An unexpected error occurred. Please try again.';

      if (err instanceof ApiError) {
        errorMessage = err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const isSubmitEnabled =
    sourceText.trim().length > 0 &&
    fromLang.length > 0 &&
    toLang.length > 0 &&
    fromLang !== toLang;

  const hasContent = sourceText.length > 0 || translatedText.length > 0;

  return (
    <div className="space-y-6">
      <LanguageFromToSelector onChange={handleLanguageChange} />
      <EngineSelector value={engine} onChange={setEngine} />
      <UsageLimits engine={engine} />
      <TranslatorOptions
        engine={engine}
        formality={formality}
        onFormalityChange={setFormality}
      />

      {error && <ErrorBanner message={error} onDismiss={() => setError('')} />}

      <SourceTextArea value={sourceText} onChange={setSourceText} />
      <TranslatedTextArea value={translatedText} />

      <ActionButtons
        onClear={handleClear}
        onSubmit={handleSubmit}
        isSubmitEnabled={isSubmitEnabled && !isLoading}
        hasContent={hasContent}
        isLoading={isLoading}
      />
    </div>
  );
}
