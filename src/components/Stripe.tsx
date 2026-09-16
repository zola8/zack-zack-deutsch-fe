export function Stripe({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex overflow-hidden rounded-full ${className}`}
    >
      <span className="flex-1 bg-ink" />
      <span className="flex-1 bg-german-red" />
      <span className="flex-1 bg-german-gold" />
    </span>
  );
}
