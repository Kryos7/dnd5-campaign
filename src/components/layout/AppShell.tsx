import { AuthProvider } from '../auth/AuthProvider';
import NavBar from './NavBar';

interface AppShellProps {
  children?: React.ReactNode;
  pageContent?: React.ReactNode;
}

export default function AppShell({ children, pageContent }: AppShellProps) {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 container mx-auto px-4 py-8">
          {pageContent || children}
        </main>
        <footer className="bg-slate-900 border-t border-slate-700 mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-400">
            <p>È Sbagliato Cercare Gloria in un Dungeon Divino? - Campagna D&D 5e</p>
            <p className="mt-2">Una campagna nei Forgotten Realms dove gli dèi scendono sul Piano Materiale</p>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}
