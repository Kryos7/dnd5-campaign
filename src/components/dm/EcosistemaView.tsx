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
  tentativoForza?: string;
  statistiche?: {
    nome: string;
    valori: string[];
  };
  immagineMostro?: {
    src: string;
    alt: string;
  };
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

export default function EcosistemaView() {
  const [livelloSelezionato, setLivelloSelezionato] = useState<number>(1);
  const [stanzaSelezionata, setStanzaSelezionata] = useState<string | null>(null);
  const [sezioneAperta, setSezioneAperta] = useState<string>('panoramica');

  const livello1: Livello = {
    numero: 1,
    nome: 'Le Fogne Superiori',
    livelloConsigliato: 3,
    stanzeTotali: '14 (7 opzionali)',
    durataStimata: '2.5-3.5 ore',
    tema: 'Fogne abbandonate e pericolose',
    caratteristiche: [
      'Nemici eliminati svaniscono in nube di polvere rilasciando cristalli magici',
      'Nessun riferimento al mondo esterno - no note di nobili, no missioni per personaggi in superficie',
      'Ambiente realistico - le fogne sembrano vere fogne di Waterdeep con pericoli mondani credibili'
    ],
    layout: 'Percorso con stanze opzionali',
    percorsi: [
      { nome: 'Percorso Nord', descrizione: 'Più corto ma più pericoloso (trappole + combattimenti)' },
      { nome: 'Percorso Sud', descrizione: 'Più lungo ma "più sicuro" (più esplorazione, meno combattimenti diretti)' }
    ]
  };

  const stanzeL1: Stanza[] = [
    {
      numero: '1',
      nome: "L'Ingresso delle Fogne",
      tipo: 'Entrata/Introduzione',
      dimensioni: 'Piattaforma circolare con canali',
      descrizione: 'Dopo il passaggio del velo divino vi trovate su una scalinata di pietra umida e scivolosa che termina in un\'ampia piattaforma circolare circondata da canali maleodoranti. L\'acqua scorre lentamente, portando detriti e rifiuti organici. L\'aria è soffocante, densa di umidità e fetore. Solo la luce tremolante di alcune torce di legno combatte le tenebre davanti a voi. (Percezione 10) Davanti alla scalinata, una piccola pozzanghera (30cm profondità) di acqua stagnante verdastra si è formata erodendo il vecchio pavimento in pietra sconnessa.',
      elementi: [
        'Muri di pietra umida ricoperti di muschio scivoloso',
        'Due vie visibili: Sud (passerella di legno pericolante) e Nord (area aperta con canali)',
        'Pozzanghera: Nasconde Tomo di Mystra #1 (Percezione CD 14, semisommerso tra detriti sul fondo) e 1 Cristallo Minuscolo (Percezione CD 16, semisommerso tra detriti sul fondo).'
      ],
      pericoli: 'Acqua stagnante (TS su COS se la permanenza dura più di un minuto. Il Personaggio diventa nauseato per 1 minuto se fallisce)',
      cristalli: '1 Cristallo Minuscolo',
      favoreDivino: 'Mystra (trovare tomo)'
    },
    {
      numero: '2',
      nome: 'Il Piazzale di Scarico',
      tipo: 'Hub esplorativo',
      dimensioni: '12x13m circa',
      descrizione: 'Un\'ampia area aperta circondata da canali d\'acqua sporca. Al centro si erge un vecchio pozzo di scarico con argano arrugginito e secchio marcio ancora attaccato alla catena. Attorno al pozzo, casse di legno sfondate, balle di stoffa marcia, pallet e detriti vari accatastati disordinatamente.',
      elementi: [
        'Tracce: Investigare CD 12 segni evidenti di attività recente: impronte nel fango verso Sud, cenere fresca vicino a una cassa rovesciata, torce consumate da poco.',
        'Barili: Ispezionare CD 13 → sul fondo (3m), 1 Cristallo Minuscolo e una borraccia di buona fattura (vendibile 2 mo)',
        'Tra le casse: corda marcita (inutilizzabile), vecchio set di gavette (vendibili 1 mo), pezzi di stoffa (utili per torce o bende)',
        'Scelta: Percorso Nord (passerella di legno) o Sud (passerella di legno sul canale)'
      ],
      pericoli: 'Nessuno diretto',
      cristalli: '1 Cristallo Minuscolo',
      favoreDivino: 'Nessuno'
    },
    {
      numero: '3',
      nome: 'La Passerella Marcia',
      tipo: 'Trappola + Combattimento',
      dimensioni: '12m x 1.5m passerella',
      descrizione: 'Una passerella di legno larga 1.5m si snoda tra i canali per circa 12 metri, portando verso un\'apertura nelle rocce. Le assi sono visibilmente marce, curve, coperte di muschio scivoloso. Alcune crepe sono evidenti. Sotto, 2 metri di acqua verde e stagnante.',
      elementi: [
        'Trappola - Assi marce: Le tavole centrali (posizione 6-8m) sono pericolosamente instabili',
        'Percepire CD 13 per notare le assi più marce',
        'Opzione sicura: Attraversare lentamente (dimezzare velocità) evita problemi',
        'Se corrono/combattono sulla passerella: TS Destrezza CD 14 o sfondano le assi, cadendo 2m nell\'acqua (1d6 danni contundenti + TS Costituzione CD 12 o avvelenato 1h per acqua infetta)',
        'Combattimento: Appena il primo PG arriva a metà passerella → 1 Swarm of Rats (MM pg 339) emerge dalle crepe nelle rocce laterali, attirato dal movimento'
      ],
      pericoli: 'Assi marce + Sciame di ratti',
      cristalli: '8 cristalli minuscoli (dallo sciame)',
      favoreDivino: 'Tymora (attraversare senza far crollare assi), Tempus (sconfiggere sciame)',
      noteDM: ['Se i PG attraversano velocemente mentre combattono lo sciame, fai tirare il TS Destrezza. Crea tensione!']
    },
    {
      numero: '4',
      nome: 'La Camera Allagata',
      tipo: 'Pericolo ambientale + Combattimento (GRICK ACQUATICO)',
      dimensioni: '10x12m',
      descrizione: 'Camera vasta allagata con 60cm di acqua stagnante torbida. Un pilastro crollato emerge al centro. Scaffale marcio alla parete est. Grata metallica arrugginita alla parete nord (tana del Grick). Soffitto basso (2.5m) con stalattiti umide. L\'acqua è stranamente immobile. Ossa rosicchiate galleggiano in superficie. Solchi viscidi sui muri.',
      elementi: [
        'Combattimento: 1 GRICK ACQUATICO nascosto nell\'acqua (Percezione CD 16 se immobile). Attacca quando qualcuno si avvicina a 3m. Predatore anfibio con tentacoli e resistenza ai danni non magici',
        'LINK STATBLOCK: Vedi pagina dedicata → /dm/mostri/grick-acquatico',
        'Tattica: Il Grick emerge dall\'acqua con attacco sorpresa, usa Multiattacco (Tentacoli + Becco), si immerge per copertura, fugge se sotto 8 PF verso la grata nord',
        'Attraversamento: Acqua 60cm = terreno difficile per PG (movimento dimezzato). Grick nuota a velocità normale (9m)',
        'Elementi tattici: Pilastro crollato (copertura), Scaffale marcio (abbattibile, Atletica CD 13, 2d6 danni), Soffitto (Grick può arrampicarsi)'
      ],
      pericoli: 'Grick Acquatico (CR 2), acqua stagnante, terreno scivoloso',
      cristalli: '15 cristalli (dal Grick)',
      favoreDivino: 'Tempus (sconfiggere senza KO: +10, <4 round: +5), Mystra (uso efficace magia: +10), Tymora (attacco sorpresa vs Grick: +10)',
      noteDM: [
        'IMPORTANTE: Questo è un combattimento challenging per party livello 5. Il Grick ha resistenza ai danni non magici (metà danno). Premia uso di magia e tattiche.',
        'Se i PG individuano il Grick prima (Percezione 16+), possono pianificare attacco. Altrimenti il Grick ha vantaggio all\'iniziativa.',
        'Usa l\'acqua e il terreno tatticamente: il Grick si immerge per copertura, emerge per attaccare, usa il soffitto per posizioni inaspettate.',
        'Se troppo difficile: riduci HP a 22. Se troppo facile: aggiungi un Grick giovane (15 HP, -1 danni).'
      ]
    },
    {
      numero: '5',
      nome: 'Il Canale Asciutto',
      tipo: 'Esplorazione/Pericolo ambientale',
      dimensioni: 'Canale 3-4m sotto il livello del pavimento',
      descrizione: 'Un angolo delle fogne dove un canale principale è completamente prosciugato. Macerie e detriti hanno ostruito i due passaggi laterali, bloccando il flusso d\'acqua. Il canale vuoto scende 3-4 metri sotto il livello del pavimento, con pareti di pietra viscide. Buio totale in questa zona - nessuna luce naturale o muschio bioluminescente.',
      elementi: [
        'Scendere nel canale: Atletica CD 12 per calarsi senza cadere (3m). Fallimento = 1d6 danni contundenti',
        'Nel canale: Fango denso (movimento dimezzato), odore atroce (TS Costituzione CD 10 o svantaggio a Percezione per 10 min)',
        'Tesoro nascosto: Sul fondo del canale, tra i detriti: Tomo di Mystra #3 semisepolto nel fango (Percezione CD 15 o Investigare CD 13), 18 mo sparse, lanterna rotta ma recuperabile con riparazioni (5 mo valore se riparata)'
      ],
      pericoli: 'Caduta, fango, buio totale',
      cristalli: 'Nessuno',
      favoreDivino: 'Mystra (trovare tomo)',
      noteDM: ['Il buio totale qui è importante - enfatizza la necessità di fonti di luce. I PG senza darkvision o luce hanno svantaggio a tutte le prove di Percezione.']
    },
    {
      numero: '6',
      nome: 'Il Deposito Marcio',
      tipo: 'Pericolo ambientale',
      dimensioni: '6x8m rettangolare',
      descrizione: 'Camera rettangolare stipata di detriti: casse marce accatastate disordinatamente, balle di tessuto ammuffito che si sfaldano al tatto, vecchie botti sfondate con liquidi non identificabili stagnanti. Il soffitto è parzialmente crollato (2m altezza residua), creando una zona claustrofobica. Aria pesante e malsana.',
      elementi: [
        'Pericolo - Gas tossico: Muffa nera tossica ricopre gran parte dei detriti. All\'ingresso: TS Costituzione CD 12 o avvelenato per 10 minuti (svantaggio a prove Costituzione e tiri per colpire). Rimanere più di 5 minuti = nuovo TS o prolunga avvelenamento altri 10 min',
        'Instabilità strutturale: Se qualcuno si muove violentemente o sposta casse rumorosamente → TS Destrezza CD 13 o subisce 2d4 danni contundenti da crollo parziale soffitto',
        'Tesoro tra detriti: Perquisire attentamente (10 min) rivela: 30 mo sparse in vari nascondigli, Set completo di attrezzi da scassinatore in buone condizioni (25 mo valore), 3 razioni secche ancora sigillate (miracolosamente intatte)'
      ],
      pericoli: 'Gas tossico, crolli, claustrofobia',
      cristalli: 'Nessuno',
      favoreDivino: 'Nessuno (ma ricompensa economica buona)',
      noteDM: ['Questa stanza premia la pazienza. Se i PG si affrettano o fanno rumore, attiva il crollo. Gli attrezzi da scasso qui sono molto utili per la Stanza 14.']
    },
    {
      numero: '7',
      nome: 'Il Corridoio del Verme',
      tipo: 'Combattimento importante (BOSS del piano)',
      dimensioni: '20m x 3m corridoio',
      descrizione: 'Corridoio lungo e stretto con pareti di pietra umida. A metà percorso (10m), il muro destro presenta una breccia irregolare di 2m di diametro - segni evidenti di scavi recenti, rocce smosse, terra smossa sul pavimento. Dall\'apertura proviene un odore nauseabondo di carne marcia.',
      elementi: [
        'Combattimento inevitabile: Quando i PG raggiungono metà corridoio → 1 Carrion Crawler (MM pg 37) emerge dalla breccia e attacca. Il verme cerca di paralizzare un PG per trascinarlo nella tana. Combattimento in spazio ristretto (corridoio 3m) limita manovre. I tentacoli paralizzanti sono la vera minaccia.',
        'Tana del verme: Dopo aver sconfitto la creatura, i PG possono ispezionare la breccia. Piccola camera naturale (3x3m) piena di resti organici. Tra i resti: 35 mo, 2 gemme (ametista 10 mo, quarzo rosa 8 mo), Armatura di cuoio in discrete condizioni (equipaggiamento standard), Spada corta con impugnatura decorata (non magica, vendibile 12 mo)'
      ],
      pericoli: 'Carrion Crawler (tentacoli paralizzanti!)',
      cristalli: '2 cristalli piccoli',
      favoreDivino: 'Tempus (sconfiggere il verme)',
      noteDM: [
        'Questo è il combattimento "boss" del piano. Il Carrion Crawler è pericoloso per PG livello 3. Se un PG viene paralizzato, il verme prova a trascinarlo nella tana. Crea tensione!'
      ],
      statistiche: {
        nome: 'Carrion Crawler',
        valori: [
          'CA 13, PF 51 (6d10+18)',
          'Velocità 9m, scalare 9m',
          'Tentacoli: +8 al colpire, 1d4+2 perforanti + TS Costituzione CD 13 o paralizzato 1 minuto (ripeti TS a fine proprio turno)',
          'Morso: +8 al colpire, 2d4+2 perforanti'
        ]
      }
    },
    {
      numero: '8',
      nome: 'La Sala delle Colonne',
      tipo: 'Area di raccolta/Riposo',
      dimensioni: 'Camera a L con soffitto 5m',
      descrizione: 'Imponente camera a L con soffitto a volta che raggiunge i 5 metri. Otto colonne di pietra scolpita disposte in cerchio sostengono l\'intera struttura. Al centro, un\'antica fontana prosciugata con statua corrosa e irriconoscibile (forse una divinità?). L\'acqua gocciola dalle pareti creando echi melodici. Muschio bioluminescente sulle colonne fornisce luce fioca ma sufficiente.',
      elementi: [
        'Fontana centrale: Ispezionare CD 14 rivela sul fondo della vasca: Aprendo tutti e 4 i rubinetti l\'altare si alza rivelando il Tomo di Mystra #5, 25 mo sparse tra foglie marce e detriti, Piccola gemma azzurrina (15 mo)',
        'Atmosfera: Area relativamente "tranquilla" - i PG possono fare breve respiro prima delle ultime sfide',
        'Due porte visibili: a Ovest (Corridoio 7, da dove sono arrivati) e a Nord (porta verso area successiva)'
      ],
      pericoli: 'Nessuno',
      cristalli: 'Nessuno',
      favoreDivino: 'Mystra (ultimo tomo del piano)',
      noteDM: ['Questa è una buona posizione per un breve riposo se necessario. Permetti ai giocatori di rifiatare, contare risorse, e prepararsi per il finale.']
    },
    {
      numero: '9',
      nome: 'La Vasca Tossica',
      tipo: 'Sfida ambientale + Area facoltativa (OPZIONALE)',
      dimensioni: '12x10m',
      descrizione: 'Ampia camera aperta dominata da una grande vasca d\'acqua verdastra e fumante (3m profondità, occupa circa 60% della stanza). Il liquido emette vapori tossici visibili. Le pareti sono ricoperte di stalattiti che gocciolano continuamente nella vasca. L\'uscita è chiaramente visibile sul lato opposto - la stanza può essere aggirata lungo i bordi, anche se lo spazio è stretto (1m circa).',
      elementi: [
        'Acqua tossica: Vapori (TS Costituzione CD 11 ogni minuto in stanza o 1d4 danni da veleno), Contatto diretto (1d6 danni necrotici per round), Immersione completa (2d6 danni necrotici per round)',
        'OPZIONE 1 - Baule Sommerso: Sul fondo della vasca (Percezione CD 13 dall\'alto con luce), tra le giganti tubature, si intravede un vecchio baule. Recuperarlo richiede: Immergersi completamente (2d6 danni/round) e trattenere fiato, Atletica CD 15 per staccarlo dal fondo e riportarlo su (2 round minimi = 4d6 danni garantiti). Contenuto: 50 mo, 3 gemme (20, 15, 10 mo), Tomo di Mystra #6, 2x Pozione di guarigione (2d4+2)',
        'OPZIONE 2 - Ingredienti Alchemici: Lungo i bordi della vasca crescono funghi alchemici rari color porpora (Natura o Alchimia CD 14 per riconoscerli). Raccoglierne con successo (Destrezza CD 12, serve kit alchemico o coltello) = 1d4 dosi. Valore: 20 mo a dose se venduti. Rischio: Fallimento CD significa cadere in acqua (1d6 danni necrotici)'
      ],
      pericoli: 'Vapori tossici, acqua altamente corrosiva',
      cristalli: 'Nessuno',
      favoreDivino: 'Tymora (recuperare baule O raccogliere funghi senza subire danni)',
      noteDM: ['Questa stanza è completamente opzionale - i PG possono aggirarla. È una "trappola per avidi" - le ricompense sono buone ma il rischio è alto. Se un PG muore qui, è stata loro scelta.']
    },
    {
      numero: '10',
      nome: 'Il Nido dei Ratti',
      tipo: 'Combattimento opzionale + Esplorazione',
      dimensioni: '12x14m irregolare',
      descrizione: 'Vasta camera naturale irregolare con soffitto a 4 metri. Il terreno è coperto da uno strato di funghi bioluminescenti tossici (luce fioca azzurrina) che emettono spore visibili nell\'aria. Decine di piccoli cunicoli punteggiano le pareti. Al centro della stanza, un ammasso disgustoso di resti organici, ossa, stracci - il nido principale.',
      elementi: [
        'Funghi tossici: Camminare tra i funghi disturba le spore. TS Costituzione CD 11 ogni 2 round passati nella stanza o subire 1d4 danni da veleno. Coprirsi naso/bocca con tessuto concede vantaggio al TS',
        'Combattimento (opzionale): Se i PG entrano rumorosamente O toccano il nido centrale O falliscono Furtività gruppo CD 14 → Escono 1 Swarm of Rats + 3 Giant Rats che attaccano ferocemente',
        'Evitare combattimento: Muoversi silenziosamente lungo i bordi (Furtività gruppo CD 14) permette di attraversare senza disturbare i ratti',
        'Tesoro nel nido: Se perquisito (richiede disturbare i ratti se non già combattuto): 38 mo, Osso intagliato con simboli tribali (curiosità, vendibile 5 mo a collezionista), Tomo di Mystra #4 semisepolto sotto ossa, Anello d\'argento semplice (10 mo)'
      ],
      pericoli: 'Funghi tossici, sciame + topi giganti',
      cristalli: '18 Cristalli Minuscoli (8 sciame + 10 dai topi, se combattono)',
      favoreDivino: 'Tempus (sconfiggere tutti i nemici), Tymora (passare senza combattere E senza subire danni da funghi), Mystra (recuperare tomo)',
      noteDM: ['Questa è una vera scelta tattica - combattere per i cristalli (Tempus) o essere furtivi (Tymora)? Entrambe sono strategie valide. Se evitano il combattimento ma poi tornano per il tomo, i ratti attaccano comunque.']
    },
    {
      numero: '11',
      nome: 'La Camera delle Quattro Leve',
      tipo: 'Enigma logico complesso + Trappola temporale (OPZIONALE ⭐⭐⭐)',
      dimensioni: '6x6m quadrata, soffitto 4m',
      descrizione: 'Stanza quadrata con soffitto a 4m. Pareti di pietra umida con quattro leve di ferro montate a 1.5m d\'altezza, una per parete (Nord, Sud, Est, Ovest). Ogni leva ha una placca di bronzo corroso sotto con un\'iscrizione in Comune antico (ancora leggibile). Al centro del pavimento, una pesante griglia metallica circolare (2m diametro) con bordi decorati con simboli d\'acqua. Sotto la griglia, si intravede una camera oscura profonda 3m. L\'acqua gocciola costantemente dal soffitto attraverso fessure quasi invisibili.',
      elementi: [
        'Porta sigillata - TRAPPOLA: Appena TUTTI i PG entrano → porta si chiude con scatto meccanico pesante. Percezione CD 16 o Investigare Trappole CD 16 per notare meccanismo a pressione PRIMA di entrare. Se falliscono: porta si sigilla, senza via d\'uscita apparente. Tentare di forzare la porta: impossibile. Knock o magie simili: non funzionano.',
        'Le Quattro Leve e le Iscrizioni: LEVA I (Nord): "La Leva II mente. Io sono la terza da tirare." | LEVA II (Est): "La Leva I mente. Io sono la quarta da tirare." | LEVA III (Sud): "La Leva IV mente. Io sono la seconda da tirare." | LEVA IV (Ovest): "La Leva III mente. Io sono la quarta da tirare."',
        'Regola fondamentale: 2 leve dicono SEMPRE la verità, 2 leve mentono SEMPRE. Le leve devono essere tirate in un ordine specifico. Tirare una leva nell\'ordine sbagliato = errore (con conseguenze)',
        'Sistema di errori progressivi: 1° ERRORE → acqua 10cm/minuto (~40 min totali). 2° ERRORE → acqua 30cm/minuto (~13 min). 3° ERRORE → acqua 60cm/minuto (~6-7 min). 4° ERRORE → acqua 120cm/minuto (~3 min)',
        'SOLUZIONE: Ordine corretto = III → II → I → IV',
        'Camera del tesoro (se risolvono): Quando le 4 leve vengono tirate nell\'ordine corretto, l\'acqua che gocciola si ferma, la griglia si sblocca e scivola lateralmente. Scala a pioli di ferro scende nella camera sottostante (3x3m, profondità 3m). Tesori: Tomo di Mystra posato su piedistallo, 45 mo in monete antiche, Chiave di Ferro Nero (15cm, apre Magazzino Sigillato nel Piano 2), Pozione di Guarigione Maggiore (4d4+4), Nota antica su pergamena.'
      ],
      pericoli: 'Trappola con timer (acqua che sale)',
      cristalli: 'Nessuno',
      favoreDivino: 'Mystra (risolvere l\'enigma = raccogliere Tomo), Tymora (risolvere senza errori = +15%)',
      tentativoForza: `**Tentativo di sfondare la porta (forza bruta):**

La porta di pietra massiccia è incredibilmente resistente e praticamente impossibile da sfondare senza soluzioni magiche potenti.

**Statistiche della porta:**
• AC: 18
• Punti Ferita: 70 HP
• Soglia di Danno: 15 (qualsiasi danno inferiore a 15 viene ignorato completamente)
• Immunità: Veleno, Psichico

**Prova di Forza (Atletica):**
• CD 27-30 per sfondare con forza bruta
• Richiede almeno 3 turni di tentativi consecutivi anche in caso di successo
• Ogni tentativo fallito aumenta la CD di +2 (affaticamento/struttura che si compatta)

**Conseguenze del tentativo:**
• Rumore assordante: Ogni tentativo attira 1d4 creature dalle zone adiacenti (automatico, nessun tiro Furtività possibile)
• Danno di contraccolpo: Chi tenta subisce 1d6 danni contundenti per il rinculo
• Tempo: Ogni tentativo richiede 1 turno completo (6 secondi), durante i quali l'acqua continua a salire

**Alternative magiche:**
• Disintegrate: Funziona normalmente (distrugge una sezione 3x3m)
• Passwall: Funziona (crea passaggio temporaneo)
• Shatter: CD TS della porta 10, se fallisce subisce 3d8 danni sonori (probabilmente sotto soglia)
• Earthquake: Potrebbe funzionare ma rischia di far collassare l'intera zona`,
      noteDM: [
        'Questa è la stanza più difficile del Piano 1. È completamente opzionale. Premia giocatori intelligenti e pazienti. Punisce tentativi casuali (acqua sale). Non può essere "brute forced" facilmente.',
        'Tieni traccia del tempo reale E del tempo in-game. Descrivi l\'acqua che sale frequentemente per creare tensione. Non essere crudele - se stanno per affogare, lascia un ultimo tentativo di fuga.',
        'Se bloccati >20 minuti reali: offri hint sottile. Se bloccati >30 minuti: offri hint più chiaro. Se bloccati >40 minuti: considera check Intelligenza CD 18 per soluzione parziale.',
        'La Chiave di Ferro Nero è importante - prepara una stanza/area speciale nel Piano 2 che richieda questa chiave.'
      ]
    },
    {
      numero: '12',
      nome: "L'Avamposto dei Contrabbandieri",
      tipo: 'Combattimento + Ricompense',
      dimensioni: '5x6m',
      descrizione: 'Una camera laterale aperta ricavata da uno slargo tra le mura e i canali. All\'interno, un piccolo accampamento: due tende di tela scura, casse impilate, barili, un braciere con braci ancora calde. Odore di cibo recente e fumo. Due sentinelle sorvegliano l\'accesso al livello inferiore: sono vigili e armate, chiaramente membri di un\'organizzazione di contrabbandieri.',
      elementi: [
        'Combattimento: 2 Bandit (MM pg 343) - Sono in allerta ed ostili appena vengono notati o riescono a fare una imboscata. Se i PG tentano la furtività (gruppo, CD 15) o diplomazia convincente (Persuasione CD 16), possono ritardare il combattimento. Altrimenti attaccano a vista. IMPORTANTE: I banditi hanno la Chiave del Cancello (Stanza 14) addosso (uno dei due)',
        'Accampamento: Perquisire dopo il combattimento rivela: 22 mo in una borsa, 2 razioni da viaggio fresche, 2 spade corte (equipaggiamento standard), Set di dadi truccati (vendibili 3 mo come curiosità)',
        'SEGRETO: Dietro una delle casse (Investigare CD 15), pannello di legno nasconde una piccola nicchia con: Tomo di Mystra #2, Pozione di guarigione (2d4+2), 15 mo in monete antiche'
      ],
      pericoli: '2 Banditi',
      cristalli: '2 cristalli piccoli (1 per bandito)',
      favoreDivino: 'Tempus (sconfiggere banditi), Tymora (trovare segreto)',
      noteDM: ['Questa è una stanza chiave - i PG DEVONO ottenere la chiave per procedere. Se evitano il combattimento con successo, fai in modo che possano comunque ottenere la chiave (rubandola mentre i banditi dormono, barattando, ecc.)']
    },
    {
      numero: '13',
      nome: 'Il Vicolo dei Funghi',
      tipo: 'Trappola naturale + Combattimento nascosto (OPZIONALE)',
      dimensioni: '12m x 2.5m vicolo cieco',
      descrizione: 'Corridoio a vicolo cieco che termina contro un muro di macerie. L\'acqua stagnante raggiunge i 40cm di profondità. Diverse casse di legno galleggiano o sono semisommerse. Le pareti sono completamente ricoperte da colonie di funghi gialli tossici che pulsano debolmente. Tra di essi, apparentemente innocuo, cresce un fungo violaceo più grande (1.5m altezza) vicino alle casse più ricche. Il fungo viola ha un cappello carnoso e tentacoli sottili che penzolano immobili nell\'acqua.',
      elementi: [
        'Funghi Urlanti Tossici: Disturbare l\'acqua (camminare) o toccare i funghi gialli scatena rilascio di spore (TS Costituzione CD 13 o avvelenato 1 ora + 2d4 danni da veleno) + Suono stridulo',
        'Violet Fungus MUTATO nascosto: Percezione CD 16 o Natura CD 14 per riconoscerlo PRIMA che attacchi. Attacca con tentacoli velenosi quando un PG arriva entro 4.5m. Questo NON è un Violet Fungus standard - è MUTATO e molto più pericoloso (Grande, 52 PF, vulnerabile a fuoco, aura tossica, rigenerazione). Vedi scheda mostro completa per dettagli tattici.',
        'Casse galleggianti: 5 casse. Aprirle silenziosamente (Furtività CD 14) evita di disturbare i funghi gialli. Contenuto totale: 28 mo, 2 razioni rovinate, 1 razione sigillata, Boccetta di Antitossina (50 mo), Piccolo kit di pronto soccorso (5 usi, vantaggio a Medicina)'
      ],
      pericoli: 'Funghi tossici, Violet Fungus MUTATO (GS 2, molto pericoloso!), possibile allerta',
      cristalli: '20 cristalli (dal Violet Fungus Mutato quando sconfitto)',
      favoreDivino: 'Tempus (sconfiggere il Violet Fungus Mutato = ~25% cristalli totali Piano 1), Tymora (recuperare tutte le casse senza attivare funghi gialli E senza combattere = 15%)',
      noteDM: ['Questa stanza è completamente opzionale. È una "trappola per avidi". ATTENZIONE: il Violet Fungus è MUTATO e molto più pericoloso di uno standard! Vedi scheda completa del mostro per statistiche, abilità speciali, e tattiche di combattimento dettagliate. L\'Antitossina e il kit di pronto soccorso sono particolarmente utili per le stanze successive - e per questo combattimento stesso!'],
      immagineMostro: {
        src: '/images/mostri/violet_fungus_mutato.png',
        alt: 'Violet Fungus Mutato'
      }
    },
    {
      numero: '14',
      nome: 'La Scala Presidiata',
      tipo: 'Transizione con ostacolo',
      dimensioni: '4x8m anticamera',
      descrizione: 'Piccola anticamera quadrata con pareti di pietra liscia. L\'accesso è bloccato da un massiccio cancello di ferro con serratura complessa. Una scala scende nelle profondità della terra.',
      elementi: [
        'Cancello di ferro: Solido, impossibile sfondare senza equipaggiamento pesante o magie potenti. Serratura complessa: Attrezzi da scasso + Destrezza CD 16 per scassinare (richiede 1 minuto di lavoro concentrato). Chiave: I banditi della Stanza 12 possiedono la chiave (uno dei due ce l\'ha addosso). Alternative creative: Knock (apre automaticamente), Shatter sul meccanismo (CD 15 Costituzione o si rompe)',
        'Simbolo magico: Innocuo, fornisce luce fioca costante. Detect Magic rivela aura di Divinazione (Mystra). Non ha funzione apparente oltre illuminare.',
        'Zona sicura: I PG possono riposare brevemente qui. Nessuna creatura entra in questa stanza.',
        'Scala discendente: Oltre il cancello, scala a chiocciola di pietra nera che scende nelle tenebre. Dopo 3 metri di discesa, attraversano un velo magico brillante (transizione divina, monodirezionale).',
        'Avviso magico: Appena attraversano il velo, una voce incorporea di tono neutro annuncia: "Primo Livello Completato. Benvenuti nel secondo Livello."'
      ],
      pericoli: 'Cancello bloccato (ostacolo narrativo, non pericolo fisico)',
      cristalli: 'Nessuno',
      favoreDivino: 'Nessuno',
      noteDM: ['Questa stanza segna la fine ufficiale del Piano 1. I PG DEVONO aprire il cancello per procedere. Se non hanno la chiave e non possono scassinare, devono trovare soluzioni creative. Una volta attraversato il velo magico, NON possono tornare indietro - enfatizza questo quando descrivono la discesa.']
    }
  ];

  const riepilogoRisorse = {
    tomiMystra: {
      totale: 5,
      peso: '2.5 kg ciascuno (12.5 kg totali)',
      favorePerTomo: '20% (100% se tutti trovati)',
      locazioni: [
        'Stanza 1 - Pozzanghera iniziale (Percezione CD 14)',
        'Stanza 12 - Nicchia segreta accampamento banditi (Investigare CD 15)',
        'Stanza 3S - Canale ostruito, nel fango (Percezione CD 15)',
        'Stanza 5S - Nido dei ratti, sotto ossa',
        'Stanza 6 - Fontana sala delle colonne (Ispezionare CD 14)'
      ],
      bonus: 'Libro antico di preghiere (Stanza 9, opzionale) = +5% Favore Mystra se trattato con rispetto'
    },
    cristalli: {
      totale: 81,
      minimo: 53,
      breakdown: [
        { nemico: 'Swarm of Rats', stanza: '3N', cristalli: 8, nota: 'Inevitabile' },
        { nemico: 'Bandit x2', stanza: '12', cristalli: 20, nota: 'Necessari per chiave' },
        { nemico: 'Giant Rats x2', stanza: '4N', cristalli: 10, nota: 'Evitabili con successo' },
        { nemico: 'Swarm + Giant Rats x3', stanza: '5S', cristalli: 18, nota: 'Completamente evitabili' },
        { nemico: 'Carrion Crawler', stanza: '7', cristalli: 25, nota: 'Inevitabile' }
      ]
    },
    oro: {
      garantito: '~150 mo',
      percorsoNord: '~205 mo',
      percorsoSud: '~221 mo',
      opzionali: '~93 mo',
      massimo: '~300 mo',
      gemme: '~96 mo valore in gemme e gioielli',
      equipaggiamento: '~70-130 mo valore'
    },
    consumabili: {
      pozioni: [
        '1x Pozione di Guarigione (2d4+2) - Stanza 12',
        '1x Pozione di Guarigione Maggiore (4d4+4) - Stanza 8 (opzionale, baule sommerso)',
        '1x Antitossina - Stanza 10 (opzionale)'
      ],
      razioni: [
        '2 razioni fresche - Stanza 12',
        '3 razioni secche - Stanza 4S',
        '1 razione sigillata - Stanza 10'
      ],
      equipaggiamento: [
        'Set completo attrezzi da scasso - Stanza 4S (cruciale per Stanza 14!)',
        'Kit di pronto soccorso (5 usi) - Stanza 10',
        'Lanterna riparabile - Stanza 3S'
      ]
    }
  };

  const favoreDivino = {
    tempus: {
      metodo: 'Percentuale di cristalli ottenuti sul totale disponibile',
      base: 81,
      formula: '(Cristalli ottenuti / 81) × 100 = % Favore Tempus',
      esempi: [
        'Party pacifista (evita tutto l\'evitabile): 53/81 = 65% Tempus',
        'Party equilibrato: 71/81 = 88% Tempus',
        'Party bellicoso (uccide tutto): 81/81 = 100% Tempus'
      ]
    },
    tymora: {
      metodo: 'Sistema a punti percentuali discreti',
      azioni: [
        { azione: 'Passerella intatta', condizione: 'Non far crollare assi marce', favore: '15%', stanza: '3N' },
        { azione: 'Segreto dei banditi', condizione: 'Trovare nicchia nascosta', favore: '15%', stanza: '12' },
        { azione: 'Salto perfetto', condizione: 'Attraversare 4N senza cadere', favore: '10%', stanza: '4N' },
        { azione: 'Silenzio mortale', condizione: 'Passare 5S senza combattere E senza danni funghi', favore: '20%', stanza: '5S' },
        { azione: 'Audacia tossica', condizione: 'Recuperare baule O funghi senza danni', favore: '20%', stanza: '8' },
        { azione: 'Vicolo fortunato', condizione: 'Recuperare casse senza attivare funghi', favore: '10%', stanza: '10' },
        { azione: 'Sopravvivenza', condizione: 'Nessun PG ridotto a 0 PF in tutto il piano', favore: '10%', stanza: 'Generale' }
      ],
      totale: '100%'
    },
    mystra: {
      metodo: 'Sistema semplice basato su tomi',
      perTomo: '20% Favore',
      totale: '5 tomi disponibili = 100% possibile',
      bonus: 'Libro antico (Stanza 9) trattato con rispetto = +5% extra (totale 105% max)',
      peso: 'Ogni tomo pesa 2.5 kg - 5 tomi = 12.5 kg totali (ingombrante!)'
    }
  };

  const renderStanza = (stanza: Stanza) => (
    <div key={stanza.numero} className="bg-slate-700 border border-slate-600 rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-xl font-bold text-yellow-400">
            Zona {stanza.numero} - {stanza.nome}
          </h4>
          <div className="text-sm text-slate-400 mt-1">
            {stanza.tipo}
            {stanza.dimensioni && ` • ${stanza.dimensioni}`}
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
            <p className="text-slate-300 mt-1 leading-relaxed">{stanza.descrizione}</p>
          </div>

          <div className="bg-slate-800 border border-slate-600 rounded p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-emerald-300">📋 Elementi:</span>
              {stanza.numero === '4' && (
                <a
                  href="/dm/mostri/grick-acquatico"
                  className="px-3 py-1 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  🐙 Scheda Grick Acquatico
                </a>
              )}
              {stanza.numero === '7' && (
                <a
                  href="/dm/mostri/carrion-crawler-boss"
                  className="px-3 py-1 bg-red-700 hover:bg-red-600 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  🐛 Scheda Carrion Crawler Boss
                </a>
              )}
            </div>
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
              <span className="font-semibold text-red-400">⚠️ Pericoli:</span>
              <p className="text-slate-300 mt-1">{stanza.pericoli}</p>
            </div>
          )}

          {stanza.tentativoForza && (
            <div className="bg-orange-900/20 border border-orange-700 rounded p-3">
              <span className="font-semibold text-orange-400">💪 Tentativo Forza Bruta:</span>
              <div className="text-slate-300 mt-2 text-sm whitespace-pre-line leading-relaxed">
                {stanza.tentativoForza}
              </div>
            </div>
          )}

          {stanza.immagineMostro && (
            <div className="bg-slate-800 border border-red-700 rounded p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-red-400">👹 Immagine del Mostro:</span>
                {stanza.numero === '13' && (
                  <a
                    href="/dm/mostri/violet-fungus-mutato"
                    className="px-4 py-2 bg-red-700 hover:bg-red-600 text-white rounded-lg text-sm font-semibold transition-colors"
                  >
                    📜 Scheda Completa del Mostro
                  </a>
                )}
              </div>
              <img
                src={stanza.immagineMostro.src}
                alt={stanza.immagineMostro.alt}
                className="w-full max-w-md mx-auto rounded-lg border-2 border-red-900"
              />
              {stanza.numero === '13' && (
                <p className="text-center text-yellow-400 mt-3 text-sm italic">
                  ⚠️ Questo è un mostro MUTATO molto più pericoloso dello standard! Clicca per vedere la scheda completa.
                </p>
              )}
            </div>
          )}

          {stanza.cristalli && (
            <div className="bg-purple-900/20 border border-purple-700 rounded p-3">
              <span className="font-semibold text-purple-400">💎 Cristalli:</span>
              <p className="text-slate-300 mt-1">{stanza.cristalli}</p>
            </div>
          )}

          {stanza.favoreDivino && (
            <div className="bg-yellow-900/20 border border-yellow-700 rounded p-3">
              <span className="font-semibold text-yellow-400">✨ Favore Divino:</span>
              <p className="text-slate-300 mt-1">{stanza.favoreDivino}</p>
            </div>
          )}

          {stanza.statistiche && (
            <div className="bg-orange-900/20 border border-orange-700 rounded p-3">
              <span className="font-semibold text-orange-400">⚔️ {stanza.statistiche.nome}:</span>
              <ul className="mt-2 space-y-1">
                {stanza.statistiche.valori.map((valore, i) => (
                  <li key={i} className="text-slate-300 text-xs">• {valore}</li>
                ))}
              </ul>
            </div>
          )}

          {stanza.noteDM && stanza.noteDM.length > 0 && (
            <div className="bg-slate-900 border-2 border-slate-600 rounded p-3">
              <span className="font-semibold text-slate-400">📝 Note DM:</span>
              <ul className="mt-2 space-y-1">
                {stanza.noteDM.map((nota, i) => (
                  <li key={i} className="text-slate-400 italic text-xs leading-relaxed">• {nota}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 border-2 border-red-700 rounded-xl p-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold text-red-400 mb-2">
              🗺️ ECOSISTEMA 1 - Piano {livelloSelezionato}
            </h1>
            <p className="text-2xl text-yellow-400">{livello1.nome}</p>
            <p className="text-lg text-slate-300 mt-1">Guida Completa DM - {livello1.tema}</p>
          </div>
          <div className="bg-slate-800 rounded-lg px-6 py-3 border border-red-500">
            <div className="text-sm text-slate-400">Livello Consigliato</div>
            <div className="text-4xl font-bold text-red-400">{livello1.livelloConsigliato}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">Stanze Totali</div>
            <div className="text-lg font-bold text-yellow-400">{livello1.stanzeTotali}</div>
          </div>
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">Durata Stimata</div>
            <div className="text-lg font-bold text-orange-400">{livello1.durataStimata}</div>
          </div>
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">Layout</div>
            <div className="text-lg font-bold text-purple-400">Struttura a Y</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['panoramica', 'mappa', 'stanze', 'risorse', 'favore-divino', 'note-dm'].map((sezione) => (
          <button
            key={sezione}
            onClick={() => setSezioneAperta(sezione)}
            className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              sezioneAperta === sezione
                ? 'bg-red-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {sezione === 'panoramica' && '📊 Panoramica'}
            {sezione === 'mappa' && '🗺️ Mappa'}
            {sezione === 'stanze' && '🚪 Stanze'}
            {sezione === 'risorse' && '💰 Risorse'}
            {sezione === 'favore-divino' && '✨ Favore Divino'}
            {sezione === 'note-dm' && '📝 Note DM'}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      {sezioneAperta === 'panoramica' && (
        <div className="space-y-6">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">🎯 Tema Generale</h2>
            <p className="text-slate-300 leading-relaxed mb-4">{livello1.tema}</p>

            <h3 className="text-xl font-bold text-blue-400 mb-3 mt-6">Caratteristiche Distintive del Dungeon Divino</h3>
            <ul className="space-y-2">
              {livello1.caratteristiche.map((car, i) => (
                <li key={i} className="text-slate-300 pl-4 border-l-2 border-blue-700">• {car}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-purple-400 mb-3 mt-6">Layout e Percorsi</h3>
            <p className="text-slate-300 mb-3">{livello1.layout}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {livello1.percorsi.map((percorso, i) => (
                <div key={i} className="bg-slate-700 rounded p-4">
                  <h4 className="font-bold text-emerald-400 mb-2">{percorso.nome}</h4>
                  <p className="text-sm text-slate-300">{percorso.descrizione}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-orange-400 mb-3 mt-6">Rapporto Attività</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-700 rounded p-4 text-center">
                <div className="text-3xl font-bold text-blue-400">50%</div>
                <div className="text-sm text-slate-400 mt-1">Esplorazione</div>
              </div>
              <div className="bg-slate-700 rounded p-4 text-center">
                <div className="text-3xl font-bold text-red-400">30%</div>
                <div className="text-sm text-slate-400 mt-1">Combattimento</div>
              </div>
              <div className="bg-slate-700 rounded p-4 text-center">
                <div className="text-3xl font-bold text-purple-400">20%</div>
                <div className="text-sm text-slate-400 mt-1">Puzzle/Sfide</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'mappa' && (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">🗺️ Mappa del Livello 1</h2>
          <div className="bg-slate-900 rounded-lg p-4">
            <img
              src="/images/levels/livello-1-fogne-numerate.jpg"
              alt="Mappa Livello 1 - Le Fogne Superiori"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="mt-4 bg-blue-900/20 border border-blue-700 rounded p-4">
            <p className="text-slate-300 text-sm">
              <strong className="text-blue-400">Nota:</strong> I numeri sulla mappa corrispondono alle Zone descritte nella sezione "Stanze".
              La struttura a "Y" è visibile con i due percorsi alternativi (Nord e Sud) che si ricongiungono nella Sala delle Colonne.
            </p>
          </div>
        </div>
      )}

      {sezioneAperta === 'stanze' && (
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            🚪 Dettaglio Stanze - Livello 1
          </h2>
          <p className="text-slate-400 mb-6">
            Clicca su una stanza per espandere i dettagli completi. Le stanze sono organizzate in ordine di percorso.
          </p>
          {stanzeL1.map(renderStanza)}
        </div>
      )}

      {sezioneAperta === 'risorse' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">💰 Riepilogo Risorse e Ricompense</h2>

          {/* Tomi di Mystra */}
          <div className="bg-slate-800 border border-blue-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">📚 Tomi di Mystra</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Totale Disponibile</div>
                <div className="text-2xl font-bold text-blue-400">{riepilogoRisorse.tomiMystra.totale} tomi</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Peso Totale</div>
                <div className="text-2xl font-bold text-orange-400">{riepilogoRisorse.tomiMystra.peso}</div>
              </div>
            </div>
            <div className="bg-slate-700 rounded p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">Locazioni:</h4>
              <ul className="space-y-1 text-sm">
                {riepilogoRisorse.tomiMystra.locazioni.map((loc, i) => (
                  <li key={i} className="text-slate-300">• {loc}</li>
                ))}
              </ul>
              <p className="text-emerald-400 text-sm mt-3">✨ {riepilogoRisorse.tomiMystra.bonus}</p>
            </div>
          </div>

          {/* Cristalli */}
          <div className="bg-slate-800 border border-purple-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">💎 Cristalli Totali Disponibili</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Totale Disponibile</div>
                <div className="text-3xl font-bold text-purple-400">{riepilogoRisorse.cristalli.totale}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Minimo Garantito</div>
                <div className="text-3xl font-bold text-emerald-400">{riepilogoRisorse.cristalli.minimo}</div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-2 text-left text-purple-400">Nemico</th>
                    <th className="p-2 text-left text-purple-400">Stanza</th>
                    <th className="p-2 text-center text-purple-400">Cristalli</th>
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

          {/* Oro e Tesori */}
          <div className="bg-slate-800 border border-yellow-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">💰 Oro e Tesori Mondani</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Garantito</div>
                <div className="text-xl font-bold text-yellow-400">{riepilogoRisorse.oro.garantito}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Percorso Nord</div>
                <div className="text-xl font-bold text-blue-400">{riepilogoRisorse.oro.percorsoNord}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Percorso Sud</div>
                <div className="text-xl font-bold text-emerald-400">{riepilogoRisorse.oro.percorsoSud}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Stanze Opzionali</div>
                <div className="text-xl font-bold text-purple-400">{riepilogoRisorse.oro.opzionali}</div>
              </div>
              <div className="bg-slate-700 rounded p-3">
                <div className="text-sm text-slate-400">Gemme</div>
                <div className="text-xl font-bold text-cyan-400">{riepilogoRisorse.oro.gemme}</div>
              </div>
              <div className="bg-red-900/30 border border-red-700 rounded p-3">
                <div className="text-sm text-slate-400">MASSIMO TOTALE</div>
                <div className="text-2xl font-bold text-red-400">{riepilogoRisorse.oro.massimo}</div>
              </div>
            </div>
          </div>

          {/* Consumabili */}
          <div className="bg-slate-800 border border-emerald-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-emerald-400 mb-4">🧪 Consumabili e Oggetti Utili</h3>
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
                <h4 className="font-semibold text-yellow-400 mb-2">Razioni</h4>
                <ul className="space-y-1 text-xs">
                  {riepilogoRisorse.consumabili.razioni.map((r, i) => (
                    <li key={i} className="text-slate-300">• {r}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-700 rounded p-4">
                <h4 className="font-semibold text-blue-400 mb-2">Equipaggiamento</h4>
                <ul className="space-y-1 text-xs">
                  {riepilogoRisorse.consumabili.equipaggiamento.map((e, i) => (
                    <li key={i} className="text-slate-300">• {e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'favore-divino' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">✨ Sistema Favore Divino - Dettaglio Completo</h2>

          {/* Tempus */}
          <div className="bg-slate-800 border-l-4 border-red-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-3">⚔️ TEMPUS - Gloria in Battaglia</h3>
            <p className="text-slate-400 italic mb-4">"La gloria si conquista con il sangue dei nemici"</p>
            <div className="bg-slate-700 rounded p-4 mb-4">
              <div className="font-semibold text-slate-300 mb-2">Metodo di calcolo:</div>
              <p className="text-slate-300 text-sm">{favoreDivino.tempus.metodo}</p>
              <p className="text-yellow-400 font-mono text-sm mt-2">{favoreDivino.tempus.formula}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-300">Esempi:</h4>
              {favoreDivino.tempus.esempi.map((es, i) => (
                <div key={i} className="bg-slate-700 rounded p-2 text-sm text-slate-300">• {es}</div>
              ))}
            </div>
          </div>

          {/* Tymora */}
          <div className="bg-slate-800 border-l-4 border-yellow-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">🎲 TYMORA - Fortuna e Audacia</h3>
            <p className="text-slate-400 italic mb-4">"Chi non risica non rosica, ma chi è saggio sopravvive"</p>
            <div className="bg-slate-700 rounded p-4 mb-4">
              <div className="font-semibold text-slate-300 mb-2">Metodo di calcolo:</div>
              <p className="text-slate-300 text-sm">{favoreDivino.tymora.metodo}</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-2 text-left text-yellow-400">Azione</th>
                    <th className="p-2 text-left text-yellow-400">Condizione</th>
                    <th className="p-2 text-center text-yellow-400">Favore %</th>
                    <th className="p-2 text-center text-yellow-400">Stanza</th>
                  </tr>
                </thead>
                <tbody>
                  {favoreDivino.tymora.azioni.map((az, i) => (
                    <tr key={i} className="border-t border-slate-600">
                      <td className="p-2 text-slate-300">{az.azione}</td>
                      <td className="p-2 text-slate-400 text-xs">{az.condizione}</td>
                      <td className="p-2 text-center text-yellow-400 font-bold">{az.favore}</td>
                      <td className="p-2 text-center text-slate-300">{az.stanza}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-yellow-900/20 border border-yellow-700 rounded p-3">
              <p className="text-sm text-slate-300"><strong className="text-yellow-400">TOTALE POSSIBILE:</strong> {favoreDivino.tymora.totale}</p>
            </div>
          </div>

          {/* Mystra */}
          <div className="bg-slate-800 border-l-4 border-blue-500 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-3">📚 MYSTRA - Conoscenza Arcana</h3>
            <p className="text-slate-400 italic mb-4">"Il sapere è potere, la conoscenza è eterna"</p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-700 rounded p-4">
                <div className="text-sm text-slate-400">Per Tomo</div>
                <div className="text-2xl font-bold text-blue-400">{favoreDivino.mystra.perTomo}</div>
              </div>
              <div className="bg-slate-700 rounded p-4">
                <div className="text-sm text-slate-400">Bonus Libro Antico</div>
                <div className="text-2xl font-bold text-purple-400">+5%</div>
              </div>
            </div>
            <div className="bg-slate-700 rounded p-4">
              <p className="text-slate-300 text-sm mb-2">{favoreDivino.mystra.metodo}</p>
              <p className="text-blue-400 font-semibold text-sm">{favoreDivino.mystra.totale}</p>
              <p className="text-yellow-400 text-sm mt-2">{favoreDivino.mystra.bonus}</p>
              <p className="text-orange-400 text-sm mt-2">⚠️ {favoreDivino.mystra.peso}</p>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'note-dm' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">📝 Note per il Dungeon Master</h2>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">⏱️ Timing e Ritmo</h3>
            <div className="space-y-3 text-slate-300 text-sm">
              <p><strong className="text-yellow-400">Durata stimata totale:</strong> 2.5-3.5 ore</p>
              <div className="bg-slate-700 rounded p-3">
                <h4 className="font-semibold text-emerald-400 mb-2">Breakdown per sezione:</h4>
                <ul className="space-y-1">
                  <li>• Stanze 1-2 (introduzione): 15-20 min</li>
                  <li>• Percorso scelto (Nord O Sud): 45-60 min</li>
                  <li>• Convergenza (Stanze 6-7): 30-40 min</li>
                  <li>• Stanze opzionali: 15-20 min ciascuna</li>
                  <li>• Finale (Stanza 14): 5-10 min</li>
                </ul>
              </div>
              <div className="bg-blue-900/20 border border-blue-700 rounded p-3">
                <h4 className="font-semibold text-blue-400 mb-2">Gestione del ritmo:</h4>
                <ul className="space-y-1">
                  <li>• Non affrettare le prime stanze - i PG devono capire il sistema del dungeon</li>
                  <li>• Il Carrion Crawler (Stanza 7) è il climax - rendilo epico</li>
                  <li>• Le stanze opzionali sono "breather" - usale se i PG sembrano stanchi</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-orange-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-400 mb-4">⚖️ Difficoltà e Bilanciamento</h3>
            <div className="space-y-3 text-slate-300 text-sm">
              <p><strong className="text-yellow-400">Per party livello 3 (come previsto):</strong></p>
              <ul className="space-y-1 bg-slate-700 rounded p-3">
                <li>• Difficoltà base: Media-Bassa</li>
                <li>• Nessun incontro dovrebbe essere mortale da solo</li>
                <li>• Il pericolo viene dall\'accumulo di danni e risorse esaurite</li>
              </ul>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-red-900/20 border border-red-700 rounded p-3">
                  <h4 className="font-semibold text-red-400 mb-2">Se il party è troppo forte:</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Aggiungi 1-2 Giant Rats in Stanza 4N o 5S</li>
                    <li>• Aumenta CD delle trappole/TS di +2</li>
                    <li>• Il Carrion Crawler ha alleati (1-2 Stirge)</li>
                  </ul>
                </div>
                <div className="bg-green-900/20 border border-green-700 rounded p-3">
                  <h4 className="font-semibold text-green-400 mb-2">Se il party è in difficoltà:</h4>
                  <ul className="space-y-1 text-xs">
                    <li>• Riduci CD di trappole/TS di -2</li>
                    <li>• Rimuovi 1 Giant Rat da Stanza 4N</li>
                    <li>• Fai apparire 1 Pozione di Guarigione in più in Stanza 6</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 border border-purple-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-400 mb-4">🎭 Atmosfera e Descrizioni</h3>
            <div className="space-y-3 text-slate-300 text-sm">
              <div className="bg-slate-700 rounded p-3">
                <h4 className="font-semibold text-yellow-400 mb-2">Tono generale del Piano 1:</h4>
                <ul className="space-y-1">
                  <li>• <strong>Realistico, mondano, degradato</strong></li>
                  <li>• Odori: fogna, marciume, umidità, muffa</li>
                  <li>• Suoni: gocciolii, scrosci d\'acqua lontana, occasionali cigolii</li>
                  <li>• Sensazioni tattili: freddo, umido, viscido</li>
                  <li>• NO elementi sovrannaturali evidenti (tranne il velo magico finale)</li>
                </ul>
              </div>
              <div className="bg-blue-900/20 border border-blue-700 rounded p-3">
                <h4 className="font-semibold text-blue-400 mb-2">Descrizioni sensoriali chiave:</h4>
                <ul className="space-y-1 text-xs">
                  <li>• <strong>Acqua:</strong> Sempre descrivi consistenza e colore (stagnante verde, nera, torbida)</li>
                  <li>• <strong>Luce:</strong> Enfatizza il buio - la maggior parte delle stanze è buio totale</li>
                  <li>• <strong>Spazio:</strong> Claustrofobia nei corridoi stretti, sollievo nelle stanze ampie</li>
                  <li>• <strong>Temperatura:</strong> Freddo umido costante, mai confortevole</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-2 border-red-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4">❌ Errori Comuni da Evitare</h3>
            <div className="space-y-2 text-slate-300 text-sm">
              <div className="bg-slate-800 rounded p-3">
                ❌ <strong>Non bloccare mai completamente il progresso</strong><br />
                <span className="text-xs text-slate-400">Se i PG non hanno la chiave e non possono scassinare, trova una soluzione creativa.</span>
              </div>
              <div className="bg-slate-800 rounded p-3">
                ❌ <strong>Non uccidere PG nelle stanze opzionali</strong><br />
                <span className="text-xs text-slate-400">Quelle stanze sono scelte - devono essere pericolose ma non mortali.</span>
              </div>
              <div className="bg-slate-800 rounded p-3">
                ❌ <strong>Non far sentire i giocatori "stupidi" per scelte diverse</strong><br />
                <span className="text-xs text-slate-400">Tempus, Tymora, Mystra sono tutte strategie valide. Nessuna è "sbagliata".</span>
              </div>
              <div className="bg-slate-800 rounded p-3">
                ❌ <strong>Non ignorare il peso dei tomi</strong><br />
                <span className="text-xs text-slate-400">Se un PG trasporta 5 tomi (12.5kg), dovrebbe sentirsi appesantito.</span>
              </div>
              <div className="bg-slate-800 rounded p-3">
                ❌ <strong>Non rendere i combattimenti tutti uguali</strong><br />
                <span className="text-xs text-slate-400">Ogni incontro ha una "personalità" - varia le tattiche.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
