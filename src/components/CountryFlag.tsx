// Mapping from language code to ISO 3166-1 alpha-2 country code

const languageToCountry: Record<string, string> = {
  en: 'gb', // English → United Kingdom
  de: 'de', // German → Germany
  hu: 'hu', // Hungarian → Hungary
  vi: 'vn', // Vietnamese → Vietnam
  es: 'es', // Spanish → Spain
  cs: 'cz',
};

type CountryFlagProps = {
  langCode: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClasses = {
  sm: 'w-5 h-4',
  md: 'w-7 h-5',
  lg: 'w-9 h-6',
};


export default function CountryFlag({
  langCode,
  size = 'md',
  className = ''
}: CountryFlagProps) {
  const countryCode = languageToCountry[langCode];

  if (!countryCode) {
    return (
      <span className={`inline-flex items-center justify-center ${sizeClasses[size]} bg-gray-200 text-gray-600 text-xs font-bold rounded ${className}`}>
        {langCode.toUpperCase()}
      </span>
    );
  }

  return (
    <span
      className={`fi fi-${countryCode} ${sizeClasses[size]} rounded-sm inline-block ${className}`}
      aria-label={langCode}
    />
  );
}
