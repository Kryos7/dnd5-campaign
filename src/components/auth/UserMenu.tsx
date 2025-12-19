import { useState } from 'react';
import { useAuth } from './AuthProvider';
import { supabase } from '../../supabase/client';

export default function UserMenu() {
  const { user, profile, loading } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setShowLogin(false);
      setEmail('');
      setPassword('');
    } catch (err: any) {
      setError(err.message || 'Errore durante il login');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div className="p-2 text-sm text-slate-400">
        Caricamento...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowLogin(!showLogin)}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors flex items-center space-x-2"
          title="Login"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          <span className="hidden md:inline text-sm">Login</span>
        </button>

        {showLogin && (
          <div className="absolute right-0 mt-2 w-72 bg-slate-800 rounded-lg shadow-xl p-4 border border-slate-700 z-50">
            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loginLoading}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loginLoading}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              {error && <p className="text-red-400 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {loginLoading ? 'Accesso...' : 'Accedi'}
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <div className="hidden md:flex items-center space-x-2 text-sm">
        <span className="text-slate-400">{user.email}</span>
        {profile && (
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            profile.role === 'dm'
              ? 'bg-purple-900/50 text-purple-300 border border-purple-700'
              : 'bg-blue-900/50 text-blue-300 border border-blue-700'
          }`}>
            {profile.role === 'dm' ? 'DM' : profile.character_name || 'Player'}
          </span>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors flex items-center space-x-2"
        title="Logout"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
        </svg>
        <span className="hidden md:inline text-sm">Logout</span>
      </button>
    </div>
  );
}
