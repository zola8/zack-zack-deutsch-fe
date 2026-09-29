import Alert from '../Alert';

type UsageLimitsProps = {
  engine: string;
};

export default function UsageLimits({ engine }: UsageLimitsProps) {
  const limits: Record<string, string> = {
    deepl: '1 million characters (one-time credit)',
    azure: '2 million characters per month',
  };

  const text = limits[engine];
  if (!text) return null;

  return <Alert type="info" label="Free tier limit:" message={text} />;
}
