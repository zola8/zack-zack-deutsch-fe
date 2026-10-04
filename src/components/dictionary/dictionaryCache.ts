import type { StatsResponse } from "../../data/types/dictionary";

const CACHE_KEY = 'dictionary_stats';
const CACHE_DURATION_MS = 10 * 24 * 60 * 60 * 1000; // 10 days


type CachedStats = {
  data: StatsResponse;
  timestamp: number;
};


export const dictionaryCache = {
  get(): StatsResponse | null {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;

      const cached: CachedStats = JSON.parse(raw);
      const isExpired = Date.now() - cached.timestamp > CACHE_DURATION_MS;

      if (isExpired) {
        localStorage.removeItem(CACHE_KEY);
        return null;
      }

      return cached.data;
    } catch {
      return null;
    }
  },

  set(data: StatsResponse): void {
    try {
      const cached: CachedStats = {
        data,
        timestamp: Date.now(),
      };
      localStorage.setItem(CACHE_KEY, JSON.stringify(cached));
    } catch {
      // Ignore storage errors
    }
  },

  clear(): void {
    localStorage.removeItem(CACHE_KEY);
  },
};
