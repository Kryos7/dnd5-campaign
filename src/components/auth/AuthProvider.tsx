import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../../supabase/client';
import type { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  role: 'dm' | 'player';
  character_name: string | null;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  isDM: boolean;
  isPlayer: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  isDM: false,
  isPlayer: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Apply role to document for CSS visibility control
  useEffect(() => {
    if (loading) return;

    if (profile?.role) {
      document.documentElement.setAttribute('data-user-role', profile.role);
    } else {
      document.documentElement.setAttribute('data-user-role', 'guest');
    }
  }, [profile, loading]);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      setProfile(null);
    } finally {
      setLoading(false);
    }
  };

  const isDM = profile?.role === 'dm';
  const isPlayer = profile?.role === 'player';

  return (
    <AuthContext.Provider value={{ user, profile, loading, isDM, isPlayer }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
