import { Gloss } from '../components/Gloss';

const roadmap = [
  {
    de: 'Textübersetzung',
    status: 'Im Gange',
    active: true,
  },
  {
    de: 'Vokabeltrainer',
    status: 'Bald',
    active: false,
  },
  {
    de: 'Grammatikübungen',
    status: 'Bald',
    active: false,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-sm font-medium text-black/50">Über</p>

      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black">
        Zack-Zack-Deutsch
      </h1>

      <p className="mt-4 text-base leading-relaxed text-black/60">
        <Gloss
          de="„Zack, zack!“ heißt: schnell, direkt und ohne Umwege. Genau so hilft dir die App, Deutsch zu lernen."
          en="“Zack, zack!” means fast, direct, and without detours. That’s how this app helps you learn German."
        />
      </p>

      <section className="mt-10">
        <h2 className="text-lg font-semibold text-black">Der Plan</h2>

        <ul className="mt-4 space-y-2">
          {roadmap.map((item) => (
            <li
              key={item.de}
              className="flex items-center justify-between gap-3 rounded-lg border border-black/10 bg-white px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${item.active ? 'bg-black' : 'bg-black/20'
                    }`}
                />
                <span className="text-sm font-medium text-black">
                  {item.de}
                </span>
              </div>

              <span className="text-xs text-black/50">{item.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 border-t border-black/10 pt-6 text-sm text-black/50">
        <Gloss
          de="Fragen oder Feedback? Wir freuen uns darauf."
          en="Questions or feedback? We’d love to hear it."
        />
      </p>
    </div>
  );
}
