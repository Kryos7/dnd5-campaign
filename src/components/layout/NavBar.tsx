import UserMenu from '../auth/UserMenu';

export default function NavBar() {
  return (
    <nav id="main-nav" className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo e Titolo */}
          <a href="/" className="flex items-center space-x-3 text-xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors no-underline">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
            <span>È Sbagliato Cercare Gloria in un Dungeon Divino?</span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/lore/annuncio" className="hover:text-yellow-500 transition-colors">Lore</a>
            <a href="/citta/overview" className="hover:text-yellow-500 transition-colors">Città</a>
            <a href="/meccaniche/favore-divino" className="hover:text-yellow-500 transition-colors">Meccaniche</a>
            <a href="/dungeon/overview" className="hover:text-yellow-500 transition-colors">Dungeon</a>
            <a href="/gilde/overview" className="hover:text-yellow-500 transition-colors">Gilde</a>
            <a href="/dei/pantheon" className="hover:text-yellow-500 transition-colors">Dèi</a>
            <a href="/reference/quick-tables" className="hover:text-yellow-500 transition-colors">Reference</a>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center space-x-2">
            <UserMenu />
            <button id="mobile-menu-toggle" className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div id="mobile-menu" className="hidden md:hidden pb-4 space-y-2">
          <a href="/lore/annuncio" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Lore</a>
          <a href="/citta/overview" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Città</a>
          <a href="/meccaniche/favore-divino" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Meccaniche</a>
          <a href="/dungeon/overview" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Dungeon</a>
          <a href="/gilde/overview" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Gilde</a>
          <a href="/dei/pantheon" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Dèi</a>
          <a href="/reference/quick-tables" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Reference</a>
        </div>
      </div>
    </nav>
  );
}
