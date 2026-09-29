export type Language = {
  code: string;
  name: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'de', name: 'German' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'es', name: 'Spanish' },
];

export const getLanguageByCode = (code: string): Language | undefined => {
  return languages.find((lang) => lang.code === code);
};
