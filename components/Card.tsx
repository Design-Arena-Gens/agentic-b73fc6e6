type Props = {
  title: string;
  subtitle?: string;
  level?: string;
  ratio?: string;
  color?: string;
};

export default function Card({ title, subtitle, level = 'A2', ratio = 'landscape', color = '#111827' }: Props) {
  const isPoster = ratio === 'poster';
  const width = isPoster ? 240 : 320;
  const height = isPoster ? 360 : 180;
  const url = `https://dummyimage.com/${width}x${height}/${color.replace('#','')}/ffffff&text=${encodeURIComponent(title)}`;

  return (
    <div className={`group relative ${isPoster ? 'h-[216px] w-[144px] sm:h-[270px] sm:w-[180px]' : 'h-[108px] w-[192px] sm:h-[144px] sm:w-[256px]'} shrink-0 snap-start overflow-hidden rounded-md bg-neutral-900 ring-1 ring-white/10`}>
      {/* Image */}
      <img src={url} alt={title} className="h-full w-full object-cover" />
      {/* Gradient */}
      <div className="card-gradient absolute inset-0" />
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3">
        <div className="flex items-center gap-1.5 text-[10px] text-white/80">
          <span className="badge">{level}</span>
          {subtitle && <span className="badge">{subtitle}</span>}
          <span className="badge">CC</span>
        </div>
        <div className="mt-1 text-[11px] font-medium leading-tight sm:text-xs">{title}</div>
      </div>
      {/* Hover controls */}
      <div className="absolute inset-0 hidden items-center justify-center gap-2 bg-black/50 opacity-0 backdrop-blur-sm transition-all group-hover:flex group-hover:opacity-100">
        <button className="rounded bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-white/90">Play</button>
        <button className="rounded bg-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/30">Study</button>
      </div>
    </div>
  );
}
