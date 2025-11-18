export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-black/70 to-transparent">
      <nav className="container-px mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <span className="inline-block h-6 w-6 rounded bg-brand-500"></span>
            <span className="text-lg font-semibold tracking-tight">K-Study</span>
          </div>
          <ul className="hidden md:flex items-center gap-4 text-sm text-white/80">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">K-Drama</li>
            <li className="hover:text-white">Variety</li>
            <li className="hover:text-white">K-Pop</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 text-white/80">
          <button className="hidden sm:inline-flex rounded bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">Search</button>
          <button className="rounded bg-brand-500 px-3 py-1.5 text-sm font-medium hover:bg-brand-600">Continue</button>
          <div className="h-7 w-7 rounded-full bg-white/20" />
        </div>
      </nav>
    </header>
  );
}
