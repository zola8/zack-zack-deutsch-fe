export function Gloss({ de = '', en = '' }: { de?: string; en?: string }) {
  if (!de && !en) return null;
  if (!de) return <span className="opacity-60">{en}</span>;
  if (!en) return <>{de}</>;

  return (
    <>
      {de} — <span className="opacity-50 italic">{en}</span>
    </>
  );
}
