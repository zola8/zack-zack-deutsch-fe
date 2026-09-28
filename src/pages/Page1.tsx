import LanguageFromToSelector from '../components/LanguageFromToSelector';


export default function Page1() {
  const handleLanguageChange = (from: string, to: string) => {
    console.log(`Translating from ${from} to ${to}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <LanguageFromToSelector onChange={handleLanguageChange} />

    </div>
  );
}
