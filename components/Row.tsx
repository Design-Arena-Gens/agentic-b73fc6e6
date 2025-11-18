"use client";
import { useRef } from 'react';
import Card from './Card';

type Item = {
  title: string;
  subtitle?: string;
  level?: string;
  ratio?: string;
  color?: string;
};

type Props = {
  title: string;
  items: Item[];
};

export default function Row({ title, items }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    ref.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="relative">
      <div className="container-px mx-auto flex items-center justify-between pb-2 pt-4">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        <div className="hidden gap-2 md:flex">
          <button onClick={() => scrollBy(-400)} className="rounded bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20">?</button>
          <button onClick={() => scrollBy(400)} className="rounded bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20">?</button>
        </div>
      </div>
      <div className="row-mask container-px mx-auto">
        <div ref={ref} className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4">
          {items.map((it, idx) => (
            <Card key={idx} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
