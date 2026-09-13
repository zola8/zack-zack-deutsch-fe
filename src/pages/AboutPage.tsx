import { Gloss } from '../components/Gloss';

const roadmap = [
  { de: 'Textübersetzung', en: 'text translation', statusDe: 'im Gange', statusEn: 'in progress', active: true },
  { de: 'Vokabeltrainer', en: 'vocab trainer', statusDe: 'bald', statusEn: 'soon', active: false },
  { de: 'Grammatikübungen', en: 'grammar exercises', statusDe: 'bald', statusEn: 'soon', active: false },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-black/50">
        <Gloss de="Über" en="about" />
      </p>
      <h1 className="mt-2 text-4xl font-black tracking-tight text-black">
        Zack-Zack-Deutsch
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-black/70">
        <Gloss
          de="Ein Deutsch-Trainer für Lernende, die schnell vorankommen wollen."
          en="A German tutor for learners who want to move fast."
        />
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-black">
          <Gloss de="Warum „Zack, zack!“?" en="Why “zack, zack”?" />
        </h2>
        <p className="mt-3 leading-relaxed text-black/70">
          <Gloss
            de="„Zack, zack!“ ruft man in Deutschland, wenn es zügig weitergehen soll — kein Zögern, keine Umwege. Genau so wollen wir Deutsch lernen lassen."
            en="“Zack, zack!” is what you shout in Germany when things need to keep moving — no hesitation, no detours. That's how German should be learned."
          />
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-black">
          <Gloss de="Erste Funktion: Textübersetzung" en="First feature: text translation" />
        </h2>
        <p className="mt-3 leading-relaxed text-black/70">
          <Gloss
            de="Füge einen deutschen Text ein und erhalte sofort die Übersetzung."
            en="Paste a German text and get an instant translation."
          />
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-black">
          <Gloss de="Der Plan" en="The roadmap" />
        </h2>
        <ul className="mt-4 space-y-2">
          {roadmap.map((item) => (
            <li
              key={item.de}
              className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/60 px-4 py-3"
            >
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${item.active ? 'bg-german-gold ring-4 ring-german-gold/20' : 'bg-black/15'
                  }`}
              />
              <span className={`font-semibold ${item.active ? 'text-black' : 'text-black/60'}`}>
                <Gloss de={item.de} en={item.en} />
              </span>
              <span
                className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.active ? 'bg-german-gold/20 text-black/60' : 'bg-black/5 text-black/40'
                  }`}
              >
                <Gloss de={item.statusDe} en={item.statusEn} />
              </span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-12 border-t border-black/10 pt-6 text-black/60">
        <Gloss
          de="Fragen oder Feedback? Wir freuen uns darauf."
          en="Questions or feedback? We'd love to hear it."
        />
      </p>
    </div>
  );
}
