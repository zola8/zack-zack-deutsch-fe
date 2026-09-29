type UsageLimitsProps = {
  engine: string;
};


export default function UsageLimits({ engine }: UsageLimitsProps) {
  const limits = {
    deepl: {
      text: '1 million characters (one-time credit)',
    },
    azure: {
      text: '2 million characters per month',
    },
  };

  const currentLimit = limits[engine as keyof typeof limits];

  if (!currentLimit) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
      <div className="flex items-start gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-4 w-4 text-blue-600 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="flex-1 text-xs text-blue-800">
          <span className="font-medium">Free tier limit:</span>{' '}
          {currentLimit.text}
        </div>
      </div>
    </div>
  );
}