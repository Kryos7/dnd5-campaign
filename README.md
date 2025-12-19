# È Sbagliato Cercare Gloria in un Dungeon Divino?

**Wiki interattivo per una campagna D&D 5e**

Un'applicazione web moderna creata con Astro e Tailwind CSS per documentare e gestire la campagna "È Sbagliato Cercare Gloria in un Dungeon Divino?" - un'avventura epica dove gli dèi scendono fisicamente sul Piano Materiale e creano un Gioco Divino competitivo.

## 📖 Concept della Campagna

Gli dèi sono scesi sul Piano Materiale nei Forgotten Realms, hanno scelto 5 città simboliche, le hanno sigillate, e creato mega-dungeon sotto ciascuna. Le gilde di avventurieri competono per:
- Completare i dungeon
- Guadagnare Favore Divino
- Portare gloria alla propria città

### Le 5 Città
- **Waterdeep** - Giustizia e Ordine (Tyr, Tymora, Mystra)
- **Mithral Hall** - Onore e Forgia (Moradin, Clangeddin, Dumathoin)
- **Menzoberranzan** - Tradimento e Crudeltà (Lolth, Vhaeraun, Kiaransalee)
- **Myth Drannor** - Redenzione e Memoria (Corellon, Sehanine, Hanali)
- **Baldur's Gate** - Commercio e Opportunismo (Waukeen, Umberlee, Gond)

## ✨ Caratteristiche

- **Dark Mode / Light Mode** - Toggle tra tema scuro e chiaro
- **DM Mode** - Mostra/nascondi contenuti riservati al DM
- **Responsive Design** - Completamente ottimizzato per mobile e desktop
- **Componenti Riutilizzabili** - CityCard, GodCard, InfoBox, DungeonLevelCard, etc.
- **Dati Strutturati** - JSON per città e dèi facilmente espandibili
- **Navigazione Intuitiva** - Breadcrumbs e link rapidi tra sezioni

## 🚀 Struttura del Progetto

```
dnd5-campaign-visual-app/
├── public/
│   └── data/
│       ├── citta.json
│       └── dei.json
├── src/
│   ├── components/
│   │   ├── CityCard.astro
│   │   ├── GodCard.astro
│   │   ├── InfoBox.astro
│   │   ├── DungeonLevelCard.astro
│   │   └── ProgressTracker.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── citta/
│   │   ├── lore/
│   │   ├── dei/
│   │   ├── meccaniche/
│   │   ├── dungeon/
│   │   ├── gilde/
│   │   └── reference/
│   └── styles/
│       └── global.css
└── package.json
```

## 🧞 Comandi

Tutti i comandi vanno eseguiti dalla root del progetto:

| Comando | Azione |
| :--- | :--- |
| `npm install` | Installa le dipendenze |
| `npm run dev` | Avvia il server di sviluppo su `localhost:4321` |
| `npm run build` | Costruisce il sito per la produzione in `./dist/` |
| `npm run preview` | Anteprima del build in locale |

## 🎨 Tecnologie Utilizzate

- **[Astro](https://astro.build)** - Framework web moderno e performante
- **[Tailwind CSS 4](https://tailwindcss.com)** - Framework CSS utility-first
- **TypeScript** - Type safety per JavaScript
- **JSON** - Storage dati strutturati

## 📝 Sezioni Implementate

- ✅ **Homepage** - Hero section con panoramica e link rapidi
- ✅ **Città** - Overview e pagine dettagliate (esempio: Waterdeep)
- ✅ **Lore** - L'Annuncio degli Dèi con informazioni DM/Giocatori
- ✅ **Pantheon** - Tutti i 15 dèi con dettagli completi
- 🚧 **Meccaniche** - Sistema di Favore Divino (placeholder)
- 🚧 **Dungeon** - Struttura e livelli (placeholder)
- 🚧 **Gilde** - Sistema gilde (placeholder)
- 🚧 **Reference** - Tabelle quick reference (placeholder)

## 🎯 Prossimi Passi

1. Completare le pagine per tutte le 5 città
2. Implementare sistema di Favore Divino
3. Dettagliare struttura dungeon (livelli 1-20+)
4. Creare template per gilde
5. Aggiungere tabelle di riferimento rapido
6. Implementare calcolatori interattivi
7. Aggiungere mappe (opzionale)

## 🤝 Contribuire

Questo è un progetto personale per una campagna D&D. Sentiti libero di:
- Forkare il progetto per la tua campagna
- Suggerire miglioramenti
- Segnalare bug

## 📜 Licenza

MIT License - Sentiti libero di usare questo progetto per le tue campagne!

## 🙏 Crediti

Ambientato nei **Forgotten Realms**, proprietà di Wizards of the Coast.
Creato per uso personale in una campagna D&D 5e.
