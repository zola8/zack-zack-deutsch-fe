export function Stripe({ className = '' }: { className?: string }) {
  return (
    <span className={`flex overflow-hidden rounded-full ${className}`}>
      <span className="flex-1 bg-black" />
      <span className="flex-1 bg-german-red" />
      <span className="flex-1 bg-german-gold" />
    </span>
  );
}
