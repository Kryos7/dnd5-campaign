# Pattern di Autenticazione e Visibilità

Guida di riferimento rapido per controllare la visibilità di contenuti in base al ruolo utente (DM / Player / Guest).

---

## 📋 Indice

1. [Pattern per pagine .astro](#pattern-per-pagine-astro)
2. [Pattern per componenti React (.tsx)](#pattern-per-componenti-react-tsx)
3. [Pattern CSS per visibilità condizionale](#pattern-css-per-visibilità-condizionale)
4. [Componenti helper disponibili](#componenti-helper-disponibili)
5. [Esempi pratici](#esempi-pratici)

---

## Pattern per pagine .astro

### 1. Proteggere un'intera pagina (solo DM)

Usa il componente `DMAuthGuard` per wrappare l'intera pagina:

```astro
---
import DMAuthGuard from "../../components/dm/DMAuthGuard";
import MainLayout from "../../layouts/MainLayout.astro";
---

<MainLayout title="Pagina DM" description="Solo per il DM">
  <DMAuthGuard client:load>
    <!-- Tutto il contenuto qui è visibile solo al DM -->
    <div class="max-w-5xl mx-auto">
      <h1>Contenuto Segreto DM</h1>
      <!-- ... -->
    </div>
  </DMAuthGuard>
</MainLayout>
```

**Come funziona:**
- Se l'utente NON è autenticato o NON è il DM → mostra form di login
- Se l'utente è il DM (email: lorenzo.tranchina@gmail.com) → mostra il contenuto
- Include automaticamente pulsante logout in alto a destra

**File:** [src/components/dm/DMAuthGuard.tsx](../src/components/dm/DMAuthGuard.tsx)

---

### 2. Sezioni visibili solo al DM (all'interno di una pagina)

Per nascondere specifiche sezioni senza proteggere l'intera pagina:

#### Opzione A: Usando classi CSS

```astro
<!-- Questa sezione è visibile solo al DM -->
<div class="dm-only">
  <h2>Segreti della Sessione</h2>
  <p>Informazioni che i giocatori non devono vedere...</p>
</div>
```

#### Opzione B: Usando componente React

```astro
---
import { DMOnly } from "../components/auth/VisibilityControls";
---

<DMOnly client:load>
  <div>
    <h2>Segreti della Sessione</h2>
    <p>Informazioni che i giocatori non devono vedere...</p>
  </div>
</DMOnly>
```

**File:** [src/components/auth/VisibilityControls.tsx](../src/components/auth/VisibilityControls.tsx)

---

### 3. Sezioni visibili solo a un giocatore specifico

#### Opzione A: Usando classi CSS + data attribute

```astro
<!-- Sostituisci USER_ID con l'ID Supabase del giocatore -->
<div class="player-specific" data-player-id="USER_ID_EFFETTIVO">
  <h3>Nota personale per Valoris</h3>
  <p>Solo tu puoi vedere questo messaggio...</p>
</div>
```

**IMPORTANTE:** Il DM vede SEMPRE tutti i contenuti player-specific.

#### Opzione B: Usando componente React

```astro
---
import { PlayerSpecific } from "../components/auth/VisibilityControls";
---

<PlayerSpecific playerId="USER_ID_EFFETTIVO" client:load>
  <div>
    <h3>Nota personale per Valoris</h3>
    <p>Solo tu puoi vedere questo messaggio...</p>
  </div>
</PlayerSpecific>
```

**File:** [src/components/auth/VisibilityControls.tsx](../src/components/auth/VisibilityControls.tsx)

---

## Pattern per componenti React (.tsx)

### 1. Usare l'hook `useAuth` per controlli condizionali

```tsx
import { useAuth } from '../components/auth/AuthProvider';

function MyComponent() {
  const { user, profile, loading, isDM, isPlayer } = useAuth();

  if (loading) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      {/* Mostra solo se DM */}
      {isDM && (
        <div className="dm-section">
          <h2>Sezione DM</h2>
        </div>
      )}

      {/* Mostra solo se giocatore */}
      {isPlayer && (
        <div className="player-section">
          <p>Benvenuto, {profile?.character_name}!</p>
        </div>
      )}

      {/* Mostra solo a uno specifico giocatore */}
      {user?.id === 'USER_ID_SPECIFICO' && (
        <div>Contenuto per un solo giocatore</div>
      )}

      {/* Mostra solo se autenticato (DM o Player) */}
      {user && (
        <div>Contenuto per utenti autenticati</div>
      )}

      {/* Mostra a tutti (guest inclusi) */}
      <div>Contenuto pubblico</div>
    </div>
  );
}
```

**File:** [src/components/auth/AuthProvider.tsx](../src/components/auth/AuthProvider.tsx)

---

### 2. Usare i componenti wrapper

```tsx
import { DMOnly, PlayerSpecific } from '../components/auth/VisibilityControls';

function MyComponent() {
  return (
    <div>
      {/* Solo DM */}
      <DMOnly>
        <div>Contenuto DM</div>
      </DMOnly>

      {/* Solo un giocatore specifico (+ DM) */}
      <PlayerSpecific playerId="abc123">
        <div>Contenuto per giocatore specifico</div>
      </PlayerSpecific>
    </div>
  );
}
```

---

## Pattern CSS per visibilità condizionale

Il sistema imposta automaticamente attributi data sul tag `<html>`:

- `data-user-role="dm"` → Utente è DM
- `data-user-role="player"` → Utente è Player
- `data-user-role="guest"` → Utente non autenticato
- `data-user-id="USER_ID"` → ID Supabase dell'utente corrente

### Classi CSS predefinite

```css
/* Visibile solo al DM */
.dm-only {
  display: none;
}
html[data-user-role="dm"] .dm-only {
  display: block; /* o il display originale */
}

/* Visibile solo ai player */
.player-only {
  display: none;
}
html[data-user-role="player"] .player-only {
  display: block;
}

/* Nascosto ai guest */
.hide-for-guests {
  display: block;
}
html[data-user-role="guest"] .hide-for-guests {
  display: none;
}

/* Player-specific (richiede data-player-id) */
.player-specific {
  display: none;
}
html[data-user-role="dm"] .player-specific,
.player-specific.show-for-current-user {
  display: block;
}
```

**File globale:** Aggiungi queste classi nel tuo `global.css` o `tailwind.css`

---

## Componenti helper disponibili

### 1. `AuthProvider`

Context provider che deve wrappare tutta l'app. Gestisce autenticazione e stato utente.

```tsx
import { AuthProvider } from './components/auth/AuthProvider';

// In layout principale o _app
<AuthProvider>
  {/* App */}
</AuthProvider>
```

**Espone:**
- `user`: Oggetto utente Supabase
- `profile`: Profilo con `role` ('dm' | 'player') e `character_name`
- `loading`: Boolean per stato caricamento
- `isDM`: Boolean - è il DM?
- `isPlayer`: Boolean - è un player?

---

### 2. `DMAuthGuard`

Componente per proteggere intere pagine. Mostra form di login se non autenticato come DM.

```tsx
import DMAuthGuard from './components/dm/DMAuthGuard';

<DMAuthGuard>
  <div>Contenuto protetto</div>
</DMAuthGuard>
```

---

### 3. `DMOnly`

Wrapper che nasconde il contenuto a tutti tranne al DM.

```tsx
import { DMOnly } from './components/auth/VisibilityControls';

<DMOnly>
  <p>Solo DM vede questo</p>
</DMOnly>
```

---

### 4. `PlayerSpecific`

Wrapper che mostra il contenuto solo a un giocatore specifico (+ sempre al DM).

```tsx
import { PlayerSpecific } from './components/auth/VisibilityControls';

<PlayerSpecific playerId="supabase-user-id">
  <p>Solo questo giocatore (e il DM) vedono questo</p>
</PlayerSpecific>
```

---

## Esempi pratici

### Esempio 1: Pagina sessione con note DM

```astro
---
import MainLayout from "../../layouts/MainLayout.astro";
import { DMOnly } from "../../components/auth/VisibilityControls";
---

<MainLayout title="Sessione 1">
  <div class="max-w-5xl mx-auto">
    <!-- Visibile a tutti -->
    <h1>Sessione 1: La Discesa</h1>
    <p>I giocatori entrano nel dungeon...</p>

    <!-- Visibile solo al DM -->
    <DMOnly client:load>
      <div class="bg-red-900/20 border border-red-500 p-4 rounded mt-8">
        <h2>Note DM</h2>
        <ul>
          <li>Il boss ha 120 HP</li>
          <li>La trappola è a CD 15</li>
          <li>Il PNG mente sulla seconda porta</li>
        </ul>
      </div>
    </DMOnly>

    <!-- Visibile a tutti -->
    <h2>Incontri</h2>
    <p>Descrizione pubblica...</p>
  </div>
</MainLayout>
```

---

### Esempio 2: Pagina con segreti per giocatore specifico

```astro
---
import MainLayout from "../../layouts/MainLayout.astro";
import { PlayerSpecific } from "../../components/auth/VisibilityControls";
---

<MainLayout title="Rumor della Taverna">
  <!-- Tutti vedono questo -->
  <h1>Rumor e Voci</h1>
  <p>Nella taverna circolano strane voci...</p>

  <!-- Solo Valoris (e DM) vedono questo -->
  <PlayerSpecific playerId="id-di-valoris" client:load>
    <div class="bg-blue-900/20 border border-blue-500 p-4 rounded mt-4">
      <h3>Messaggio per Valoris</h3>
      <p>Un incappucciato ti consegna una lettera sigillata...</p>
    </div>
  </PlayerSpecific>

  <!-- Solo Thalio (e DM) vedono questo -->
  <PlayerSpecific playerId="id-di-thalio" client:load>
    <div class="bg-green-900/20 border border-green-500 p-4 rounded mt-4">
      <h3>Messaggio per Thalio</h3>
      <p>Riconosci un vecchio contatto della gilda dei ladri...</p>
    </div>
  </PlayerSpecific>
</MainLayout>
```

---

### Esempio 3: Dashboard DM completo

```astro
---
import DMAuthGuard from "../../components/dm/DMAuthGuard";
import MainLayout from "../../layouts/MainLayout.astro";
---

<MainLayout title="Dashboard DM" description="Pannello controllo DM">
  <DMAuthGuard client:load>
    <div class="max-w-7xl mx-auto p-8">
      <h1 class="text-4xl font-bold mb-8">Dashboard DM</h1>

      <div class="grid grid-cols-2 gap-6">
        <!-- Statistiche -->
        <div class="bg-slate-800 p-6 rounded-lg">
          <h2 class="text-2xl font-bold mb-4">Statistiche Campagna</h2>
          <ul class="space-y-2">
            <li>Sessioni completate: 5</li>
            <li>Favore Divino totale: 1,250 punti</li>
            <li>Mostri uccisi: 47</li>
          </ul>
        </div>

        <!-- Quick actions -->
        <div class="bg-slate-800 p-6 rounded-lg">
          <h2 class="text-2xl font-bold mb-4">Azioni Rapide</h2>
          <div class="space-y-2">
            <a href="/dm/ecosistemi" class="block btn">Gestisci Ecosistemi</a>
            <a href="/dm/mostri" class="block btn">Elenco Mostri</a>
            <a href="/dm/sessioni" class="block btn">Pianifica Sessione</a>
          </div>
        </div>
      </div>
    </div>
  </DMAuthGuard>
</MainLayout>
```

---

### Esempio 4: Componente React con logica condizionale

```tsx
import { useAuth } from '../auth/AuthProvider';

export default function EcosistemaView({ ecosistema }) {
  const { isDM, isPlayer, user } = useAuth();

  return (
    <div className="ecosistema-view">
      {/* Header visibile a tutti */}
      <h1>{ecosistema.nome}</h1>
      <p>{ecosistema.descrizione}</p>

      {/* Statistiche avanzate solo per DM */}
      {isDM && (
        <div className="dm-stats bg-red-900/20 p-4 rounded">
          <h2>Statistiche DM</h2>
          <ul>
            <li>Difficoltà reale: {ecosistema.difficoltaReale}</li>
            <li>Budget XP: {ecosistema.budgetXP}</li>
            <li>Trappole nascoste: {ecosistema.trappeNascoste.length}</li>
          </ul>
        </div>
      )}

      {/* Info per giocatori */}
      {isPlayer && (
        <div className="player-info">
          <p>Ricorda di esplorare attentamente!</p>
        </div>
      )}

      {/* Call-to-action per guest */}
      {!user && (
        <div className="guest-cta bg-blue-900/20 p-4 rounded">
          <p>Effettua il login per vedere contenuti extra!</p>
        </div>
      )}
    </div>
  );
}
```

---

## 🔍 Come trovare l'ID di un giocatore

Gli ID utente sono gestiti da Supabase. Per trovare l'ID di un giocatore:

1. **Tramite Supabase Dashboard:**
   - Vai su Supabase → Authentication → Users
   - Trova l'utente e copia il suo UUID

2. **Tramite codice (per debug):**
   ```tsx
   const { user } = useAuth();
   console.log('Il mio ID:', user?.id);
   ```

3. **Salva gli ID in un file di configurazione:**
   ```ts
   // config/playerIds.ts
   export const PLAYER_IDS = {
     valoris: 'abc123-def456-...',
     thalio: 'xyz789-uvw012-...',
     riven: 'mno345-pqr678-...',
     fealer: 'stu901-vwx234-...',
   };
   ```

---

## ⚠️ Note importanti

1. **Il DM vede sempre tutto:** Tutti i contenuti `player-specific` sono visibili al DM automaticamente.

2. **Client-side rendering richiesto:** I componenti React che usano autenticazione devono avere `client:load`:
   ```astro
   <DMOnly client:load>...</DMOnly>
   ```

3. **SSR non supportato per autenticazione:** Le pagine protette devono usare hydration client-side perché Supabase Auth funziona solo nel browser.

4. **Sicurezza:** Questi pattern sono **UI-only**. Per proteggere API o dati sensibili, implementa anche controlli server-side.

5. **Nascondere vs Proteggere:**
   - Classi CSS = Nasconde visivamente (ma HTML è nel DOM)
   - Componenti React = Rimuove completamente dal DOM se non autorizzato
   - Per contenuti molto sensibili: usa `DMAuthGuard` su intera pagina

---

## 📚 File di riferimento

- [AuthProvider.tsx](../src/components/auth/AuthProvider.tsx) - Context e hook
- [VisibilityControls.tsx](../src/components/auth/VisibilityControls.tsx) - DMOnly e PlayerSpecific
- [DMAuthGuard.tsx](../src/components/dm/DMAuthGuard.tsx) - Guard per pagine intere
- [Esempio pagina sessione](../src/pages/dm/sessioni/sessione-0.astro) - Uso pratico

---

## 🆘 Troubleshooting

### Il contenuto DM è visibile a tutti
- Verifica che `AuthProvider` sia nel layout principale
- Controlla che il componente abbia `client:load`
- Verifica che le classi CSS siano definite nel global CSS

### PlayerSpecific non funziona
- Controlla che l'ID giocatore sia corretto
- Verifica che `data-player-id` sia impostato correttamente
- Assicurati che il giocatore sia loggato

### Loading infinito
- Controlla console per errori Supabase
- Verifica configurazione client Supabase
- Assicurati che tabella `profiles` esista e sia accessibile

---

**Ultimo aggiornamento:** 2026-01-08
