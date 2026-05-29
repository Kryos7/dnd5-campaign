import React, { useState } from 'react';

interface Stanza {
  numero: string;
  nome: string;
  tipo: string;
  dimensioni?: string;
  descrizione: string;
  elementi: string[];
  pericoli?: string;
  cristalli?: string;
  favoreDivino?: string;
  noteDM?: string[];
  statistiche?: {
    nome: string;
    valori: string[];
  };
  percorso?: string;
  opzionale?: boolean;
  mostroLink?: { label: string; href: string; color?: string }[];
}

interface Livello {
  numero: number;
  nome: string;
  livelloConsigliato: number;
  stanzeTotali: string;
  durataStimata: string;
  tema: string;
  caratteristiche: string[];
  layout: string;
  percorsi: { nome: string; descrizione: string }[];
}

export default function EcosistemaView2() {
  const [stanzaSelezionata, setStanzaSelezionata] = useState<string | null>(null);
  const [sezioneAperta, setSezioneAperta] = useState<string>('panoramica');

  const livello2: Livello = {
    numero: 2,
    nome: 'Le Fogne Profonde',
    livelloConsigliato: 5,
    stanzeTotali: '11 + 3 opzionali',
    durataStimata: '3.5-5 ore',
    tema: 'Fogne corrotte e mutate — l\'acqua è viva',
    caratteristiche: [
      'L\'acqua è viva: correnti anomale, maree artificiali, acqua che scorre verso l\'alto',
      'Il dungeon reagisce: torce che si affievoliscono, aria che cambia temperatura',
      'Tracce di mutazione: ossa geometriche disposte in pattern impossibili, segni di vita attiva',
      'Nessun riferimento al mondo esterno: nessuna lettera, nessun PNG dalla superficie',
      'Nemici eliminati svaniscono in nube di polvere rilasciando cristalli magici'
    ],
    layout: 'Circolare a tre percorsi da hub centrale',
    percorsi: [
      { nome: 'Percorso Ovest (Correnti)', descrizione: 'Esplorazione + anomalia magica (puzzle/lore)' },
      { nome: 'Percorso Centrale (Galleria)', descrizione: 'Combattimento + puzzle meccanico' },
      { nome: 'Percorso Est (Accampamento)', descrizione: 'Combattimento pesante + lore dei Sommersi' }
    ]
  };

  const stanzeL2: Stanza[] = [
    {
      numero: '15',
      nome: 'La Discesa Umida',
      tipo: 'Entrata/Transizione',
      dimensioni: '2m x 10m corridoio',
      descrizione: 'La scala a chiocciola di pietra nera scende per altri venti metri buoni prima di sfociare in un corridoio basso e stretto. Il cambiamento è immediato: l\'aria diventa calda, umida, densa — come entrare in una bocca. Le pareti trasudano condensa. Il pavimento è coperto da un velo d\'acqua (5cm) che si muove lentamente verso il fondo del corridoio, controcorrente rispetto alla leggera pendenza.\n\nA metà corridoio, le torce dei personaggi tremolano e si abbassano per un istante, come se qualcosa avesse risucchiato l\'ossigeno. Poi tornano normali.',
      elementi: [
        'Acqua controcorrente: Natura CD 12 o Arcano CD 14 per notare che l\'acqua scorre in salita. Non dovrebbe essere possibile. Nessun meccanismo visibile.',
        'Percezione CD 13: Le pareti hanno segni di graffi lunghi e paralleli — come se qualcosa con artigli si fosse trascinato lungo il corridoio. I graffi vanno in entrambe le direzioni.'
      ],
      pericoli: 'Nessuno diretto (la zona è sicura, ma inquietante)',
      cristalli: 'Nessuno',
      favoreDivino: 'Mystra: notare l\'acqua controcorrente e ipotizzare una causa magica',
      noteDM: [
        'Questa stanza deve comunicare immediatamente che il Piano 2 è diverso.',
        'L\'aria calda, l\'acqua che si muove da sola, i segni di artigli — tutto dice "qui qualcosa è cambiato".',
        'Non accelerare questa descrizione. Lascia che i giocatori sentano il disagio.'
      ]
    },
    {
      numero: '16',
      nome: 'La Grande Cisterna',
      tipo: 'Hub centrale',
      dimensioni: '15m diametro, soffitto a cupola 8m',
      descrizione: 'Il corridoio si apre in uno spazio enorme. Una cisterna circolare di 15 metri di diametro con un soffitto a cupola che raggiunge gli 8 metri. Al centro, una vasca circolare di 5 metri contiene acqua scura che pulsa ritmicamente — ogni 6 secondi esatti, l\'acqua si alza di 10cm e poi scende. Come un battito cardiaco.\n\nTre grandi aperture ad arco si aprono sulle pareti: Ovest, Nord e Est. Sopra ogni arco, qualcuno ha scolpito nella pietra un simbolo diverso:\n• Ovest: Onde stilizzate (→ Percorso Correnti)\n• Nord: Un occhio con tentacoli (→ Galleria dei Grick)\n• Est: Una figura umana con braccia troppo lunghe (→ Accampamento Sommersi)\n\nIl muschio bioluminescente qui emette una luce azzurro-viola invece che verde, e pulsa allo stesso ritmo dell\'acqua nella vasca.',
      elementi: [
        'Vasca pulsante: Arcano CD 12 rivela aura debole di trasmutazione. Natura CD 14: "Non è un fenomeno naturale, ma non è nemmeno un incantesimo riconoscibile"',
        'Tubature: Investigare CD 13 rivela che il sistema è stato sabotato deliberatamente — qualcuno ha rotto le tubature in punti specifici per redirezionare l\'acqua verso le zone Est',
        'Ossa geometriche: Sul pavimento vicino all\'arco Est, piccole ossa (di ratto, forse) disposte in cerchi concentrici perfetti. Nessun animale fa questo.',
        'Tesoro nella vasca: Percezione CD 15 (sott\'acqua, con luce) rivela sul fondo: 2 Cristalli Minuscoli + un anello di bronzo con incisione a goccia d\'acqua (vendibile 15 mo, non magico)'
      ],
      pericoli: 'Nessuno diretto (area sicura — buon punto per breve riposo e decisioni)',
      cristalli: 'Nessuno',
      favoreDivino: 'Mystra: studiare la vasca pulsante (+5% Favore per documentare l\'anomalia)',
      noteDM: [
        'Questo è il momento di scelta. I giocatori decidono quale percorso esplorare prima.',
        'Il simbolo sopra l\'arco Est (figura umana deformata) dovrebbe essere inquietante ma non esplicito.',
        'I simboli sembrano antichi, non recenti. Fanno parte dell\'architettura originale della cisterna.',
        'Il pulsare dell\'acqua è il primo segnale forte dell\'anomalia. Non spiegarlo. Nessun check fornisce una risposta completa.'
      ]
    },
    {
      numero: '17',
      nome: 'Il Tunnel delle Correnti Inverse',
      tipo: 'Esplorazione + Pericolo ambientale',
      dimensioni: '25m x 3m, altezza 2.5m',
      percorso: 'Ovest',
      descrizione: 'Un tunnel curvo con un canale centrale profondo 1m che occupa metà della larghezza. L\'acqua nel canale scorre con forza verso l\'interno del dungeon — nella direzione sbagliata, risalendo una pendenza evidente.\n\nLungo i bordi del tunnel, passaggi rialzati di 1m di larghezza permettono di camminare senza entrare nell\'acqua. Ma sono scivolosi e in due punti (a 8m e 18m) i bordi sono crollati, lasciando tratti di 2m dove l\'unica opzione è attraversare il canale o saltare.\n\nLe torce qui bruciano con fiamma azzurra invece che arancione.',
      elementi: [
        'Canale con corrente: Entrare nell\'acqua = Atletica CD 13 per non essere trascinati. Fallimento: trascinati 3m verso la zona 18 + 1d4 danni contundenti. L\'acqua è innaturalmente fredda.',
        'Crolli (2 punti): Saltare = Acrobazia o Atletica CD 12 (2m). Guadare il canale = Atletica CD 13. Alternative creative: corde, Mage Hand, volare, ecc.',
        'Fiamme azzurre: Arcano CD 13 rivela saturazione magica nell\'aria — "Come essere dentro un incantesimo che qualcuno ha lanciato molto tempo fa."',
        'Muro incrinato (a 15m): Percezione CD 14, Investigare CD 16 o Attrezzi da scasso CD 15: il muro è sottile, si può sfondare (Atletica CD 14 o 10 danni) → PASSAGGIO NASCOSTO verso Zona 22 (percorso Est)',
        'Tesoro: Incastrato tra le rocce del primo crollo: 2 Cristalli Minuscoli + una fiala di vetro blu sigillata (Antitossina, 50 mo)'
      ],
      pericoli: 'Corrente d\'acqua, crolli, scivolosità',
      cristalli: 'Nessuno',
      favoreDivino: 'Tymora: attraversare entrambi i crolli senza cadere in acqua. Mystra: documentare le fiamme azzurre e la corrente anomala',
      noteDM: [
        'Questo tunnel è più atmosferico che pericoloso. L\'obiettivo è far sentire ai giocatori che le regole normali non valgono più.',
        'L\'acqua va nella direzione sbagliata. Le fiamme sono del colore sbagliato.',
        'Il passaggio segreto verso il percorso Est è una scorciatoia importante — premia l\'esplorazione attenta.'
      ]
    },
    {
      numero: '18',
      nome: 'La Camera dell\'Acqua Ascendente',
      tipo: 'Anomalia magica + Lore',
      dimensioni: '10x8m, soffitto a cupola 6m',
      percorso: 'Ovest',
      descrizione: 'Camera ovale con soffitto a cupola alto 6m. Al centro, un fenomeno impossibile: una colonna d\'acqua larga 1m sale dal pavimento fino al soffitto senza alcun supporto visibile. L\'acqua scorre verso l\'alto con velocità costante, colpisce il soffitto, e scompare — assorbita dalla pietra senza lasciare traccia.\n\nLa stanza è illuminata dalla colonna stessa, che emette una luce tenue color ambra. Il suono è ipnotico: un sussurro costante, come una cascata rovesciata.\n\nAttorno alla base della colonna, il pavimento è coperto da cerchi concentrici di sale cristallizzato — perfettamente geometrici.',
      elementi: [
        'Colonna d\'acqua ascendente — Toccarla: l\'acqua è calda, chi ci mette la mano sente una vibrazione che risale lungo il braccio fino al petto. Non dolorosa, ma profonda.',
        'Arcano CD 15: l\'aura è fortissima — trasmutazione mista a qualcosa di non classificabile. "Non è magia divina, non è arcana... è qualcosa di più antico."',
        'Natura CD 16 (Fealer): "Sento... una distorsione. Come se le leggi naturali qui fossero state riscritte."',
        'Se Riven tocca l\'acqua: il flusso di magia selvaggia lo investie. Deve superare un Tiro Salvezza Volontà CD 12 per tenerla sotto controllo. Successo: avverte la pressione ma la domina — sente un momento di perfetta, inquietante chiarezza: "questa magia è come la mia". Fallimento: la magia selvaggia si scatena — tira sulla Wild Magic Surge Table.',
        'Pattern nella condensazione: Investigare CD 16 o Percezione CD 18: i pattern sul pavimento somigliano ai cerchi di sale attorno alla colonna, ma molto più complessi — quasi una lingua.',
        'Cerchi di sale: Natura o Alchimia CD 12 per raccogliere 3 dosi di "Sale delle Profondità" — 30 mo a dose, oppure +1 al CD di un incantesimo di abiurazione (monouso)',
        'NODO DELLA TRAMA #1: Chi studia la colonna per 10 min e supera Arcano CD 14 può catalogare questa anomalia come "Nodo della Trama"'
      ],
      pericoli: 'Nessuno diretto (la colonna non è pericolosa, solo... sbagliata)',
      cristalli: 'Nessuno',
      favoreDivino: 'Mystra: catalogare il Nodo della Trama (+20% Favore). Bonus: se Riven tocca l\'acqua e il party discute (+5% extra)',
      noteDM: [
        'QUESTA È LA STANZA del Piano 2. Non di combattimento, ma di lore. I giocatori dovrebbero fermarsi e chiedersi "cosa sta succedendo?"',
        'L\'acqua ascendente è il primo fenomeno veramente inspiegabile. Non è un incantesimo. Non è un meccanismo. È una distorsione della realtà.',
        'Se Fealer è presente, enfatizza il suo disagio viscerale. Lui SENTE che qualcosa non va.',
        'Non dare risposte. Mai. "Non sai cosa sia" è la risposta corretta a qualsiasi check.'
      ]
    },
    {
      numero: '19',
      nome: 'La Cripta Allagata',
      tipo: 'Combattimento + Tesoro',
      dimensioni: '8x6m, soffitto 2.5m',
      percorso: 'Ovest',
      opzionale: true,
      descrizione: 'Una porta bassa e arrugginita sulla parete sud della Zona 18. Camera rettangolare completamente allagata (1m d\'acqua torbida grigia). Il soffitto è basso (2.5m), creando una sensazione claustrofobica. Vecchi sarcofagi di pietra — sei in totale — sono allineati lungo le pareti, semisommersi. Tre sono aperti e vuoti. Due sono chiusi. Uno è spaccato a metà.\n\nL\'acqua qui è densa e opaca. Impossibile vedere il fondo.\n\n⚠️ DESCRIZIONE AI GIOCATORI: "L\'acqua non è ferma. Non come dovrebbe essere. C\'è qualcosa — una lentezza, quasi una viscosità — nel modo in cui si muove attorno alle vostre gambe. Forse è solo il fango. Forse è solo la corrente. Ma per un attimo, giurate di aver visto la superficie incresparsi verso di voi, non lontano da voi."',
      elementi: [
        '⚔️ MELMA TOMBALE x2: Due Melme Tombali (custom CR 3) giacciono immerse, indistinguibili dal liquido torbido. NON sono Gray Ooze standard — sono più grandi, più rapide in acqua, e sputano acido.',
        '🎲 SORPRESA: Percezione passiva CD 20 per individuarne una prima che emerga. Se nessun PG la supera → round di sorpresa completo. CD scende a 14 se i PG producono molto rumore nell\'acqua (corsa, cadute, ecc.).',
        '🗡️ TATTICA: La prima emerge sotto il PG più avanzato quando si avvicina ai sarcofagi. La seconda emerge dal lato opposto 1 round dopo (tenaglia). Tra un round e l\'altro si reimmerge con azione bonus per ricostituire il camouflage.',
        'Sarcofago 1: Atletica CD 14 → 3 Cristalli Minuscoli + un pugnale d\'argento (20 mo, funziona come arma argentata)',
        'Sarcofago 2: Atletica CD 14 → NODO DELLA TRAMA #2 (cristallo che levita a 3cm dal fondo del sarcofago, emette luce tenue)',
        'Sarcofago spaccato: Ossa vecchissime e placca di bronzo illeggibile (corrosa). Nessun valore.'
      ],
      pericoli: '2 Melme Tombali CR 3 (corrodono metallo E legno!), sorpresa quasi garantita, acqua che rallenta il movimento, claustrofobia',
      cristalli: '20 cristalli piccoli (10 per melma)',
      favoreDivino: 'Tempus: sconfiggere entrambe le melme. Mystra: catalogare il Nodo della Trama #2 (+20% Favore)',
      statistiche: {
        nome: 'Melma Tombale — Variante Custom (CR 3, 700 PE)',
        valori: [
          '--- STATISTICHE BASE ---',
          'CA 8 | PF 52 (8d8+16) | Velocità 6m, nuotare 12m',
          'FOR 16 (+3) DES 5 (-3) COS 14 (+2) INT 1 (-5) SAG 6 (-2) CAR 2 (-4)',
          'Immunità danni: acido, veleno | Resistenze: freddo, fuoco, fulmine',
          'Immunità condizioni: accecato, spaventato, prono',
          'Vista cieca 18m (cieca oltre) | Percezione passiva 8 | GdS 3 (700 PE)',
          '--- TRATTI SPECIALI ---',
          'Camouflage Acquatico: Nell\'acqua torbida è invisibile oltre 1,5m. CD Percezione passiva 20 per individuarla; scende a 14 se ha mosso o attaccato quel round (produce onde visibili).',
          'Corrode Metallo e Legno: Ogni colpo di Pseudopodio a segno → TS COS CD 13 o l\'arma/armatura perde -1 permanente al danno o CA (distrutta a -5). Valido per metallo E legno non magici.',
          'Nascita dall\'Acqua: Se i PG non l\'hanno individuata, ottiene un round di sorpresa completo (i PG non possono agire nel primo round).',
          '--- AZIONI (1 per turno) ---',
          'Pseudopodio: +5 al colpire, portata 1,5m — 2d8+3 (12) contundenti + 2d6 (7) acido',
          'Sputo d\'Acido (ricarica 5-6): Attacco a distanza +5, gittata 9m — 4d6 (14) acido, CD 13 DES per dimezzare',
          '--- AZIONE BONUS ---',
          'Immersione Rapida: La Melma si tuffa nell\'acqua diventando di nuovo invisibile (CD 20). Può riemergere e attaccare nel turno successivo.'
        ]
      },
      noteDM: [
        '🎭 ATMOSFERA: Descrivi l\'acqua che "respira" o si muove prima che i PG entrino. Non rivelare mai esplicitamente il mostro — lascia che il disagio cresca organicamente.',
        '⚠️ PERICOLOSITÀ REALE: 2x Melma Tombale CR 3 = ~2100 XP totali. Per un party di 5 a livello 5 è un incontro Medium/Hard. Il round di sorpresa lo trasforma in qualcosa di effettivamente minaccioso.',
        '🗡️ BERSAGLI PRIORITARI: Priorità al PG in armatura pesante (Valoris). Ogni colpo richiede TS o danneggia l\'equipaggiamento permanentemente — 3-4 colpi possono rovinare un\'armatura intera.',
        '🏃 RITIRATA: Le Melme non inseguono oltre la porta — fuori dall\'acqua la loro velocità crolla a 6m e perdono tutti i vantaggi. I PG possono tornare preparati.',
        '💡 ARMI MAGICHE: Armi e armature magiche sono immuni alla corrosione. I PG con spell o armi magiche sono più al sicuro — questo crea dinamiche tattiche interessanti su chi combatte in mischia.',
        '🎲 COLPI SPECIALI: Se una Melma tira Sputo d\'Acido su un PG in acqua che cade prono, il turno successivo è in svantaggio per rialzarsi — combinazione devastante.'
      ],
      mostroLink: [
        { label: '🫧 Melma Tombale — Scheda Completa', href: '/dm/mostri/melma-tombale', color: 'green' }
      ]
    },
    {
      numero: '20',
      nome: 'La Galleria dei Grick',
      tipo: 'Combattimento importante',
      dimensioni: '30m x 4m, soffitto 5m',
      percorso: 'Centrale',
      descrizione: 'Galleria lunga e sinuosa con soffitto alto 5m e numerose nicchie laterali. Il pavimento è coperto da 60cm d\'acqua torbida verdastra. Le pareti sono rigate da solchi profondi e viscidi — segni di artigli che salgono fino al soffitto. Ossa sparse ovunque.\n\nL\'acqua qui è stranamente immobile. Nessuna corrente, nessun movimento. Come se aspettasse.\n\nA metà galleria, un pilastro crollato emerge dall\'acqua. Oltre il pilastro, la galleria curva verso sinistra.',
      elementi: [
        'Combattimento: 2 Grick Acquatici — Il primo è sommerso vicino al pilastro crollato (Percezione CD 16). Il secondo è aggrappato al soffitto nella curva (Percezione CD 15, scia viscida fresca).',
        'Tattica: Il primo attacca quando un PG supera il pilastro. Il secondo attacca 1-2 round dopo. Pinza classica. Usano Immersione Rapida per sparire e riemergere.',
        'Se ridotti sotto 8 PF: fuggono attraverso cunicoli nelle nicchie (troppo stretti per i PG)',
        'Nicchia 3: 2 Cristalli Minuscoli + osso intagliato con rune (vendibile 8 mo, non magico)',
        'Nicchia 5: Nido con uova gelatinose (4-5 uova di Grick — Natura CD 14 rivela che un Grick con uova è più aggressivo)',
        'Nicchia 6 (fondo): Percezione CD 14 → sacca di cuoio: 3 Cristalli Minuscoli + Pozione di Guarigione (2d4+2)',
        'Solchi sul soffitto: Atletica CD 16 per arrampicarsi → 2 dosi "Muco di Grick" — CD Costituzione 11 o svantaggio al prossimo attacco (monouso, 15 mo ciascuna)'
      ],
      pericoli: '2 Grick Acquatici (resistenti a danni non magici!), acqua profonda 60cm',
      cristalli: '30 cristalli piccoli (15 per Grick)',
      favoreDivino: 'Tempus: sconfiggere entrambi i Grick. Bonus: <5 round (+5%). Tymora: individuare entrambi prima che attacchino',
      noteDM: [
        'I Grick sono RESISTENTI ai danni non magici — salto di difficoltà significativo rispetto al Piano 1.',
        'Servono magie, armi argentate/magiche, o tattiche creative.',
        'Il pugnale d\'argento della Zona 19 (se trovato) funziona qui.',
        'Due Grick contemporaneamente = incontro Difficile per party livello 5. La tattica a tenaglia è cruciale.'
      ],
      mostroLink: [
        { label: '🐙 Grick Acquatico — Scheda Completa', href: '/dm/mostri/grick-acquatico', color: 'cyan' }
      ]
    },
    {
      numero: '21',
      nome: 'La Sala delle Chiuse',
      tipo: 'Sfida fisica + Scoperta ambientale',
      dimensioni: '12x12m, soffitto 18m',
      percorso: 'Centrale',
      descrizione: 'Camera ottagonale con soffitto insolitamente alto. Al centro, una colonna d\'acqua sale dal pavimento fino quasi al soffitto: stessa anomalia di Zona 18, ma qui è concentrata, potente, quasi solida — larga 7.5 metri, alta 15 metri, ruota lentamente su sé stessa mentre sale. L\'acqua riempie la stanza per i primi 2 metri dal pavimento.\n\nA 15 metri d\'altezza, una piattaforma di pietra aggettante regge una grande ruota di bronzo — la chiusa vera e propria. La scala che portava alla piattaforma è crollata. Le pareti sono lisce, bagnate, senza appigli.\n\nIl passaggio verso Zona 25 è sigillato da una saracinesca di ferro sulla parete Sud. Sopra la saracinesca, inciso nella pietra: "L\'acqua non conosce il basso. Nemmeno tu."',
      elementi: [
        'OBIETTIVO: raggiungere la piattaforma a 15m e girare la ruota di bronzo per aprire la saracinesca verso Zona 25.',
        'LA COLONNA — Larga 7.5m, non si può aggirare restando a piedi asciutti. La logica è invertita rispetto alla natura: stando fermi dentro la corrente, il flusso porta lentamente in superficie (ascesa di ~3m/round). Qualsiasi azione intrapresa — nuotare, scalare, combattere — causa invece un rapido affondamento verso il fondo.',
        'Entrare nella colonna: Constitution CD 11 per il freddo (1d4 danni da freddo, non bloccante). Per salire: restare immobili e lasciarsi trasportare — nessun check. Per scendere o restare fermi in profondità: fare un\'azione qualsiasi.',
        'LA RUOTA — È sommersa nella colonna d\'acqua a 15m di quota. Per raggiungerla i PG devono poter respirare sott\'acqua (o trattenere il respiro). La ruota è bloccata da un meccanismo arrugginito: Forza CD 15 per sbloccarla. Appena girata, la saracinesca si apre con un boato idraulico sordo e la colonna d\'acqua si ferma.',
        'PRIMA CHIAVE A SPIRALE — Era perennemente tenuta in aria dalla forza ascendente della colonna, invisibile nell\'acqua in moto. Quando la ruota viene girata e la colonna si ferma, cade nella pozza ai piedi della colonna. La testa della chiave ha la forma di una spirale d\'acqua — la stessa del movimento rotante della colonna stessa. È la prima delle due chiavi necessarie per sbloccare i meccanismi del portone blindato verso la Zona 27.',
        'TENTATIVI ALTERNATIVI — Scalare la parete: Atletica CD 20 (liscia, bagnata e alta 15m), ogni fallimento = 1d6 danni caduta. Fly/Levitate: funzionano, arrivano su — ma la ruota è sott\'acqua, serve comunque modo per respirare. Spider Climb: valido per la parete, ma la ruota è immersa.',
        'COLLEGAMENTO ZONA 27 — Girare la ruota attiva il circuito idraulico del Collettore. In Zona 27 (boss fight), il pannello sulla parete Ovest diventa operativo: consente di forzare l\'acqua BASSA per 2 round (usabile 2 volte). I PG sentiranno un clic meccanico lontano quando la ruota gira — non sanno ancora cosa significa.'
      ],
      pericoli: 'Affogamento per chi esaurisce il respiro nella colonna, caduta dalla piattaforma (3d6 danni, 15m), freddo della colonna (1d4)',
      cristalli: 'Nessuno',
      favoreDivino: 'Tymora: primo PG ad entrare nella colonna senza tentare scale o volo prima — coraggio puro (+10%). Mystra: capire la logica inversa della colonna (immobiltà = salita) prima di provarla (Arcano CD 13, +10%).',
      noteDM: [
        'L\'ostacolo è doppio: capire la logica inversa (fare niente per salire) e poi respirare sott\'acqua per girare la ruota. Non sono problemi impossibili — il party ha sicuramente qualche soluzione: Waterbreathing, pozioni, resistenza al respiro.',
        'La larghezza di 7.5m rende impossibile evitare la colonna senza magia — Fealer con gli stivali alati non può semplicemente volare intorno, la colonna riempie la stanza. Può usarli per salire fuori dalla colonna, ma la ruota è sott\'acqua comunque.',
        'Descrivi la colonna con cura: "L\'acqua ruota su sé stessa come un pilastro vivo, occupa quasi tutta la stanza. Non schizza, non fa rumore. Sale e basta." I giocatori devono sentire che è anomala ma non ostile.',
        'Il momento in cui un PG si immobilizza e sale: rallenta il tempo. Descrivi la sensazione di lasciarsi andare nell\'acqua impossibile, il soffitto che si avvicina, i compagni piccoli sotto.',
        'La colonna che si ferma dopo la soluzione è importante: mostra che il dungeon "risponde" alle loro azioni.',
        'PAYOFF IN ZONA 27: i PG che hanno capito la logica inversa della colonna riconoscono le correnti ascendenti della boss room. Potrebbero usarle in modi creativi — assecondalo.'
      ]
    },
    {
      numero: '22',
      nome: 'La Quadra Nord',
      tipo: 'Hub — 4 sub-aree',
      dimensioni: 'Grande stanza quadrata, 4 quadranti',
      percorso: 'Est',
      descrizione: 'Una grande stanza quadrata che funge da snodo per l\'ala nord del livello. È divisa in quattro quadranti distinti, ciascuno corrispondente a una delle aree operative originarie del complesso.\n\n▸ Nord-Ovest: Dormitori\n▸ Nord-Est: Pozzo\n▸ Sud-Ovest: Cucine\n▸ Sud-Est: Armeria\n\n[SESSIONE 5 — parzialmente esplorata] I PG hanno esplorato le Cucine (SW). Dormitori, Armeria e Pozzo sono ancora inesplorate.',
      elementi: [
        '🍳 CUCINE (SW) — [ESPLORATA] 3 Sommersi Recenti sconfitti. Trovati: 24 Cristalli Minuscoli, Pozione di Guarigione Superiore sulla mensola del camino. Riven trasformato in pianta da magia selvaggia al termine del combattimento.',
        '🛏️ DORMITORI (NW) — [INESPLORATA] Da definire.',
        '⚗️ ARMERIA (SE) — [INESPLORATA] Da definire.',
        '🪣 POZZO (NE) — [INESPLORATO] NODO DELLA TRAMA #3: l\'acqua sul fondo del pozzo forma spirali che ruotano da sole (Arcano CD 12 per catalogare). Sul fondo del pozzo (~4m di profondità, acqua fredda e scura), in una piccola nicchia scavata nella parete laterale: SECONDA CHIAVE A SPIRALE. Identica nella forma alla prima — una spirale intrecciata in ferro scuro. È la seconda delle due chiavi per il portone blindato della Zona 27. Recuperarla richiede immergersi (Atletica CD 12 per la discesa con corrente debole). Percezione CD 14 sott\'acqua con luce per notare la nicchia.',
        'Individuazione del Magico: Fealer ha rilevato piccole aure sparse nella stanza principale — cristalli da raccogliere.'
      ],
      pericoli: 'Varia per sub-area',
      cristalli: '24 cristalli (dalle Cucine, già raccolti in S5)',
      favoreDivino: '',
      noteDM: [
        '[S5] I PG sono entrati dalla porta nord della Zona 23.',
        '[S5] Cucine esplorate e ripulite — 3 Sommersi Recenti sconfitti.',
        'Dormitori, Armeria e Pozzo da esplorare nelle sessioni successive.'
      ],
      mostroLink: [
        { label: '👤 Sommerso Recente — Scheda Completa', href: '/dm/mostri/sommersi', color: 'blue' }
      ]
    },
    {
      numero: '23',
      nome: 'L\'ufficio sommerso',
      tipo: 'Combattimento pesante — [COMPLETATA S5]',
      dimensioni: 'Stanza quadrata in muratura, acqua 2m + 3m fino al soffitto',
      percorso: 'Est',
      descrizione: 'Stanza quadrata in muratura. Il pavimento è sommerso da circa 3 metri di acqua ambrata — limpida, non fangosa, pregna di magia. Dal livello dell\'acqua al soffitto ci sono altri 2 metri di aria.\n\nSott\'acqua: una vecchia stanza amministrativa intatta — scrivanie, poltrone, librerie. Oggetti galleggianti (fogli, sedie, assi di legno) derivano lentamente nel liquido ambrato.\n\nUna passerella di legno, stabile, attraversa la stanza da Sud a Nord. Porta a una porta a Nord (verso Zona 22).\n\n⚠️ PROPRIETÀ DELL\'ACQUA AMBRATA:\n• Individuazione del Magico non funziona attraverso l\'acqua — la saturazione magica scherma tutto ciò che è sotto.\n• Qualsiasi incantesimo attivo su una creatura che tocca l\'acqua viene istantaneamente dissolto.\n• Immergersi richiede Saggio TS 14 vs panico (forza magica sopraffacente). Fallimento → catatonia fino a quando non si esce e si viene assistiti.',
      elementi: [
        '[S5] ONDATA 1 (turno 1): 2× Sommerso Recente, 1× Sommerso Completo, 1× Sommerso Esplosivo — emergono dall\'acqua salendo sulla passerella.',
        '[S5] ONDATA 2 (turno 2): 1× Sommerso Recente, 2× Sommerso Completo.',
        '[S5] ONDATA 3 (turno 3): 2× Sommerso Recente, 1× Sommerso Esplosivo.',
        'Schizzi corrosivi: quando un Sommerso viene colpito, rilascia liquido acido (1d4 acido a chi è adiacente). I PG lo hanno scoperto in questa sessione.',
        'Sommerso Esplosivo: alla morte deflagra in un raggio di 2m (3d6 acido, TS Des CD 14 per metà) + crea pozzanghera di acido sul pavimento (1d4/turno per chi vi rimane).',
        '[S5 — RACCOLTO] 92 Cristalli Minuscoli dai Sommersi sconfitti.',
        '[S5 — RACCOLTO] Loot subacqueo (recuperato da Fealer con pozione respiro): Bauletto prezioso (conteneva Chiave di Ferro a goccia), Bussola dorata con ago impazzito, Mappa del piano (sbiadita — stanze finali illeggibili), 2× Pozione di Guarigione, 4 Razioni rancide, Set attrezzi carpentiere, 4 Cristalli Minuscoli.'
      ],
      pericoli: '10 Sommersi totali su 3 ondate — [SCONFITTI in S5]',
      cristalli: '96 cristalli (92 dai Sommersi + 4 subacquei — tutti raccolti in S5)',
      favoreDivino: 'Tempus: sconfiggere tutti i Sommersi. Bonus: uso tattico passerella (+5%). Tymora: nessun PG trascinato in acqua.',
      noteDM: [
        '[S5] Stanza completamente esplorata e ripulita.',
        '[S5] Fealer è diventato catatonico al primo tuffo — recuperato da Valoris (Medicina). Al secondo tentativo (con sola forza di volontà, i buff vengono dissolti dall\'acqua) è riuscito a resistere.',
        '[S5] Fealer ha usato la Pozione per Respirare Sott\'Acqua comprata da Vex per la ricerca subacquea.',
        '[S5] Riven ha sofferto di Wild Magic in questa stanza (panico al primo lancio).',
        'La Chiave di Ferro a goccia trovata nel bauletto apre la serratura a forma di goccia nella parete Sud-Ovest della Zona 25 — dà accesso diretto alla Riserva Sigillata (Zona 26). NON è legata al portone della Zona 27.',
        'La bussola dorata con ago impazzito: l\'ago cerca ancora qualcosa. Non spiegare cosa — è un hook narrativo.'
      ],
      mostroLink: [
        { label: '👤 I Sommersi (3 varianti) — Scheda Completa', href: '/dm/mostri/sommersi', color: 'blue' }
      ]
    },
    {
      numero: '24',
      nome: 'Il Laboratorio Sommerso',
      tipo: 'Esplorazione + Lore + Ricompense',
      dimensioni: '5x4m',
      percorso: 'Est',
      opzionale: true,
      descrizione: 'Una porta di ferro sulla parete sud della Zona 23, chiusa con lucchetto di bronzo (Attrezzi da scasso CD 16). Oltre la porta, una stanza piccola relativamente asciutta.\n\nQuesta non era una stanza dei contrabbandieri. È più vecchia. Molto più vecchia.\n\nBanchi da lavoro di pietra con strumenti di vetro e bronzo troppo elaborati per dei contrabbandieri: alambicchi, crogioli, tubature di cristallo sottilissimo. Sul banco Ovest, un alambicco che distilla lentamente l\'acqua della pozza centrale. Il liquido distillato cade goccia a goccia in una fiala già piena per metà.',
      elementi: [
        'Alambicco attivo: Arcano CD 13 — incantato con Purify Food and Water potenziato. Fiala: 3 dosi "Essenza Purificata delle Profondità" — cura avvelenato + vantaggio TS veleno 1h. Su Sommerso: 3d6 danni radianti. 40 mo a dose.',
        'Banchi da lavoro: Investigare CD 14 — strumenti di fattura sconosciuta, vecchissimi. Componenti alchemici per 30 mo totali.',
        'Cassa 1: Vuota. Cassa 2: 2 Cristalli Minuscoli + 2 boccette inchiostro magico (10 mo ciascuna). Cassa 3: Pergamena di Misty Step (singolo uso)',
        'NODO DELLA TRAMA #5: L\'acqua nella pozza centrale ruota lentamente in senso antiorario — sempre, senza fermarsi.'
      ],
      pericoli: 'Nessuno diretto (la stanza è sicura)',
      cristalli: 'Nessuno',
      favoreDivino: 'Mystra: catalogare Nodo della Trama #5 (+20%). Bonus: studiare l\'alambicco (+5%)',
      noteDM: [
        'Chi ha costruito questo laboratorio? Perché distillavano l\'acqua delle fogne profonde?',
        'I contrabbandieri l\'hanno trovato e usato come deposito senza capirne il valore.',
        'L\'Essenza Purificata è un\'arma segreta contro il boss — premiate chi esplora.'
      ]
    },
    {
      numero: '25',
      nome: 'Il Collettore Centrale',
      tipo: 'Convergenza + Area di raccolta',
      dimensioni: '12m diametro esagonale, soffitto 7m',
      descrizione: 'I tre percorsi convergono in una vasta camera a pianta esagonale. Sei pilastri massicci sostengono la struttura. Al centro, un\'enorme griglia di ferro copre un pozzo senza fondo — l\'acqua vi precipita dentro con un rumore continuo e profondo.\n\nL\'aria è più fredda. Il rumore dell\'acqua è costante e ipnotico.\n\nSulla parete Sud, un grande portone blindato di ferro — chiuso. Ai lati del portone, due meccanismi incastonati nella pietra: due serrature a spirale, una per parte. Richiedono la Prima Chiave a Spirale (trovata in Zona 21 dopo aver girato la ruota) e la Seconda Chiave a Spirale (recuperata dal fondo del pozzo in Zona 22). Entrambe devono essere inserite contemporaneamente per sbloccare il portone verso la Zona 27.\n\nSulla parete Sud-Ovest, una porta più piccola con una serratura a forma di goccia d\'acqua. Richiede la Chiave di Ferro a goccia (trovata nel bauletto della Zona 23). Dà accesso alla Riserva Sigillata (Zona 26).',
      elementi: [
        'Il pozzo centrale: Percezione CD 14 — il rumore ha un ritmo, lo stesso della vasca nella Cisterna (Zona 16). Guardare dentro: scende almeno 20m, qualcosa in fondo emette luce tenue ambrata. Lanciare un oggetto: 3 secondi, poi silenzio. Nessun splash.',
        'Area di riposo: I PG possono riposare brevemente. Nessun nemico entra — i Sommersi e i Grick evitano questa stanza.',
        'Natura CD 13 (Fealer): "Le creature di questo piano evitano questo posto. Come se avessero paura di qualcosa qui sotto."',
        'Tesoro: Base pilastro (Percezione CD 13): 2 Cristalli Minuscoli + specchio d\'argento (10 mo). Tra le griglie: 1 Cristallo Minuscolo incastrato.'
      ],
      pericoli: 'Nessuno diretto (pozzo: 6d6 danni da caduta se qualcuno cade)',
      cristalli: 'Nessuno',
      favoreDivino: 'Nessuno',
      noteDM: [
        'Questa stanza è una pausa prima del boss. Lasciate che i giocatori si organizzino.',
        'Il pozzo che inghiotte acqua senza rumore e le creature che evitano la zona dovrebbero tenerli inquieti.'
      ]
    },
    {
      numero: '26',
      nome: 'La Riserva Sigillata',
      tipo: 'Tesoro speciale + Lore',
      dimensioni: '6m diametro',
      opzionale: true,
      descrizione: 'La porta con la serratura a goccia d\'acqua si apre con un click pesante. Una stanza circolare perfettamente asciutta — l\'unica stanza completamente asciutta dell\'intero Piano 2. L\'aria è secca e fredda. Le pareti sono lisce, levigate, senza scritte né decorazioni.\n\nOltre le quattro colonne di pietra che reggono il soffitto basso, al centro della stanza: un forziere.\n\nNon è il forziere di un ladro o di un contrabbandiere. È massiccio, lungo almeno due metri, di ferro nero intarsiato con simboli d\'acqua e onde stilizzate in bronzo antico — qualcosa che qualcuno ha costruito per durare secoli. Due serrature distinte: la più grande sul bordo superiore, la più piccola sul pannello frontale.\n\nQuesta stanza è stata sigillata intenzionalmente. Qualcuno voleva che ciò che conteneva restasse protetto dall\'acqua per sempre.',
      elementi: [
        'IL FORZIERE — Serratura superiore: si apre con la Chiave di Ferro dal Piano 1 (quella trovata al livello precedente). Serratura frontale: non si apre, appartiene a un sistema diverso.',
        'CONTENUTO DEL FORZIERE: 1 CRISTALLO GRANDE + 3 Cristalli Minuscoli, 2x Pozione di Guarigione Superiore (4d4+4), ANELLO DELLA RESISTENZA AI VELENI (Ring of Poison Resistance — raro, attunement, vantaggio TS veleno + resistenza danni veleno)',
        'IL CRISTALLO MERIDIANO — Tra i cristalli nel forziere, uno è diverso: lungo 15cm, blu ghiaccio, tagliato con sfaccettature impossibilmente precise. Al tatto, vibra impercettibilmente. Arcano CD 13: emette una risonanza debole — la stessa firma energetica delle anomalie acquatiche del dungeon. Natura CD 14 (Fealer): "Sento che risponde a qualcosa... come un\'eco. Come se cercasse qualcosa che non è qui." Proprietà: entro 9m da un Nodo della Trama o da un\'anomalia acquatica attiva, la vibrazione diventa percettibile e il cristallo emette luce tenue azzurra. Non è un\'arma — è uno strumento.',
        'Investigare CD 16 (il forziere): sul fondo, sotto un doppio fondo, una piccola placca di metallo incisa con lo stesso alfabeto sconosciuto dei pattern di Zona 18. Non è leggibile senza Comprehend Languages, ma è evidentemente non decorativa — sembra un\'istruzione.'
      ],
      pericoli: 'Nessuno',
      cristalli: '1 cristallo grande + 3 cristalli minuscoli (nel forziere)',
      favoreDivino: 'Mystra: identificare le proprietà del Cristallo Meridiano (+15%). Tymora: aprire la stanza e il forziere (due chiavi diverse trovate in due piani diversi — premiata la pazienza)',
      noteDM: [
        'Grande ricompensa per chi ha esplorato a fondo e conservato la Chiave di Ferro dal Piano 1.',
        'Il Cristallo Meridiano è uno strumento narrativo per i livelli successivi: segnalerà anomalie e Nodi della Trama automaticamente. Darà ai giocatori una ragione meccanica per esplorare anziché rushare.',
        'La placca con l\'alfabeto sconosciuto è lore pura — stessa grafia dei pattern di condensazione in Zona 18. Chi ci ha messo questo qui sapeva cose che i contrabbandieri non potevano sapere.',
        'Il Ring of Poison Resistance è molto utile contro il boss. Non è nascosto — è nel forziere aperto.'
      ]
    },
    {
      numero: '27',
      nome: 'La Tana della Matriarca',
      tipo: 'Boss fight',
      dimensioni: '18x14m, soffitto 10m',
      descrizione: 'Oltre il portone di ferro, una scalinata scende in una camera naturale vasta. Il soffitto raggiunge i 10m con stalattiti da cui gocciola acqua ambrata.\n\nPiattaforma superiore (ingresso): fascia di 3m lungo pareti Nord e Ovest, asciutta, elevata 1.5m.\nVasca centrale (70% della stanza): 1.2m d\'acqua ambrata densa e tiepida.\n\nAl centro della vasca, su un cumulo di detriti — una massa enorme. Alta 3 metri, una montagna di membrana traslucida pulsante attraverso cui si intravedono — fusi insieme — resti di corpi umani, attrezzi, armi, pezzi di cassa.\n\nÈ la MATRIARCA DEI SOMMERSI: la prima trasformata, la fonte da cui gli altri sono stati generati. Non è un leader. È una madre.',
      elementi: [
        'Ingresso: La Matriarca non attacca subito. La massa pulsa. Poi forma qualcosa che potrebbe essere un volto. Un gorgoglio basso che suona quasi come una parola. Quasi.',
        'FASE 1 — I Figli (Round 1-3): La Matriarca non si muove. Genera 1 Sommerso Recente/round (max 3). Ha RESISTENZA A TUTTI I DANNI (membrana intatta). Rompere membrana: 30 danni da fuoco cumulativi, OPPURE Essenza Purificata, OPPURE dopo 3 round passa automaticamente.',
        'FASE 2 — La Matriarca si Sveglia (Round 4+): Membrana rotta. Perde Resistenza. Attacca direttamente. Sommersi generati continuano a combattere.',
        'FASE 3 — Frenesia (sotto 50 PF): Pezzi cadono nell\'acqua → max 2 Sommersi Esplosivi. 1 attacco extra per round. L\'acqua nella stanza ribolla: 1d4 acido a inizio turno se in acqua.',
        'LA MAREA: Round pari → acqua +30cm (Matriarca ha vantaggio). Round dispari → acqua -30cm (più facile muoversi).',
        'Pannello chiuse: Se girata la ruota in Zona 21, pannello sulla parete Ovest è attivo → azione per forzare acqua BASSA per 2 round. Usabile 2 volte. (I PG che sono saliti nella colonna riconoscono immediatamente il meccanismo.)',
        'Vittoria: Ridurre a 0 PF, OPPURE 3 dosi di Essenza Purificata direttamente nella massa (3d6 radianti ciascuna + TS COS CD 15 o stordita 1 round)',
        'LOOT: Polvere DORATA. 2 cristalli grandi (100 eq. piccoli). 120 mo fuse in blocchi (4 blocchi da 5 kg). Spada corta +1 (lama con sfumatura ambrata — prima arma magica del dungeon). 3 gemme (ambra 30 mo, tormalina 20 mo, onice 15 mo). Medaglione dei contrabbandieri.'
      ],
      pericoli: 'Matriarca dei Sommersi (BOSS), 3-5 Sommersi generati, acqua che sale e scende, acido in Fase 3',
      cristalli: '2 cristalli grandi + ~40 piccoli (dai Sommersi generati)',
      favoreDivino: 'Tempus: sconfiggere la Matriarca (+30%). Bonus: nessun PG a 0 PF (+10%). Tymora: usare Essenza Purificata o pannello chiuse (+10%). Mystra: esaminare polvere dorata (Arcano CD 14) — stessa energia dell\'acqua ascendente (+10%)',
      statistiche: {
        nome: 'Matriarca dei Sommersi (BOSS)',
        valori: [
          'CA 16 (membrana compattata), PF 115 (13d10+39), Velocità 3m, nuotare 9m',
          'FOR 18 (+4) DES 6 (-2) COS 17 (+3) INT 4 (-3) SAG 10 (+0) CAR 3 (-4)',
          'TS: COS +6, SAG +3',
          'Immunità: veleno, acido | Resistenze: contundenti, freddo | Vulnerabilità: radianti',
          'Immunità condizioni: avvelenato, affascinato, esausto, prono, accecato',
          'Sensi: vista cieca 18m, tremosenso 9m | GdS 5 (1800 PE)',
          '--- TRATTI SPECIALI ---',
          'Membrana Protettiva (Fase 1): Resistenza a TUTTI i danni. Si rompe dopo 30 danni fuoco, Essenza Purificata, o 3 round.',
          'Madre degli Sommersi: Genera 1 Sommerso Recente/round come azione bonus (max 3 totali).',
          'Simbiosi Melmosa: Sommerso distrutto entro 9m → Matriarca recupera 5 PF.',
          'Rigenerazione Acquatica: +5 PF a inizio turno se in acqua. Interrotta da fuoco/radianti.',
          '--- AZIONI ---',
          'Multiattacco: 2 Tentacoli + 1 Onda d\'Urto. In Fase 3: +1 Tentacolo extra.',
          'Tentacolo Gelatinoso: +7, portata 3m, 11 (2d6+4) contundenti + 5 (2d4) acido. Taglia Media o inferiore → afferrato (CD fuga 14). Max 2 afferrati.',
          'Onda d\'Urto (Ricarica 5-6): Cono 6m, TS Forza CD 14 → 9 (2d8) contundenti + spostata 3m. Successo: metà, non spostata.',
          'Assorbimento (1/round, solo afferrati): TS Forza CD 15 → trattenuto nella membrana. 7 (2d6) acido/turno. Liberarsi: Atletica CD 15. Fuoco libera automaticamente.',
          '--- AZIONI LEGGENDARIE (2/round) ---',
          'Tentacolo (1 az.): Un attacco con Tentacolo.',
          'Generare Sommerso (2 az., 1/round, solo Fase 2+): Genera 1 Sommerso Recente (conta verso max 3).',
          '--- REAZIONE ---',
          'Scudo di Melma (1/round): Contro attacco a distanza, interpone tentacolo → svantaggio (se manca, danno negato).'
        ]
      },
      noteDM: [
        'La Matriarca NON È MALVAGIA. Non è cosciente. È una cosa creata dall\'ambiente. Descrivila con pietà oltre che con orrore.',
        'Il gorgoglio che sembra una parola? Non è una parola. Ma era una parola una volta.',
        'L\'acqua che sale e scende forza gestione posizionamento ogni round. Non lasciare che si piazzino sulla piattaforma e bombardino a distanza.',
        'Se il party ha Essenza Purificata + pannello chiuse + Spada d\'argento, il combattimento è impegnativo ma gestibile.',
        'Se il party è arrivato senza esplorare le opzionali, sarà brutale. Questo è intenzionale.'
      ],
      mostroLink: [
        { label: '👑 Matriarca dei Sommersi — Scheda Boss', href: '/dm/mostri/matriarca-sommersi', color: 'amber' },
        { label: '👤 I Sommersi (generati) — Scheda Completa', href: '/dm/mostri/sommersi', color: 'blue' }
      ]
    },
    {
      numero: '28',
      nome: 'La Scala per il Livello 3',
      tipo: 'Transizione',
      descrizione: 'Dopo la sconfitta della Matriarca, l\'acqua si ritira lentamente. Il livello scende fino a lasciare il pavimento quasi asciutto. Dove prima c\'era la vasca, una botola di pietra emerge — invisibile e inaccessibile fino ad ora.\n\nLa botola si apre facilmente. Sotto, una scala a chiocciola di pietra bianca — non nera come quella del Piano 1, ma bianca, pulita, quasi luminosa. L\'aria è fresca e pulita.\n\nDopo 5 metri, il velo magico brillante. La voce è diversa — leggermente più calda, quasi soddisfatta:\n\n"Secondo Livello Completato. Avanzate nelle profondità."',
      elementi: [
        'Zona sicura: nessuna creatura si avvicina',
        'I PG possono riposare brevemente prima di attraversare',
        'Il velo è monodirezionale — una volta attraversato, non possono tornare al Piano 2'
      ],
      pericoli: 'Nessuno',
      cristalli: 'Nessuno',
      favoreDivino: 'Nessuno',
      noteDM: [
        'La scala bianca è un contrasto deliberato dopo la cupa oppressione del Piano 2.',
        'Ma non è un buon segno — è il dungeon che diventa più strano, non più sicuro.',
        'Sotto il Piano 2 si arriva al boss dell\'Ecosistema 1 (Grolnek, l\'Otyugh Evoluto) e poi al Pianerottolo A.'
      ]
    }
  ];

  const riepilogoRisorse = {
    nodiTrama: {
      totale: 5,
      favorePerNodo: '20% Favore Mystra',
      locazioni: [
        'Zona 18 - Colonna d\'acqua ascendente (Arcano CD 14, 10 min studio)',
        'Zona 19 - Cristallo levitante nel sarcofago (opzionale)',
        'Zona 22 - Spirali d\'acqua nel pozzo (Arcano CD 12)',
        'Zona 23 - Bussola impazzita (Arcano CD 13)',
        'Zona 24 - Acqua rotante nel laboratorio (opzionale, Arcano CD 12)'
      ],
      bonus: [
        'Zona 18: Riven tocca l\'acqua e il party discute (+5%)',
        'Zona 24: Studiare l\'alambicco (+5%)',
        'Zona 26: Tradurre il libro in lingua sconosciuta (+10%)',
        'TOTALE MASSIMO MYSTRA: 120%'
      ]
    },
    cristalli: {
      totale: 270,
      minimo: 180,
      conversione: '1 grande = 50 piccoli, 1 medio = 10 piccoli',
      breakdown: [
        { nemico: 'Melma Tombale x2', stanza: '19 (opt.)', cristalli: 20, nota: 'Opzionale' },
        { nemico: 'Grick Acquatico x2', stanza: '20', cristalli: 30, nota: 'Percorso centrale' },
        { nemico: 'Sommerso Recente x1', stanza: '22', cristalli: 8, nota: 'Evitabile' },
        { nemico: 'Sommersi (ondata) x3-6', stanza: '23', cristalli: 59, nota: 'Parzialmente evitabile' },
        { nemico: 'Matriarca + Sommersi', stanza: '27', cristalli: 140, nota: 'Boss inevitabile (2 grandi + ~40 piccoli)' },
        { nemico: 'Colonna ascendente', stanza: '21', cristalli: 0, nota: 'Nessun cristallo (rimosso)' },
        { nemico: 'Forziere Riserva', stanza: '26 (opt.)', cristalli: 53, nota: 'Richiede Chiave Goccia (Zona 21) + Chiave Ferro Piano 1 (1 grande + 3 minuscoli)' }
      ]
    },
    oro: {
      obbligatorio: 'Nessun oro sparso — sostituito da Cristalli Minuscoli',
      completo: 'Gemme: ~165 mo | Oggetti: ~120 mo in oggetti vendibili',
      conRiserva: 'Boss loot: 120 mo in blocchi fusi',
      gemme: '~165 mo in gemme (rubino, agata, quarzo, ambra, tormalina, onice)',
      valoreEconomico: 'Valore economico concentrato in gemme, boss loot e oggetti speciali'
    },
    oggettiMagici: [
      'Spada corta +1 (dal boss) — prima arma magica del dungeon',
      'Ring of Poison Resistance (Zona 26, opzionale)',
      'Cristallo Meridiano — rileva anomalie acquatiche entro 9m (Zona 26, opzionale)',
      'Pergamena di Misty Step (Zona 24, opzionale)',
      'Pugnale d\'argento (Zona 19, opzionale)'
    ],
    consumabili: {
      pozioni: [
        '3x Guarigione (2d4+2) — Zone 20, 23',
        '1x Guarigione Superiore (4d4+4) — Zona 22',
        '2x Guarigione Superiore (4d4+4) — Zona 26 (opzionale)'
      ],
      alchimia: [
        'Antitossina x1 (Zona 17)',
        'Essenza Purificata x3-6 (Zone 24/26) — arma contro Sommersi e boss!',
        'Sale delle Profondità x3 (Zona 18) — 30 mo a dose o +1 CD abiurazione',
        'Muco di Grick x2 (Zona 20) — 15 mo ciascuna'
      ],
      razioni: ['4 razioni sigillate (Zona 23)']
    }
  };

  const favoreDivino = {
    tempus: {
      titolo: 'Conquista con il Sangue',
      azioni: [
        { fonte: 'Cristalli', condizione: 'Proporzionale al totale raccolto', favore: '0-50%' },
        { fonte: 'Boss sconfitto', condizione: 'Sconfiggere la Matriarca', favore: '30%' },
        { fonte: 'Boss pulito', condizione: 'Nessun PG a 0 PF durante boss fight', favore: '10%' },
        { fonte: 'Grick veloci', condizione: 'Grick sconfitti in <5 round', favore: '5%' },
        { fonte: 'Tattica superiore', condizione: 'Uso eccellente del terreno (DM)', favore: '5%' }
      ],
      totale: '100%'
    },
    tymora: {
      titolo: 'Fortuna e Rischio Calcolato',
      azioni: [
        { fonte: 'Correnti', condizione: 'Attraversare Zona 17 senza cadere in acqua', favore: '10%' },
        { fonte: 'Grick visti', condizione: 'Individuare entrambi i Grick prima dell\'attacco', favore: '15%' },
        { fonte: 'Salto di fede', condizione: 'Zona 21: primo PG entra nella colonna senza tentare scalate prima', favore: '10%' },
        { fonte: 'Accampamento pulito', condizione: 'Zona 22: trovare cassa senza attivare Sommerso', favore: '10%' },
        { fonte: 'Asciutti', condizione: 'Zona 23: nessun PG trascinato in acqua', favore: '15%' },
        { fonte: 'Boss creativo', condizione: 'Usare Essenza Purificata o pannello chiuse', favore: '10%' },
        { fonte: 'Segreti', condizione: 'Trovare passaggio nascosto 17↔22', favore: '10%' },
        { fonte: 'Sopravvivenza', condizione: 'Nessun PG a 0 PF nell\'intero piano', favore: '10%' },
        { fonte: 'Riserva', condizione: 'Aprire Zona 26 con la Chiave di Ferro a goccia (da Zona 23) e il forziere con la Chiave di Ferro dal Piano 1', favore: '10%' }
      ],
      totale: '100%'
    },
    mystra: {
      titolo: 'La Trama Sussurra',
      azioni: [
        { fonte: 'Nodo #1', condizione: 'Catalogare colonna d\'acqua (Zona 18)', favore: '20%' },
        { fonte: 'Nodo #2', condizione: 'Catalogare cristallo levitante (Zona 19)', favore: '20%' },
        { fonte: 'Nodo #3', condizione: 'Catalogare spirali pozzo (Zona 22)', favore: '20%' },
        { fonte: 'Nodo #4', condizione: 'Catalogare bussola impazzita (Zona 23)', favore: '20%' },
        { fonte: 'Nodo #5', condizione: 'Catalogare acqua rotante (Zona 24)', favore: '20%' },
        { fonte: 'Bonus: Riven', condizione: 'Riven tocca l\'acqua (Zona 18) — sia che superi o fallisca il TS Volontà + party discute', favore: '5%' },
        { fonte: 'Bonus: Alambicco', condizione: 'Studio dell\'alambicco (Zona 24)', favore: '5%' },
        { fonte: 'Bonus: Libro', condizione: 'Tradurre il diario (Zona 26)', favore: '10%' }
      ],
      totale: '120%'
    }
  };

  const creatureSommersi = [
    {
      nome: 'Sommerso Recente',
      tipo: 'Aberrazione Media, senza allineamento',
      valori: [
        'CA 8, PF 30 (4d8+12), Velocità 6m, nuotare 9m',
        'FOR 14 (+2) DES 6 (-2) COS 16 (+3) INT 3 (-4) SAG 6 (-2) CAR 3 (-4)',
        'Immunità danni: veleno | Resistenze: contundenti | Vulnerabilità: fuoco',
        'Immunità condizioni: avvelenato, affascinato, esausto',
        'Sensi: scurovisione 18m | GdS 1 (200 PE) | Cristalli: 8 piccoli',
        'Corpo Semi-Liquido: Danni contundenti dimezzati',
        'Schizzi Corrosivi: Attaccante in mischia entro 1.5m subisce 2 (1d4) acido',
        'Resilienza Melmosa: A 0 PF → TS COS (CD 5 + danno), successo = 1 PF. Non funziona vs fuoco/radianti.',
        'Affinità Acquatica: Vantaggio ad attacchi contro creature in acqua. Respira sott\'acqua.',
        'Pseudopodo Corrosivo: +4, 1.5m, 6 (1d8+2) contundenti + 3 (1d6) acido'
      ]
    },
    {
      nome: 'Sommerso Completo',
      tipo: 'Aberrazione Media, senza allineamento',
      valori: [
        'CA 10, PF 38 (5d8+15), Velocità 9m, nuotare 12m',
        'FOR 16 (+3) DES 10 (+0) COS 16 (+3) INT 2 (-4) SAG 8 (-1) CAR 2 (-4)',
        'Immunità danni: veleno, acido | Resistenze: contundenti | Vulnerabilità: fuoco, radianti',
        'Immunità condizioni: avvelenato, affascinato, esausto, prono',
        'Sensi: scurovisione 18m, vista cieca 9m | GdS 2 (450 PE) | Cristalli: 10 piccoli',
        'Corpo Semi-Liquido + Schizzi Corrosivi (1d6 acido) + Resilienza Melmosa + Affinità Acquatica (+ spazi stretti fino a 30cm)',
        'Trascinamento: Se colpisce con Pseudopodo → azione bonus per afferrare (Atletica vs Atletica/Acrobazia). Afferrato trascinato 1.5m/round verso acqua profonda.',
        'Multiattacco: 2 attacchi con Pseudopodo.',
        'Pseudopodo Corrosivo: +5, 1.5m, 7 (1d8+3) contundenti + 3 (1d6) acido'
      ]
    },
    {
      nome: 'Sommerso Esplosivo',
      tipo: 'Aberrazione Media, senza allineamento',
      valori: [
        'CA 7, PF 15 (2d8+6), Velocità 9m, nuotare 9m',
        'FOR 10 (+0) DES 8 (-1) COS 16 (+3) INT 1 (-5) SAG 4 (-3) CAR 1 (-5)',
        'Immunità danni: veleno, acido | Vulnerabilità: fuoco, perforanti',
        'Immunità condizioni: avvelenato, affascinato, esausto, prono',
        'Sensi: vista cieca 9m (cieco oltre) | GdS 1 (200 PE) | Cristalli: 15 piccoli',
        'Instabile: Danni da fuoco → esplode immediatamente.',
        'Detonazione (a 0 PF o come azione): Ogni creatura entro 3m → TS Destrezza CD 13 → 10 (3d6) acido, successo metà. Lascia pozza acido 3m raggio per 1 minuto (1d6 acido/turno).',
        'Pseudopodo Debole: +2, 1.5m, 4 (1d8) contundenti',
        'Tattiche DM: Kamikaze — corre verso gruppo più numeroso e si fa esplodere. Abbatterlo a distanza o col fuoco!'
      ]
    }
  ];

  const renderStanza = (stanza: Stanza) => (
    <div key={stanza.numero} className="bg-slate-700 border border-slate-600 rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-xl font-bold text-yellow-400">
            Zona {stanza.numero} - {stanza.nome}
            {stanza.opzionale && <span className="ml-2 text-xs bg-purple-700 text-purple-200 px-2 py-0.5 rounded">OPZIONALE</span>}
            {stanza.numero === '27' && <span className="ml-2 text-xs bg-red-700 text-red-200 px-2 py-0.5 rounded">BOSS</span>}
          </h4>
          <div className="text-sm text-slate-400 mt-1">
            {stanza.tipo}
            {stanza.dimensioni && ` • ${stanza.dimensioni}`}
            {stanza.percorso && <span className="ml-2 text-xs bg-slate-600 px-2 py-0.5 rounded text-cyan-300">Percorso {stanza.percorso}</span>}
          </div>
        </div>
        <button
          onClick={() => setStanzaSelezionata(stanzaSelezionata === stanza.numero ? null : stanza.numero)}
          className="text-blue-400 hover:text-blue-300 text-sm px-3 py-1 bg-slate-800 rounded"
        >
          {stanzaSelezionata === stanza.numero ? 'Nascondi' : 'Espandi'}
        </button>
      </div>

      {stanzaSelezionata === stanza.numero && (
        <div className="space-y-3 text-sm mt-4">
          <div className="bg-slate-800 border border-slate-600 rounded p-3">
            <span className="font-semibold text-blue-300">Descrizione:</span>
            <p className="text-slate-300 mt-1 leading-relaxed whitespace-pre-line">{stanza.descrizione}</p>
          </div>

          <div className="bg-slate-800 border border-slate-600 rounded p-3">
            <span className="font-semibold text-emerald-300">Elementi:</span>
            <ul className="mt-2 space-y-2">
              {stanza.elementi.map((elemento, i) => (
                <li key={i} className="text-slate-300 leading-relaxed pl-4 border-l-2 border-emerald-700">
                  {elemento}
                </li>
              ))}
            </ul>
          </div>

          {stanza.pericoli && (
            <div className="bg-red-900/20 border border-red-700 rounded p-3">
              <span className="font-semibold text-red-400">Pericoli:</span>
              <p className="text-slate-300 mt-1">{stanza.pericoli}</p>
            </div>
          )}

          {stanza.cristalli && (
            <div className="bg-purple-900/20 border border-purple-700 rounded p-3">
              <span className="font-semibold text-purple-400">Cristalli:</span>
              <p className="text-slate-300 mt-1">{stanza.cristalli}</p>
            </div>
          )}

          {stanza.favoreDivino && (
            <div className="bg-yellow-900/20 border border-yellow-700 rounded p-3">
              <span className="font-semibold text-yellow-400">Favore Divino:</span>
              <p className="text-slate-300 mt-1">{stanza.favoreDivino}</p>
            </div>
          )}

          {stanza.statistiche && (
            <div className="bg-orange-900/20 border border-orange-700 rounded p-3">
              <span className="font-semibold text-orange-400">{stanza.statistiche.nome}:</span>
              <ul className="mt-2 space-y-1">
                {stanza.statistiche.valori.map((valore, i) => (
                  <li key={i} className={`text-slate-300 text-xs ${valore.startsWith('---') ? 'font-bold text-red-400 mt-2' : ''}`}>
                    {valore.startsWith('---') ? valore.replace(/---/g, '').trim() : `• ${valore}`}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {stanza.noteDM && stanza.noteDM.length > 0 && (
            <div className="bg-slate-900 border-2 border-slate-600 rounded p-3">
              <span className="font-semibold text-slate-400">Note DM:</span>
              <ul className="mt-2 space-y-1">
                {stanza.noteDM.map((nota, i) => (
                  <li key={i} className="text-slate-400 italic text-xs leading-relaxed">• {nota}</li>
                ))}
              </ul>
            </div>
          )}

          {stanza.mostroLink && stanza.mostroLink.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {stanza.mostroLink.map((link, i) => {
                const colorMap: Record<string, string> = {
                  green: 'bg-green-900 hover:bg-green-800 text-green-200 border-green-700',
                  cyan: 'bg-cyan-900 hover:bg-cyan-800 text-cyan-200 border-cyan-700',
                  blue: 'bg-blue-900 hover:bg-blue-800 text-blue-200 border-blue-700',
                  amber: 'bg-amber-900 hover:bg-amber-800 text-amber-200 border-amber-700',
                  red: 'bg-red-900 hover:bg-red-800 text-red-200 border-red-700',
                };
                const cls = colorMap[link.color ?? 'blue'] ?? colorMap.blue;
                return (
                  <a
                    key={i}
                    href={link.href}
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded border transition-colors ${cls}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border-2 border-cyan-700 rounded-xl p-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-cyan-400 mb-2">
              ECOSISTEMA 1 - Piano 2
            </h1>
            <p className="text-2xl text-yellow-400">{livello2.nome}</p>
            <p className="text-lg text-slate-300 mt-1">Guida Completa DM - {livello2.tema}</p>
          </div>
          <div className="bg-slate-800 rounded-lg px-6 py-3 border border-cyan-500">
            <div className="text-sm text-slate-400">Livello Consigliato</div>
            <div className="text-4xl font-bold text-cyan-400">{livello2.livelloConsigliato}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">Stanze Totali</div>
            <div className="text-lg font-bold text-yellow-400">{livello2.stanzeTotali}</div>
          </div>
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">Durata Stimata</div>
            <div className="text-lg font-bold text-orange-400">{livello2.durataStimata}</div>
          </div>
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">Layout</div>
            <div className="text-lg font-bold text-purple-400">Hub + 3 Percorsi</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['panoramica', 'mappa', 'stanze', 'mostri', 'risorse', 'favore-divino', 'note-dm'].map((sezione) => (
          <button
            key={sezione}
            onClick={() => setSezioneAperta(sezione)}
            className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              sezioneAperta === sezione
                ? 'bg-cyan-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {sezione === 'panoramica' && 'Panoramica'}
            {sezione === 'mappa' && 'Mappa'}
            {sezione === 'stanze' && 'Stanze'}
            {sezione === 'mostri' && 'Mostri'}
            {sezione === 'risorse' && 'Risorse'}
            {sezione === 'favore-divino' && 'Favore Divino'}
            {sezione === 'note-dm' && 'Note DM'}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      {sezioneAperta === 'panoramica' && (
        <div className="space-y-6">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Tema Generale</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Le fogne profonde di Waterdeep sono un ecosistema attivo e ostile, radicalmente diverso dalle fogne superiori.
              L'acqua qui non è stagnante — si muove, pulsa, e in certi punti si comporta in modo innaturale.
              Le tracce dei contrabbandieri del Piano 1 conducono a un accampamento più grande, ma chi vi abitava non è più umano.
            </p>

            <h3 className="text-xl font-bold text-blue-400 mb-3 mt-6">Caratteristiche Distintive</h3>
            <ul className="space-y-2">
              {livello2.caratteristiche.map((car, i) => (
                <li key={i} className="text-slate-300 pl-4 border-l-2 border-blue-700">• {car}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-purple-400 mb-3 mt-6">Layout e Percorsi</h3>
            <p className="text-slate-300 mb-3">{livello2.layout} — I percorsi possono essere esplorati in qualsiasi ordine. Un passaggio nascosto collega il percorso Ovest a quello Est.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {livello2.percorsi.map((percorso, i) => (
                <div key={i} className="bg-slate-700 rounded p-4">
                  <h4 className="font-bold text-emerald-400 mb-2">{percorso.nome}</h4>
                  <p className="text-sm text-slate-300">{percorso.descrizione}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-orange-400 mb-3 mt-6">Rapporto Attività</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-700 rounded p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">35%</div>
                <div className="text-sm text-slate-400 mt-1">Esplorazione</div>
              </div>
              <div className="bg-slate-700 rounded p-4 text-center">
                <div className="text-3xl font-bold text-red-400">40%</div>
                <div className="text-sm text-slate-400 mt-1">Combattimento</div>
              </div>
              <div className="bg-slate-700 rounded p-4 text-center">
                <div className="text-3xl font-bold text-purple-400">25%</div>
                <div className="text-sm text-slate-400 mt-1">Puzzle/Sfide</div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-red-400 mb-3 mt-6">Differenze dal Piano 1</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-2 text-left text-slate-400">Aspetto</th>
                    <th className="p-2 text-left text-cyan-400">Piano 1</th>
                    <th className="p-2 text-left text-amber-400">Piano 2</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-t border-slate-600"><td className="p-2 font-semibold">Layout</td><td className="p-2">Lineare (Y-shape)</td><td className="p-2">Circolare, interconnesso</td></tr>
                  <tr className="border-t border-slate-600"><td className="p-2 font-semibold">Luce</td><td className="p-2">Buio, torce funzionano</td><td className="p-2">Zone dove le torce si affievoliscono</td></tr>
                  <tr className="border-t border-slate-600"><td className="p-2 font-semibold">Acqua</td><td className="p-2">Stagnante, ostacolo passivo</td><td className="p-2">Correnti attive, comportamento anomalo</td></tr>
                  <tr className="border-t border-slate-600"><td className="p-2 font-semibold">Nemici</td><td className="p-2">Bestie e parassiti</td><td className="p-2">Creature mutate dall'ambiente</td></tr>
                  <tr className="border-t border-slate-600"><td className="p-2 font-semibold">Atmosfera</td><td className="p-2">Fogne abbandonate</td><td className="p-2">Fogne che qualcosa sta usando</td></tr>
                  <tr className="border-t border-slate-600"><td className="p-2 font-semibold">Trappole</td><td className="p-2">Ambientali naturali</td><td className="p-2">Deliberate, piazzate da qualcuno</td></tr>
                  <tr className="border-t border-slate-600"><td className="p-2 font-semibold">Navigazione</td><td className="p-2">Impossibile perdersi</td><td className="p-2">Rischio di girare in tondo</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'mappa' && (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Mappa Concettuale del Livello 2</h2>
          <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm text-slate-300 overflow-x-auto">
            <pre className="leading-relaxed">{`                     [15-DISCESA UMIDA]
                            |
                  [16-GRANDE CISTERNA]  <-- HUB CENTRALE
                 /          |          \\
      [17-CORRENTI     [20-GALLERIA    [22-AVAMPOSTO
        INVERSE]       DEI GRICK]      ABBANDONATO]
           |                |                |
      [18-ACQUA        [21-SALA         [23-ACCAMPAMENTO
      ASCENDENTE]      DELLE CHIUSE]     DEI SOMMERSI]
           |                |                |
      [19-CRIPTA       (shortcut        [24-LABORATORIO
      ALLAGATA]         18↔22)           SOMMERSO]
      opzionale                          opzionale
           \\                |               /
             \\              |              /
               [25-COLLETTORE CENTRALE]
                          |
                 [26-RISERVA SIGILLATA]
                   opzionale (chiave)
                          |
                 [27-TANA DELLA MATRIARCA]
                        BOSS
                          |
                 [28-SCALA PER IL LIVELLO 3]`}</pre>
          </div>
          <div className="mt-4 space-y-3">
            <div className="bg-blue-900/20 border border-blue-700 rounded p-4">
              <p className="text-slate-300 text-sm">
                <strong className="text-blue-400">Passaggio nascosto (18-22):</strong> Un tunnel parzialmente allagato collega
                la Camera dell'Acqua Ascendente alla Quadra Nord. Percezione CD 16 per trovarlo da entrambi i lati.
              </p>
            </div>
            <div className="bg-amber-900/20 border border-amber-700 rounded p-4">
              <p className="text-slate-300 text-sm">
                <strong className="text-amber-400">Nota:</strong> La Zona 16 (Grande Cisterna) è l'hub centrale dove i giocatori arrivano
                scendendo le scale dal Piano 1. Da qui devono scegliere quale percorso esplorare per primo.
              </p>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'stanze' && (
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Dettaglio Stanze - Livello 2
          </h2>
          <p className="text-slate-400 mb-6">
            Clicca su una stanza per espandere i dettagli completi. Le stanze sono organizzate per percorso.
          </p>

          {/* Entrata */}
          <h3 className="text-lg font-bold text-slate-300 mb-3 mt-6 border-b border-slate-600 pb-2">Ingresso</h3>
          {stanzeL2.filter(s => ['15', '16'].includes(s.numero)).map(renderStanza)}

          {/* Percorso Ovest */}
          <h3 className="text-lg font-bold text-cyan-400 mb-3 mt-6 border-b border-cyan-700 pb-2">Percorso Ovest — Correnti</h3>
          {stanzeL2.filter(s => s.percorso === 'Ovest').map(renderStanza)}

          {/* Percorso Centrale */}
          <h3 className="text-lg font-bold text-orange-400 mb-3 mt-6 border-b border-orange-700 pb-2">Percorso Centrale — Galleria</h3>
          {stanzeL2.filter(s => s.percorso === 'Centrale').map(renderStanza)}

          {/* Percorso Est */}
          <h3 className="text-lg font-bold text-red-400 mb-3 mt-6 border-b border-red-700 pb-2">Percorso Est — Accampamento</h3>
          {stanzeL2.filter(s => s.percorso === 'Est').map(renderStanza)}

          {/* Convergenza e Boss */}
          <h3 className="text-lg font-bold text-yellow-400 mb-3 mt-6 border-b border-yellow-700 pb-2">Convergenza e Boss</h3>
          {stanzeL2.filter(s => ['25', '26', '27', '28'].includes(s.numero)).map(renderStanza)}
        </div>
      )}

      {sezioneAperta === 'mostri' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Mostri del Dungeon - Livello 2</h2>

          {/* I Sommersi - Lore */}
          <div className="bg-gradient-to-r from-amber-900/30 to-cyan-900/30 border border-amber-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-amber-400 mb-4">I Sommersi — Nuova Creatura</h3>
            <div className="bg-slate-800 rounded p-4 mb-4">
              <h4 className="font-semibold text-slate-300 mb-2">Lore</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                I contrabbandieri che operavano nelle fogne profonde vi sono rimasti troppo a lungo.
                L'acqua corrotta li ha trasformati lentamente. Prima la pelle si è fatta traslucida.
                Poi le ossa si sono ammorbidite. Infine i pensieri se ne sono andati.
                I Sommersi sono ciò che rimane: figure vagamente umanoidi tenute insieme da una membrana gelatinosa traslucida.
              </p>
            </div>
            <div className="bg-slate-800 rounded p-4">
              <h4 className="font-semibold text-slate-300 mb-2">Aspetto</h4>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• <strong>Corpo:</strong> Sagoma umanoide sbagliata — proporzioni distorte, arti troppo lunghi</li>
                <li>• <strong>Pelle:</strong> Traslucida, gelatinosa, si intravedono organi scuri</li>
                <li>• <strong>Movimenti:</strong> Fluidi e innaturali, come se l'aria fosse acqua</li>
                <li>• <strong>Suono:</strong> Gorgoglio umido costante</li>
                <li>• <strong>Odore:</strong> Acqua di fogna concentrata, dolciastro e nauseante</li>
              </ul>
            </div>
          </div>

          {/* Stat blocks */}
          {creatureSommersi.map((creatura, idx) => (
            <div key={idx} className="bg-slate-800 border border-red-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-red-400">{creatura.nome}</h3>
                <a href="/dm/mostri/sommersi" className="text-xs bg-blue-800 hover:bg-blue-700 text-blue-200 px-2 py-1 rounded transition-colors">
                  📄 Scheda Completa
                </a>
              </div>
              <p className="text-sm text-slate-500 italic mb-4">{creatura.tipo}</p>
              <ul className="space-y-1">
                {creatura.valori.map((v, i) => (
                  <li key={i} className="text-slate-300 text-xs">• {v}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Grick e Melme */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Altre Creature</h3>
            <div className="space-y-3">
              <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🐙</span>
                  <div>
                    <h4 className="font-bold text-slate-200">2 Grick Acquatici</h4>
                    <p className="text-sm text-slate-400">Zona 20 - La Galleria dei Grick (Percorso Centrale)</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-red-400 mb-1">Resistenti a danni non magici!</div>
                  <div className="text-xs text-purple-400 mb-2">30 cristalli</div>
                  <a href="/dm/mostri/grick-acquatico" className="text-xs bg-cyan-800 hover:bg-cyan-700 text-cyan-200 px-2 py-1 rounded transition-colors">
                    📄 Scheda Mostro
                  </a>
                </div>
              </div>
              <div className="bg-slate-700 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🫧</span>
                  <div>
                    <h4 className="font-bold text-slate-200">2 Melme Tombali (CR 3)</h4>
                    <p className="text-sm text-slate-400">Zona 19 - La Cripta Allagata (Opzionale)</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-orange-400 mb-1">Corrodono metallo E legno!</div>
                  <div className="text-xs text-purple-400 mb-2">20 cristalli</div>
                  <a href="/dm/mostri/melma-tombale" className="text-xs bg-green-800 hover:bg-green-700 text-green-200 px-2 py-1 rounded transition-colors">
                    📄 Scheda Mostro
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Link pagine mostro */}
          <div className="bg-slate-800 border border-cyan-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">📄 Schede Mostro Complete</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a href="/dm/mostri/melma-tombale" className="bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-colors block">
                <div className="text-2xl mb-2">🫧</div>
                <div className="font-bold text-green-400 text-sm">Melma Tombale</div>
                <div className="text-xs text-slate-400">CR 3 | Zona 19 | Custom</div>
              </a>
              <a href="/dm/mostri/grick-acquatico" className="bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-colors block">
                <div className="text-2xl mb-2">🐙</div>
                <div className="font-bold text-cyan-400 text-sm">Grick Acquatico</div>
                <div className="text-xs text-slate-400">CR 2 | Zona 20</div>
              </a>
              <a href="/dm/mostri/sommersi" className="bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-colors block">
                <div className="text-2xl mb-2">👤</div>
                <div className="font-bold text-blue-400 text-sm">I Sommersi</div>
                <div className="text-xs text-slate-400">3 varianti | Zone 22-23-27</div>
              </a>
              <a href="/dm/mostri/matriarca-sommersi" className="bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-colors block border-2 border-amber-700">
                <div className="text-2xl mb-2">👑</div>
                <div className="font-bold text-amber-400 text-sm">Matriarca dei Sommersi</div>
                <div className="text-xs text-slate-400">CR 5 | BOSS | Zona 27</div>
                <div className="text-xs text-red-400 mt-1">3 Fasi + Azioni Leggendarie</div>
              </a>
            </div>
          </div>

          {/* Boss Link */}
          <div className="bg-gradient-to-r from-amber-900/40 to-red-900/40 border-2 border-amber-600 rounded-lg p-6">
            <h3 className="text-xl font-bold text-amber-400 mb-3">👑 Boss della Boss Fight</h3>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-slate-200">Matriarca dei Sommersi</h4>
                <p className="text-sm text-slate-400">GdS 5 | 115 PF | 3 Fasi | Azioni Leggendarie</p>
                <p className="text-xs text-red-400 mt-1">Zona 27 — La Tana della Matriarca</p>
              </div>
              <a href="/dm/mostri/matriarca-sommersi" className="bg-amber-700 hover:bg-amber-600 text-amber-100 px-4 py-2 rounded font-semibold transition-colors text-sm">
                📄 Scheda Boss Completa
              </a>
            </div>
          </div>

          {/* Riepilogo */}
          <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 border border-red-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">Riepilogo Combattimenti</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-800 rounded p-3 text-center">
                <div className="text-2xl font-bold text-red-400">5+</div>
                <div className="text-sm text-slate-400">Incontri totali</div>
              </div>
              <div className="bg-slate-800 rounded p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400">~270</div>
                <div className="text-sm text-slate-400">Cristalli equivalenti max</div>
              </div>
              <div className="bg-slate-800 rounded p-3 text-center">
                <div className="text-2xl font-bold text-amber-400">GdS 5</div>
                <div className="text-sm text-slate-400">Boss: Matriarca</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'risorse' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Riepilogo Risorse e Ricompense</h2>

          {/* Nodi della Trama */}
          <div className="bg-slate-800 border border-blue-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Nodi della Trama (equivalente Tomi di Mystra)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Totale Disponibile</div>
                <div className="text-2xl font-bold text-blue-400">{riepilogoRisorse.nodiTrama.totale} nodi</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Favore per Nodo</div>
                <div className="text-2xl font-bold text-purple-400">{riepilogoRisorse.nodiTrama.favorePerNodo}</div>
              </div>
            </div>
            <div className="bg-slate-700 rounded p-4 mb-4">
              <h4 className="font-semibold text-yellow-400 mb-2">Locazioni:</h4>
              <ul className="space-y-1 text-sm">
                {riepilogoRisorse.nodiTrama.locazioni.map((loc, i) => (
                  <li key={i} className="text-slate-300">• {loc}</li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-900/20 border border-blue-700 rounded p-4">
              <h4 className="font-semibold text-blue-400 mb-2">Bonus Mystra aggiuntivi:</h4>
              <ul className="space-y-1 text-sm">
                {riepilogoRisorse.nodiTrama.bonus.map((b, i) => (
                  <li key={i} className="text-slate-300">• {b}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cristalli */}
          <div className="bg-slate-800 border border-purple-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Cristalli Totali Disponibili</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Totale Equivalente</div>
                <div className="text-3xl font-bold text-purple-400">~{riepilogoRisorse.cristalli.totale}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Minimo Garantito</div>
                <div className="text-3xl font-bold text-emerald-400">~{riepilogoRisorse.cristalli.minimo}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Conversione</div>
                <div className="text-sm font-bold text-yellow-400 mt-1">{riepilogoRisorse.cristalli.conversione}</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-2 text-left text-purple-400">Nemico</th>
                    <th className="p-2 text-left text-purple-400">Stanza</th>
                    <th className="p-2 text-center text-purple-400">Cristalli eq.</th>
                    <th className="p-2 text-left text-purple-400">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {riepilogoRisorse.cristalli.breakdown.map((item, i) => (
                    <tr key={i} className="border-t border-slate-600">
                      <td className="p-2 text-slate-300">{item.nemico}</td>
                      <td className="p-2 text-slate-300">{item.stanza}</td>
                      <td className="p-2 text-center text-yellow-400 font-bold">{item.cristalli}</td>
                      <td className="p-2 text-slate-400 text-xs">{item.nota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Oro */}
          <div className="bg-slate-800 border border-yellow-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Oro e Tesori</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Percorso Obbligatorio</div>
                <div className="text-xl font-bold text-yellow-400">{riepilogoRisorse.oro.obbligatorio}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Completo con Opzionali</div>
                <div className="text-xl font-bold text-emerald-400">{riepilogoRisorse.oro.completo}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Con Riserva Sigillata</div>
                <div className="text-xl font-bold text-cyan-400">{riepilogoRisorse.oro.conRiserva}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Gemme</div>
                <div className="text-xl font-bold text-purple-400">{riepilogoRisorse.oro.gemme}</div>
              </div>
              <div className="bg-red-900/30 border border-red-700 rounded p-3 col-span-2">
                <div className="text-sm text-slate-400">VALORE ECONOMICO TOTALE</div>
                <div className="text-2xl font-bold text-red-400">{riepilogoRisorse.oro.valoreEconomico}</div>
              </div>
            </div>
          </div>

          {/* Oggetti Magici */}
          <div className="bg-slate-800 border border-amber-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Oggetti Magici / Speciali</h3>
            <ul className="space-y-2">
              {riepilogoRisorse.oggettiMagici.map((obj, i) => (
                <li key={i} className="text-slate-300 pl-4 border-l-2 border-amber-700">• {obj}</li>
              ))}
            </ul>
          </div>

          {/* Consumabili */}
          <div className="bg-slate-800 border border-emerald-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">Consumabili</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-700 rounded p-4">
                <h4 className="font-semibold text-red-400 mb-2">Pozioni</h4>
                <ul className="space-y-1 text-xs">
                  {riepilogoRisorse.consumabili.pozioni.map((p, i) => (
                    <li key={i} className="text-slate-300">• {p}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-700 rounded p-4">
                <h4 className="font-semibold text-cyan-400 mb-2">Alchimia</h4>
                <ul className="space-y-1 text-xs">
                  {riepilogoRisorse.consumabili.alchimia.map((a, i) => (
                    <li key={i} className="text-slate-300">• {a}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-700 rounded p-4">
                <h4 className="font-semibold text-yellow-400 mb-2">Razioni</h4>
                <ul className="space-y-1 text-xs">
                  {riepilogoRisorse.consumabili.razioni.map((r, i) => (
                    <li key={i} className="text-slate-300">• {r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'favore-divino' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Sistema Favore Divino - Piano 2</h2>

          {/* Tempus */}
          <div className="bg-slate-800 border-l-4 border-red-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-3">TEMPUS - {favoreDivino.tempus.titolo}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-2 text-left text-red-400">Fonte</th>
                    <th className="p-2 text-left text-red-400">Condizione</th>
                    <th className="p-2 text-center text-red-400">Favore %</th>
                  </tr>
                </thead>
                <tbody>
                  {favoreDivino.tempus.azioni.map((az, i) => (
                    <tr key={i} className="border-t border-slate-600">
                      <td className="p-2 text-slate-300 font-semibold">{az.fonte}</td>
                      <td className="p-2 text-slate-400 text-xs">{az.condizione}</td>
                      <td className="p-2 text-center text-red-400 font-bold">{az.favore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 bg-red-900/20 border border-red-700 rounded p-3">
              <p className="text-sm text-slate-300"><strong className="text-red-400">TOTALE POSSIBILE:</strong> {favoreDivino.tempus.totale}</p>
            </div>
          </div>

          {/* Tymora */}
          <div className="bg-slate-800 border-l-4 border-yellow-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">TYMORA - {favoreDivino.tymora.titolo}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-2 text-left text-yellow-400">Azione</th>
                    <th className="p-2 text-left text-yellow-400">Condizione</th>
                    <th className="p-2 text-center text-yellow-400">Favore %</th>
                  </tr>
                </thead>
                <tbody>
                  {favoreDivino.tymora.azioni.map((az, i) => (
                    <tr key={i} className="border-t border-slate-600">
                      <td className="p-2 text-slate-300 font-semibold">{az.fonte}</td>
                      <td className="p-2 text-slate-400 text-xs">{az.condizione}</td>
                      <td className="p-2 text-center text-yellow-400 font-bold">{az.favore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 bg-yellow-900/20 border border-yellow-700 rounded p-3">
              <p className="text-sm text-slate-300"><strong className="text-yellow-400">TOTALE POSSIBILE:</strong> {favoreDivino.tymora.totale}</p>
            </div>
          </div>

          {/* Mystra */}
          <div className="bg-slate-800 border-l-4 border-blue-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-3">MYSTRA - {favoreDivino.mystra.titolo}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-2 text-left text-blue-400">Fonte</th>
                    <th className="p-2 text-left text-blue-400">Condizione</th>
                    <th className="p-2 text-center text-blue-400">Favore %</th>
                  </tr>
                </thead>
                <tbody>
                  {favoreDivino.mystra.azioni.map((az, i) => (
                    <tr key={i} className="border-t border-slate-600">
                      <td className="p-2 text-slate-300 font-semibold">{az.fonte}</td>
                      <td className="p-2 text-slate-400 text-xs">{az.condizione}</td>
                      <td className="p-2 text-center text-blue-400 font-bold">{az.favore}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 bg-blue-900/20 border border-blue-700 rounded p-3">
              <p className="text-sm text-slate-300"><strong className="text-blue-400">TOTALE POSSIBILE:</strong> {favoreDivino.mystra.totale}</p>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'note-dm' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Note per il Dungeon Master</h2>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Timing e Ritmo</h3>
            <div className="space-y-3 text-slate-300 text-sm">
              <p><strong className="text-yellow-400">Durata stimata totale:</strong> 3.5-5 ore</p>
              <div className="bg-slate-700 rounded p-3">
                <h4 className="font-semibold text-emerald-400 mb-2">Breakdown per sezione:</h4>
                <ul className="space-y-1">
                  <li>• Zone 15-16 (introduzione + hub): 20-30 min</li>
                  <li>• Un percorso completo: 40-60 min ciascuno</li>
                  <li>• Boss fight: 45-60 min</li>
                  <li>• Stanze opzionali: 15-25 min ciascuna</li>
                  <li>• Transizione finale: 5-10 min</li>
                </ul>
              </div>
              <div className="bg-blue-900/20 border border-blue-700 rounded p-3">
                <h4 className="font-semibold text-blue-400 mb-2">Regola dei Tre Percorsi:</h4>
                <ul className="space-y-1">
                  <li>• <strong>Tutti e tre:</strong> massima ricompensa, massimo rischio, 4-5 ore</li>
                  <li>• <strong>Due su tre:</strong> buon bilancio, 3-3.5 ore</li>
                  <li>• <strong>Uno e corsa al boss:</strong> minima ricompensa, più veloce</li>
                  <li>• <strong>Percorso Centrale quasi obbligatorio</strong> — sblocca il pannello chiuse nella boss room</li>
                  <li>• <strong>Percorso Est = miglior loot</strong>, <strong>Percorso Ovest = miglior lore</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-purple-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Atmosfera</h3>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="bg-slate-700 rounded p-3">
                <h4 className="font-semibold text-yellow-400 mb-2">Tono del Piano 2:</h4>
                <ul className="space-y-1">
                  <li>• <strong>Umido, caldo, oppressivo</strong> — come essere all'interno di qualcosa di vivo</li>
                  <li>• L'acqua è il nemico silenzioso — ovunque, fa cose che non dovrebbe fare</li>
                  <li>• I Sommersi non sono "cattivi" — sono vittime. Descrivili con orrore MA anche con tristezza</li>
                  <li>• Le torce che si affievoliscono: tool narrativo, non meccanico</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-slate-700 rounded p-3">
                  <h4 className="font-semibold text-cyan-400 mb-2">Suoni</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Gocciolamento con ritmo (come battito)</li>
                    <li>• Gorgoglii dall'acqua</li>
                    <li>• Echi metallici dalle tubature</li>
                  </ul>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <h4 className="font-semibold text-amber-400 mb-2">Odori</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Acqua stagnante concentrata</li>
                    <li>• Dolciastro chimico</li>
                    <li>• Metallo freddo e ossidato</li>
                  </ul>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <h4 className="font-semibold text-red-400 mb-2">Visivo</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Muschio azzurro-viola (non verde)</li>
                    <li>• Torce con fiamma azzurra</li>
                    <li>• Acqua ambrata</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-orange-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-400 mb-4">Scaling</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-red-900/20 border border-red-700 rounded p-3">
                <h4 className="font-semibold text-red-400 mb-2">Se il party è troppo forte:</h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  <li>• Aggiungi 1 Grick nella Zona 20 (3 totali)</li>
                  <li>• Aumenta PF Matriarca a 135</li>
                  <li>• Sommersi Zona 23 emergono tutti insieme</li>
                  <li>• Esplosivo potenziato: 4d6 invece di 3d6</li>
                </ul>
              </div>
              <div className="bg-green-900/20 border border-green-700 rounded p-3">
                <h4 className="font-semibold text-green-400 mb-2">Se il party è in difficoltà:</h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  <li>• Riduci Sommersi Zona 23 a 4 (rimuovi Esplosivo)</li>
                  <li>• La Matriarca non rigenera PF</li>
                  <li>• Aggiungi Pozione nel Collettore (Zona 25)</li>
                  <li>• Pannello chiuse usabile 3 volte</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">Errori Comuni da Evitare</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-800 rounded p-3">
                <strong>Non spiegare le anomalie</strong><br />
                <span className="text-xs text-slate-400">Nessun check dovrebbe spiegare perché l'acqua sale. Non ci sono risposte al Piano 2. Solo domande.</span>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <strong>Non fare i Sommersi come zombie generici</strong><br />
                <span className="text-xs text-slate-400">Movimenti fluidi, non rigidi. Non grugniscono — gorgogliano. Non mordono — corrodono.</span>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <strong>Non rendere il boss un sacco di PF</strong><br />
                <span className="text-xs text-slate-400">La Matriarca è interessante per le fasi e le meccaniche, non per il DPS.</span>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <strong>Non dimenticare il passaggio segreto</strong><br />
                <span className="text-xs text-slate-400">Il collegamento Zona 17-22 è una scorciatoia importante. Premia l'esplorazione.</span>
              </div>
              <div className="bg-slate-800 rounded p-3">
                <strong>Non fare i tre percorsi identici</strong><br />
                <span className="text-xs text-slate-400">Ovest = mistero. Centrale = sfida. Est = combattimento.</span>
              </div>
            </div>
          </div>

          {/* Connessioni narrative */}
          <div className="bg-slate-800 border border-cyan-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Connessioni Narrative</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-700 rounded p-4">
                <h4 className="font-semibold text-yellow-400 mb-2">Callback dal Piano 1</h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  <li>• Lingua sconosciuta del Piano 1 → ricompare nei pattern di Zona 18 e nella placca del forziere</li>
                  <li>• Acqua anomala notata da Riven → ora pienamente manifesta (TS Volontà CD 12)</li>
                  <li>• Chiave di Ferro dal Piano 1 → apre il forziere nella Riserva Sigillata</li>
                </ul>
              </div>
              <div className="bg-slate-700 rounded p-4">
                <h4 className="font-semibold text-amber-400 mb-2">Semi per il Piano 3</h4>
                <ul className="space-y-1 text-xs text-slate-300">
                  <li>• Polvere dorata del boss → collegamento al Primordiale</li>
                  <li>• Cristallo Meridiano → risuona con le anomalie acquatiche dei livelli successivi</li>
                  <li>• Bussola che cerca qualcosa "sotto"</li>
                  <li>• Scala bianca → il dungeon diventa più strano</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-amber-900/20 border border-amber-700 rounded p-4">
              <h4 className="font-semibold text-amber-400 mb-2">Domande che i PG dovrebbero avere alla fine:</h4>
              <ol className="space-y-1 text-xs text-slate-300 list-decimal list-inside">
                <li>Perché l'acqua si comporta così?</li>
                <li>Cosa ha trasformato i contrabbandieri?</li>
                <li>Chi ha costruito il laboratorio e la Riserva Sigillata?</li>
                <li>Cosa c'è di diverso nella polvere dorata del boss?</li>
                <li>Cosa cerca la bussola sotto di loro?</li>
              </ol>
              <p className="text-amber-400 text-xs mt-2 font-semibold">Nessuna di queste domande deve avere risposta ora.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
