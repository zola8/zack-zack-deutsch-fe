// ============================================================================
// Dictionary Models (matching persistence models)
// ============================================================================

export interface DictionaryEntry {
  id: number;
  word_from: string;
  word_to: string;
  word_type?: string | null;
  classification?: string | null;
  lang_from: string;
  lang_to: string;
}

export interface SearchResult extends Omit<DictionaryEntry, 'lang_from' | 'lang_to'> {
  rank?: number | null;
}

export interface LanguagePairStats {
  lang_from: string;
  lang_to: string;
  count: number;
}

export interface WordTypeStats {
  word_type: string;
  count: number;
}

export interface StatsResult {
  total_entries: number;
  language_pairs: LanguagePairStats[];
  top_word_types: WordTypeStats[];
}

// ============================================================================
// Dictionary Request Schemas
// ============================================================================

export interface DictionarySearchRequest {
  query: string;
  lang_from?: string;
  lang_to?: string;
  limit?: number;
}

export interface DictionaryContainsRequest {
  text: string;
  field?: 'word_from' | 'word_to' | 'classification';
  lang_from?: string;
  lang_to?: string;
  limit?: number;
}

// ============================================================================
// Dictionary Response Schemas
// ============================================================================

export interface SearchResponse {
  query: string;
  search_type: string;
  lang_from: string;
  lang_to: string;
  count: number;
  results: SearchResult[];
}

export interface ExactMatchResponse {
  word: string;
  search_type: string;
  count: number;
  translations: DictionaryEntry[];
}

export interface ContainsResponse {
  search_text: string;
  search_field: string;
  search_type: string;
  count: number;
  results: DictionaryEntry[];
}

export interface ByTypeResponse {
  word_type: string;
  search_type: string;
  count: number;
  results: DictionaryEntry[];
}

export interface StatsResponse extends StatsResult { }

export interface RandomResponse {
  count: number;
  results: DictionaryEntry[];
}
