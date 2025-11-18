import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Row from '@/components/Row';

const rows = [
  {
    title: 'Continue Learning ? ?? ??',
    items: [
      { title: '??? ???', subtitle: 'Vocabulary', level: 'A2', ratio: 'landscape', color: '#1f2937' },
      { title: '??? ???', subtitle: 'Grammar', level: 'A2', ratio: 'landscape', color: '#0f172a' },
      { title: '? ???', subtitle: 'Listening', level: 'B1', ratio: 'landscape', color: '#111827' },
      { title: '???? ????', subtitle: 'Phrases', level: 'A2', ratio: 'landscape', color: '#172554' },
      { title: '???', subtitle: 'Vocabulary', level: 'B1', ratio: 'landscape', color: '#052e16' },
    ],
  },
  {
    title: 'K-Drama for Beginners ? ????',
    items: [
      { title: '??? ???', subtitle: 'Vocabulary', level: 'A1', ratio: 'poster', color: '#0b1220' },
      { title: '?? ??', subtitle: 'Grammar', level: 'A1', ratio: 'poster', color: '#1f2937' },
      { title: '?? ??', subtitle: 'Phrases', level: 'A2', ratio: 'poster', color: '#111827' },
      { title: '???? ???', subtitle: 'Listening', level: 'A2', ratio: 'poster', color: '#0f172a' },
      { title: '????', subtitle: 'Vocabulary', level: 'A2', ratio: 'poster', color: '#052e16' },
      { title: '?? ?? ????', subtitle: 'Grammar', level: 'A2', ratio: 'poster', color: '#1f2937' },
    ],
  },
  {
    title: 'Top in Korea ? ?? TOP',
    items: [
      { title: '??? ??', subtitle: 'Phrases', level: 'B1', ratio: 'landscape', color: '#111827' },
      { title: '??? ??? ???', subtitle: 'Listening', level: 'A2', ratio: 'landscape', color: '#0f172a' },
      { title: '????', subtitle: 'Vocabulary', level: 'A2', ratio: 'landscape', color: '#1f2937' },
      { title: 'DP', subtitle: 'Grammar', level: 'B1', ratio: 'landscape', color: '#0b1220' },
      { title: '?? ????', subtitle: 'Phrases', level: 'A2', ratio: 'landscape', color: '#052e16' },
    ],
  },
  {
    title: 'Variety Shows ? ??',
    items: [
      { title: '???', subtitle: 'Listening', level: 'A2', ratio: 'poster', color: '#0f172a' },
      { title: '???? ??', subtitle: 'Vocabulary', level: 'A2', ratio: 'poster', color: '#111827' },
      { title: '? ?? ? ? ??', subtitle: 'Phrases', level: 'B1', ratio: 'poster', color: '#1f2937' },
      { title: '? ?? ??', subtitle: 'Grammar', level: 'A2', ratio: 'poster', color: '#0b1220' },
      { title: '?????', subtitle: 'Listening', level: 'A2', ratio: 'poster', color: '#052e16' },
    ],
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      <Hero />
      <div className="container-px mx-auto max-w-7xl">
        {rows.map((row, idx) => (
          <Row key={idx} title={row.title} items={row.items} />
        ))}
      </div>
      <footer className="container-px mx-auto mt-8 mb-10 max-w-7xl text-xs text-white/50">
        ? {new Date().getFullYear()} K-Study. Learn Korean with K-content.
      </footer>
    </main>
  );
}
