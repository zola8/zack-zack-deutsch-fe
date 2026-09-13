export const TRANSLATION_ENGINES = ['deepl', 'openai', 'google'] as const;

export type TranslationEngine = (typeof TRANSLATION_ENGINES)[number];

export interface EngineOption {
  id: TranslationEngine;
  label: string;
}

export const ENGINE_OPTIONS: EngineOption[] = [
  { id: 'deepl', label: 'DeepL' },
  { id: 'openai', label: 'OpenAI (KI)' },
  { id: 'google', label: 'Google Translate' },
];

export type SourceMode = 'text' | 'file';

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export interface TranslationResult {
  translation: string;
}
