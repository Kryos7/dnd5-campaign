# Guida all'Utilizzo

## Come Iniziare

### 1. Installazione
```bash
npm install
```

### 2. Avvio del Server di Sviluppo
```bash
npm run dev
```
Apri il browser su [http://localhost:4321](http://localhost:4321)

### 3. Build per Produzione
```bash
npm run build
```
Il sito verrà creato nella cartella `dist/`

## Personalizzazione dei Contenuti

### Aggiungere Nuove Città

Modifica il file `public/data/citta.json` e aggiungi un nuovo oggetto Città:

```json
{
  "name": "Nome Città",
  "slug": "nome-citta",
  "race": "Razza/Tipo",
  "gods": ["Dio1", "Dio2", "Dio3"],
  "theme": "Tema della Città",
  "description": "Breve descrizione...",
  "fullDescription": "Descrizione completa...",
  "culture": "Descrizione cultura...",
  "dungeonTheme": "Tema del dungeon...",
  "uniqueSystem": {
    "name": "Nome Sistema",
    "description": "Descrizione meccanica unica..."
  },
  "keyLocations": [
    "Luogo 1",
    "Luogo 2"
  ]
}
```

Poi crea una nuova pagina in `src/pages/citta/nome-citta.astro` copiando la struttura di `waterdeep.astro`.

### Aggiungere Nuovi Dèi

Modifica `public/data/dei.json` e aggiungi un nuovo dio:

```json
{
  "name": "Nome Dio",
  "title": "Titolo/Epiteto",
  "domain": ["Dominio1", "Dominio2"],
  "city": "Nome Città",
  "alignment": "LG",
  "description": "Descrizione...",
  "expectations": "Cosa si aspetta dai fedeli...",
  "blessings": "Benedizioni che concede...",
  "symbols": ["Simbolo 1", "Simbolo 2"]
}
```

### Modificare il Lore

I file principali per il lore si trovano in `src/pages/lore/`:
- `annuncio.astro` - L'annuncio iniziale degli dèi
- Altri file lore possono essere aggiunti seguendo lo stesso pattern

### Aggiungere Meccaniche

Crea nuovi file in `src/pages/meccaniche/` seguendo il pattern di `favore-divino.astro`.

## Utilizzo dei Componenti

### CityCard

```astro
<CityCard
  name="Waterdeep"
  slug="waterdeep"
  gods={["Tyr", "Tymora", "Mystra"]}
  theme="Giustizia e Ordine"
  description="Breve descrizione..."
  race="Umani/Mista"
/>
```

### GodCard

```astro
<GodCard
  name="Tyr"
  title="Il Dio Giusto"
  domain={["Giustizia", "Ordine"]}
  city="Waterdeep"
  description="Descrizione..."
  alignment="LG"
/>
```

### InfoBox

```astro
<InfoBox type="player" title="Titolo Opzionale">
  <p>Contenuto del box...</p>
</InfoBox>
```

Tipi disponibili: `player`, `dm`, `mechanic`, `lore`

### DungeonLevelCard

```astro
<DungeonLevelCard
  levelNumber={1}
  name="Nome Livello"
  difficulty={3}
  theme="Tema opzionale"
  resetFrequency="Giornaliero"
  rewards={["Ricompensa 1", "Ricompensa 2"]}
  dangers={["Pericolo 1", "Pericolo 2"]}
/>
```

### ProgressTracker

```astro
<ProgressTracker
  label="Nome Progresso"
  percentage={75}
  color="blue"
  showPercentage={true}
/>
```

Colori disponibili: `blue`, `green`, `yellow`, `purple`, `red`

## Toggle DM Mode e Dark Mode

### DM Mode
Il toggle "DM Mode" nella navbar mostra/nasconde tutti gli elementi con classe `dm-only`:

```html
<div class="dm-only">
  Questo contenuto è visibile solo con DM Mode attivo
</div>
```

### Dark/Light Mode
Gestito automaticamente. Il tema viene salvato in localStorage.

## Struttura delle Pagine

Ogni pagina segue questo pattern:

```astro
---
import MainLayout from '../../layouts/MainLayout.astro';
// Altri import...

// Logica della pagina
---

<MainLayout title="Titolo Pagina">
  <!-- Breadcrumbs opzionali -->
  <nav class="mb-6 text-sm text-slate-400">
    <a href="/">Home</a>
    <span class="mx-2">/</span>
    <span class="text-slate-300">Pagina Corrente</span>
  </nav>

  <!-- Contenuto della pagina -->
  <h1>Titolo</h1>

  <!-- Navigazione opzionale -->
  <div class="flex justify-between mt-12 pt-6 border-t border-slate-700">
    <a href="/prev">< Precedente</a>
    <a href="/next">Successivo ></a>
  </div>
</MainLayout>
```

## Consigli per lo Sviluppo

1. **Usa i componenti esistenti** - Evita di duplicare codice, riutilizza i componenti
2. **Mantieni i JSON aggiornati** - Sono la fonte unica di verità per Città e dèi
3. **Segui la struttura esistente** - Mantieni coerenza con le pagine già create
4. **Testa sempre in locale** - Usa `npm run dev` prima di fare il build
5. **Usa breadcrumbs** - Aiutano la navigazione, specialmente su mobile

## Deploy

### Opzione 1: Vercel
1. Crea un account su [Vercel](https://vercel.com)
2. Collega il repository GitHub
3. Deploy automatico ad ogni push

### Opzione 2: Netlify
1. Crea un account su [Netlify](https://netlify.com)
2. Collega il repository
3. Build command: `npm run build`
4. Publish directory: `dist`

### Opzione 3: GitHub Pages
1. Modifica `astro.config.mjs` aggiungendo `site` e `base`
2. Usa GitHub Actions per il deploy automatico
3. Documentazione: [Astro Docs - GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

## Troubleshooting

### Errore: "Cannot find module..."
```bash
rm -rf node_modules package-lock.json
npm install
```

### Modifiche ai JSON non si vedono
Riavvia il server di sviluppo (Ctrl+C e poi `npm run dev`)

### Errore di build
Controlla che tutti i file importati esistano e che la sintassi Astro sia corretta.

## Risorse Utili

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [D&D 5e SRD](https://dnd.wizards.com/resources/systems-reference-document)
- [Forgotten Realms Wiki](https://forgottenrealms.fandom.com)
