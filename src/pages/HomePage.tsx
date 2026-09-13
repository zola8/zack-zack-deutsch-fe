import { Gloss } from '../components/Gloss';

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-2xl pb-20 pt-16 text-center">

        <div className="mx-auto flex h-1.5 w-32 overflow-hidden rounded-full">
          <div className="flex-1 bg-black" />
          <div className="flex-1 bg-german-red" />
          <div className="flex-1 bg-german-gold" />
        </div>

        <h1 className="mt-8 text-5xl font-black tracking-tight text-black sm:text-6xl">
          Deutsch? Zack, zack!
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-gray-700">
          <Gloss
            de="Lerne Deutsch schnell und ohne Umwege."
            en="Learn German fast — no detours."
          />
        </p>

      </section>
    </div>
  );
}
