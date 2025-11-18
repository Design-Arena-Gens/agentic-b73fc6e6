export default function Hero() {
  return (
    <section className="relative h-[62svh] min-h-[420px] w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://dummyimage.com/2400x1400/0b0b0b/ffffff&text=K-Content+Learning)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end pb-10">
        <div className="max-w-xl">
          <span className="badge mb-3">??? ?? | Today?s Pick</span>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            ??? ??
            <span className="ml-3 text-xl text-white/70 align-baseline">Squid Game</span>
          </h1>
          <p className="mt-3 text-white/80">
            Learn Korean with authentic dialogue. Interactive subtitles, vocabulary cards, and grammar tips while you watch.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <button className="rounded bg-white px-5 py-2.5 font-semibold text-black hover:bg-white/90">Play ?</button>
            <button className="rounded bg-white/20 px-5 py-2.5 font-medium text-white hover:bg-white/30">Study Mode ?</button>
            <div className="hidden sm:flex items-center gap-2 text-xs text-white/70">
              <span className="badge">A2</span>
              <span className="badge">Subtitles: KR ? EN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
