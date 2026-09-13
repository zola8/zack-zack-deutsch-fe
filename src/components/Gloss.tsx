export function Gloss({ de = '', en = '' }: { de?: string; en?: string }) {

  if (!de && !en) return null;
  if (!de) return <span className="text-gray-500">{en}</span>;
  if (!en) return <>{de}</>;

  return (
    <>
      {de} — <span className="text-gray-500">{en}</span>
    </>
  );
}
