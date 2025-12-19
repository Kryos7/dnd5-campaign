import { useAuth } from './AuthProvider';

interface DMOnlyProps {
  children: React.ReactNode;
}

export function DMOnly({ children }: DMOnlyProps) {
  const { isDM, loading } = useAuth();

  if (loading) return null;
  if (!isDM) return null;

  return <>{children}</>;
}

interface PlayerSpecificProps {
  playerId: string;
  children: React.ReactNode;
}

export function PlayerSpecific({ playerId, children }: PlayerSpecificProps) {
  const { user, isDM, loading } = useAuth();

  if (loading) return null;

  // DM vede sempre tutto
  if (isDM) return <>{children}</>;

  // Il player vede solo se l'id corrisponde
  if (user?.id === playerId) return <>{children}</>;

  return null;
}
