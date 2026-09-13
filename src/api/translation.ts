import type { TranslationEngine, TranslationResult } from '../types/translation';

interface RequestTranslationInput {
  text: string;
  file: File | null;
  engine: TranslationEngine;
}

export async function requestTranslation({
  text,
  file,
  engine,
}: RequestTranslationInput): Promise<TranslationResult> {
  const formData = new FormData();
  formData.append('engine', engine);
  if (file) {
    formData.append('file', file);
  } else {
    formData.append('text', text);
  }

  const res = await fetch('/api/translate', {
    method: 'POST',
    // TODO - No Content-Type header — the browser sets multipart/form-data
    // with the correct boundary automatically?
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`Backend responded with ${res.status}`);
  }

  return res.json();
}
