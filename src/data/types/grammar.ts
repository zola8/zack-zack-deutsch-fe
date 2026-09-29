export type GrammarCheckRequest = {
  text: string;
};

export type GrammarRule = {
  id: string;
  category: string;
  issue_type: string;
};

export type GrammarContext = {
  text: string;
  offset_in_context: number;
};

export type GrammarMatch = {
  message: string;
  replacements: string[];
  offset: number;
  error_length: number;
  context: GrammarContext;
  rule: GrammarRule;
  sentence: string;
};

export type GrammarCheckResponse = {
  text: string;
  language: string;
  matches: GrammarMatch[];
  match_count: number;
  provider: string;
};
