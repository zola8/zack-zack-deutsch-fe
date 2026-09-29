import { useState } from 'react';
import LanguageFromToSelector from '../components/LanguageFromToSelector';
import EngineSelector from '../components/translator/EngineSelector';
import ActionButtons from '../components/translator/ActionButtons';
import SourceTextArea from '../components/translator/SourceTextArea';
import TranslatedTextArea from '../components/translator/TranslatedTextArea';
import TranslatorOptions from '../components/translator/TranslatorOptions';

export default function Translation() {
  const [fromLang, setFromLang] = useState<string>('en');
  const [toLang, setToLang] = useState<string>('de');
  const [engine, setEngine] = useState<string>('azure');
  const [formality, setFormality] = useState<string>('less');
  const [sourceText, setSourceText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');

  const handleLanguageChange = (from: string, to: string) => {
    setFromLang(from);
    setToLang(to);
  };

  const handleClear = () => {
    setSourceText('');
    setTranslatedText('');
  };

  const handleSubmit = () => {
    const payload: Record<string, unknown> = {
      text: sourceText,
      source_lang: fromLang,
      target_lang: toLang,
      provider: engine,
    };

    if (engine === 'deepl') {
      payload.options = {
        formality: formality,
      };
    }

    console.log('Translation request payload:', payload);
    console.log('JSON:', JSON.stringify(payload, null, 2));
    // TODO call backend
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
      <TranslatorOptions
        engine={engine}
        formality={formality}
        onFormalityChange={setFormality}
      />
      <SourceTextArea value={sourceText} onChange={setSourceText} />
      <TranslatedTextArea value={translatedText} />
      <ActionButtons
        onClear={handleClear}
        onSubmit={handleSubmit}
        isSubmitEnabled={isSubmitEnabled}
        hasContent={hasContent}
      />
    </div>
  );
}
