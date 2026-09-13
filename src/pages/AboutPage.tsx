import { Gloss } from '../components/Gloss';

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl">

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
        <Gloss de="Über" en="about" />
      </p>
      <h1 className="mt-2 text-4xl font-black tracking-tight text-black">
        Zack-Zack-Deutsch
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-gray-700">
        <Gloss
          de="Ein Deutsch-Trainer für Lernende, die schnell vorankommen wollen."
          en="A German tutor for learners who want to move fast."
        />
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-black">
          <Gloss de="Warum „Zack, zack?" en="Why “zack, zack”?" />
        </h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          <Gloss
            de="„Zack, zack!“ ruft man in Deutschland, wenn es zügig weitergehen soll — kein Zögern, keine Umwege. Genau so wollen wir Deutsch lernen lassen."
            en="“Zack, zack!” is what you shout in Germany when things need to keep moving — no hesitation, no detours. That's how German should be learned."
          />
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-black">
          <Gloss de="Erste Funktion: Textübersetzung" en="First feature: text translation" />
        </h2>
        <p className="mt-3 leading-relaxed text-gray-700">
          <Gloss
            de="Füge einen deutschen Text ein und erhalte sofort die Übersetzung."
            en="Paste a German text and get an instant translation."
          />
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-black">
          <Gloss de="Der Plan" en="The roadmap" />
        </h2>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-german-gold ring-4 ring-german-gold/20" />
            <span className="font-semibold text-black">
              <Gloss de="Textübersetzung" en="text translation" />
            </span>
            <span className="ml-auto text-sm text-gray-500">
              <Gloss de="im Gange" en="in progress" />
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-gray-300" />
            <span className="font-semibold text-gray-600">
              <Gloss de="Vokabeltrainer" en="vocab trainer" />
            </span>
            <span className="ml-auto text-sm text-gray-400">
              <Gloss de="bald" en="soon" />
            </span>
          </li>
          <li className="flex items-center gap-3">
            <span className="h-2 w-2 shrink-0 rounded-full bg-gray-300" />
            <span className="font-semibold text-gray-600">
              <Gloss de="Grammatikübungen" en="grammar exercises" />
            </span>
            <span className="ml-auto text-sm text-gray-400">
              <Gloss de="bald" en="soon" />
            </span>
          </li>
        </ul>
      </section>

      <p className="mt-12 border-t border-gray-200 pt-6 text-gray-600">
        <Gloss
          de="Fragen oder Feedback? Wir freuen uns darauf."
          en="Questions or feedback? We'd love to hear it."
        />
      </p>
    </div>
  );
}
