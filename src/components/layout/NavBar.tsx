import { useAuth } from '../auth/AuthProvider';
import UserMenu from '../auth/UserMenu';

export default function NavBar() {
  const { isDM, loading, profile, user } = useAuth();

  // Debug logs
  console.log('NavBar - Auth loading:', loading);
  console.log('NavBar - Is DM:', isDM);
  console.log('NavBar - Profile:', profile);
  console.log('NavBar - User:', user);

  return (
    <nav id="main-nav" className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        {/* DEBUG INFO - RIMUOVI DOPO IL FIX */}
        {user && (
          <div className="bg-purple-900 text-white text-xs p-2 mb-2">
            DEBUG: loading={String(loading)} | isDM={String(isDM)} | role={profile?.role || 'null'} | email={user.email}
          </div>
        )}

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

          {/* DM Menu Mobile */}
          {isDM && (
            <div className="pt-2 mt-2 border-t border-red-900/50">
              <div className="px-3 py-1 text-xs font-semibold text-red-400 uppercase tracking-wide flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                Sezione DM
              </div>
              <a href="/dm" className="block px-3 py-2 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors">
                Dashboard DM
              </a>
              <a href="/dm/ecosistema-1" className="block px-3 py-2 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors">
                Ecosistema 1
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Menu Secondario DM (solo desktop) */}
      {isDM && (
        <div className="hidden md:block border-t border-red-900/30 bg-red-950/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wide">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                Sezione DM
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a href="/dm" className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                  Dashboard
                </a>
                <a href="/dm/ecosistema-1" className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                  Ecosistema 1
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
