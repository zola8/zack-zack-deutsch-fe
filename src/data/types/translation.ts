export interface TranslationRequest {
  text: string;
  source_lang: string;
  target_lang: string;
  provider: string;
  options?: Record<string, string>;
}

export interface TranslationResponse {
  translated_text: string;
  source_lang: string;
  target_lang: string;
  char_count: number,
  provider: string;
  metadata: Record<string, string>;
}
