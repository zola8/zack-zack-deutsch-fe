import { useState, useEffect } from 'react';
import LanguageFromToSelector from '../components/LanguageFromToSelector';
import DictionaryStats from '../components/dictionary/DictionaryStats';
import SearchModeSelector, { type SearchMode } from '../components/dictionary/SearchModeSelector';
import DictionarySearchInput from '../components/dictionary/DictionarySearchInput';
import DictionaryResults from '../components/dictionary/DictionaryResults';
import Alert from '../components/Alert';
import { dictionaryCache } from '../components/dictionary/dictionaryCache';
import { api, ApiError } from '../data/api';
import type { DictionaryEntry, StatsResponse, SearchResponse, ContainsResponse } from '../data/types/dictionary';

type ContainsField = 'word_from' | 'word_to' | 'classification';

type ResultItem = {
  entry: DictionaryEntry;
  rank?: number | null;
};

export default function Dictionary() {
  const [stats, setStats] = useState<StatsResponse | null>(dictionaryCache.get());
  const [searchMode, setSearchMode] = useState<SearchMode>('search');
  const [query, setQuery] = useState<string>('');
  const [containsField, setContainsField] = useState<ContainsField>('word_from');
  const [fromLang, setFromLang] = useState<string>('en');
  const [toLang, setToLang] = useState<string>('de');
  const [results, setResults] = useState<ResultItem[]>([]);
  const [resultCount, setResultCount] = useState<number>(0);
  const [searchType, setSearchType] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadStats = async () => {
      const cached = dictionaryCache.get();
      if (cached) {
        setStats(cached);
        return;
      }

      try {
        const data = await api.get<StatsResponse>('/api/v1/dictionary/stats');
        dictionaryCache.set(data);
        setStats(data);
      } catch (err) {
        console.error('Failed to load dictionary stats:', err);
      }
    };

    loadStats();
  }, []);

  const handleLanguageChange = (from: string, to: string) => {
    setFromLang(from);
    setToLang(to);
  };

  const handleModeChange = (mode: SearchMode) => {
    setSearchMode(mode);
    setQuery('');
    setResults([]);
    setError('');
  };

  const handleSubmit = async () => {
    if (!query.trim()) return;

    setError('');
    setIsLoading(true);

    try {
      if (searchMode === 'search') {
        const res = await api.post<SearchResponse>('/api/v1/dictionary/search', {
          query: query.trim(),
          lang_from: fromLang,
          lang_to: toLang,
        });
        setResults(
          res.results.map((r) => ({
            entry: {
              id: r.id,
              word_from: r.word_from,
              word_to: r.word_to,
              word_type: r.word_type,
              classification: r.classification,
              lang_from: fromLang,
              lang_to: toLang,
            },
            rank: r.rank,
          }))
        );
        setResultCount(res.count);
        setSearchType(res.search_type);
      } else {
        const res = await api.post<ContainsResponse>('/api/v1/dictionary/contains', {
          text: query.trim(),
          field: containsField,
          lang_from: fromLang,
          lang_to: toLang,
        });
        setResults(
          res.results.map((entry) => ({ entry }))
        );
        setResultCount(res.count);
        setSearchType(res.search_type);
      }
    } catch (err: unknown) {
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

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setError('');
  };

  const isSubmitEnabled = query.trim().length > 0;
  const hasSearched = results.length > 0 || resultCount === 0;

  return (
    <div className="space-y-6">
      <DictionaryStats stats={stats} />
      <LanguageFromToSelector onChange={handleLanguageChange} />
      <SearchModeSelector value={searchMode} onChange={handleModeChange} />
      <DictionarySearchInput
        mode={searchMode}
        value={query}
        onChange={setQuery}
        containsField={containsField}
        onContainsFieldChange={setContainsField}
      />

      <div className="flex gap-3 justify-end">
        <button
          onClick={handleClear}
          className="btn btn-outline btn-neutral"
          disabled={!query && results.length === 0}
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className="btn btn-neutral"
          disabled={!isSubmitEnabled || isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Searching...
            </>
          ) : (
            'Search'
          )}
        </button>
      </div>

      {error && (
        <Alert
          type="error"
          label="Error:"
          message={error}
          onDismiss={() => setError('')}
        />
      )}

      {hasSearched && (
        <DictionaryResults
          items={results}
          count={resultCount}
          searchType={searchType}
        />
      )}
    </div>
  );
}
