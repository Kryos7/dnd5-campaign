import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import UserMenu from '../auth/UserMenu';

export default function NavBar() {
  const { isDM, isPlayer, profile } = useAuth();
  const [ecosistemaOpen, setEcosistemaOpen] = useState(false);
  const [ecosistemaMobileOpen, setEcosistemaMobileOpen] = useState(false);

  return (
    <nav id="main-nav" className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        {/* Prima riga: Logo e Login */}
        <div className="flex items-center justify-between h-16 border-b border-slate-700/50">
          {/* Logo e Titolo */}
          <a href="/" className="flex items-center space-x-3 text-xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors no-underline">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
            <span>È Sbagliato Cercare Gloria in un Dungeon Divino?</span>
          </a>

          {/* Login e Menu Toggle Mobile */}
          <div className="flex items-center space-x-2">
            <UserMenu />
            <button id="mobile-menu-toggle" className="md:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Seconda riga: Menu di navigazione (solo desktop) */}
        <div className="hidden md:flex items-center justify-center space-x-6 h-12">
          <a href="/lore/annuncio" className="hover:text-yellow-500 transition-colors">Lore</a>
          <a href="/citta/overview" className="hover:text-yellow-500 transition-colors">Città</a>
          {/* <a href="/meccaniche/favore-divino" className="hover:text-yellow-500 transition-colors">Meccaniche</a> */}
          <a href="/gilde/overview" className="hover:text-yellow-500 transition-colors">Gilde</a>
          <a href="/dei/pantheon" className="hover:text-yellow-500 transition-colors">Dèi</a>
          {/* <a href="/reference/quick-tables" className="hover:text-yellow-500 transition-colors">Reference</a> */}
          <span className="text-slate-600">|</span>
          <a href="/sessioni" className="hover:text-purple-400 transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
            Sessioni
          </a>
          <a href="/dungeon/overview" className="hover:text-orange-400 transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            Dungeon
          </a>
        </div>

        {/* Menu Mobile */}
        <div id="mobile-menu" className="hidden md:hidden pb-4 space-y-2">
          <a href="/lore/annuncio" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Lore</a>
          <a href="/citta/overview" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Città</a>
          {/* <a href="/meccaniche/favore-divino" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Meccaniche</a> */}
          <a href="/gilde/overview" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Gilde</a>
          <a href="/dei/pantheon" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Dèi</a>
          {/* <a href="/reference/quick-tables" className="block px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors">Reference</a> */}

          {/* Separatore Sessioni */}
          <div className="pt-2 mt-2 border-t border-purple-900/50">
            <a href="/sessioni" className="block px-3 py-2 rounded-lg hover:bg-purple-900/20 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Registro Sessioni
            </a>
            <a href="/dungeon/overview" className="block px-3 py-2 rounded-lg hover:bg-purple-900/20 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            Dungeon
          </a>
          </div>

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
              <a href="/dm/prove-divine" className="block px-3 py-2 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors">
                Prove Divine
              </a>
              <button
                type="button"
                onClick={() => setEcosistemaMobileOpen(!ecosistemaMobileOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors"
              >
                <span>Ecosistema 1</span>
                <svg className={`w-4 h-4 transition-transform ${ecosistemaMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {ecosistemaMobileOpen && (
                <div className="pl-4 space-y-1">
                  <a href="/dm/ecosistema-1" className="block px-3 py-2 rounded-lg hover:bg-red-900/20 text-red-300 hover:text-red-200 transition-colors">
                    Piano 1
                  </a>
                  <a href="/dm/ecosistema-1-piano-2" className="block px-3 py-2 rounded-lg hover:bg-red-900/20 text-red-300 hover:text-red-200 transition-colors">
                    Piano 2
                  </a>
                  <a href="/dm/ecosistema-1-piano-3" className="block px-3 py-2 rounded-lg hover:bg-red-900/20 text-red-300 hover:text-red-200 transition-colors">
                    Piano 3 — Kethrar
                  </a>
                </div>
              )}
              <a href="/dm/sessioni" className="block px-3 py-2 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors">
                Sessioni
              </a>
              <a href="/dm/diario-fealer" className="block px-3 py-2 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors">
                Diario Fealer
              </a>
            </div>
          )}

          {/* Link Fealer (mobile) */}
          {isPlayer && profile?.character_name === 'Fealer' && (
            <div className="pt-2 mt-2 border-t border-amber-900/50">
              <a href="/dm/diario-fealer" className="block px-3 py-2 rounded-lg hover:bg-amber-900/20 text-amber-400 hover:text-amber-300 transition-colors">
                Il mio Diario
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
                <a href="/dm/prove-divine" className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                  Prove Divine
                </a>
                <div
                  className="relative"
                  onMouseEnter={() => setEcosistemaOpen(true)}
                  onMouseLeave={() => setEcosistemaOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setEcosistemaOpen(!ecosistemaOpen)}
                    className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                    </svg>
                    Ecosistema 1
                    <svg className={`w-3 h-3 transition-transform ${ecosistemaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>
                  {ecosistemaOpen && (
                    <div className="absolute top-full left-0 pt-2 flex flex-col gap-1 min-w-[160px] z-50">
                      <a href="/dm/ecosistema-1" className="px-3 py-2 bg-slate-800 border border-red-900/50 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors whitespace-nowrap">
                        Piano 1
                      </a>
                      <a href="/dm/ecosistema-1-piano-2" className="px-3 py-2 bg-slate-800 border border-red-900/50 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors whitespace-nowrap">
                        Piano 2
                      </a>
                      <a href="/dm/ecosistema-1-piano-3" className="px-3 py-2 bg-slate-800 border border-red-900/50 rounded-lg hover:bg-red-900/20 text-red-400 hover:text-red-300 transition-colors whitespace-nowrap">
                        Piano 3 — Kethrar
                      </a>
                    </div>
                  )}
                </div>
                <a href="/dm/sessioni" className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  Sessioni
                </a>
                <a href="/dm/diario-fealer" className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  Diario Fealer
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Link Fealer (solo desktop) */}
      {isPlayer && profile?.character_name === 'Fealer' && (
        <div className="hidden md:block border-t border-amber-900/30 bg-amber-950/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-end py-2">
              <a href="/dm/diario-fealer" className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                Il mio Diario
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
