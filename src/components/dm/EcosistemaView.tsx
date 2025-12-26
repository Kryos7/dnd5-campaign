import React, { useState } from 'react';

interface Stanza {
  numero: string;
  nome: string;
  dimensioni: string;
  descrizione: string;
  illuminazione: string;
  mostri?: string;
  tesoro?: string;
  trappola?: string;
  missione?: string;
  anomalia?: string;
  png?: string;
  uscite: string;
  note?: string;
}

interface Livello {
  numero: number;
  nome: string;
  cr: string;
  stanze: number;
  sessioni: string;
  tesoro: string;
  favore: number;
}

export default function EcosistemaView() {
  const [livelloSelezionato, setLivelloSelezionato] = useState<number>(1);
  const [stanzaSelezionata, setStanzaSelezionata] = useState<string | null>(null);
  const [sezioneAperta, setSezioneAperta] = useState<string>('livelli');

  const livelli: Livello[] = [
    {
      numero: 1,
      nome: 'Cantine e Fogne',
      cr: '1/4',
      stanze: 42,
      sessioni: '1-2',
      tesoro: '~1400 MO',
      favore: 125
    },
    {
      numero: 2,
      nome: 'Tunnel dei Contrabbandieri',
      cr: '1/2',
      stanze: 48,
      sessioni: '2-3',
      tesoro: '~2000 MO',
      favore: 150
    },
    {
      numero: 3,
      nome: 'Boss - Grolnek',
      cr: '3',
      stanze: 1,
      sessioni: '1',
      tesoro: '~600 MO + Amuleto',
      favore: 100
    }
  ];

  // Dati delle stanze principali del Livello 1
  const stanzeL1: Stanza[] = [
    {
      numero: 'START',
      nome: 'La Discesa',
      dimensioni: '10x10m, circolare',
      descrizione: 'Piattaforma magica al centro, corde appese. Muri pietra umida. Torce ogni 5m.',
      illuminazione: 'Torce magiche (luce intensa)',
      uscite: '1 corridoio (C1) a nord',
      note: 'Prima impressione! Descrivi dettagli per immersione.'
    },
    {
      numero: '3',
      nome: 'Sala delle Statue',
      dimensioni: '10x10m, quadrata',
      descrizione: '3 statue Lord antichi (Piergeiron, Khelben, Mirt). Affreschi sbiaditi.',
      illuminazione: 'Media (torce 2)',
      missione: 'MYSTRA: "Decifrare i Graffiti" (1/5) - Tre spade incrociate (Lame della Notte). Check Arcano DC 10 O Storia DC 12',
      tesoro: 'Dietro statua Mirt, pannello segreto (Investigazione DC 15) → 50 MO + lettera antica',
      uscite: '3 (ovest a [2], nord a [4], sud a [7])'
    },
    {
      numero: '5',
      nome: 'La Cisterna',
      dimensioni: '12x12m, circolare, soffitto 6m',
      descrizione: 'Cisterna antica, acqua limpida (profonda 2m). Scale pietra scendono.',
      illuminazione: 'Buia (alghe bioluminescenti = luce tenue verde)',
      tesoro: 'Sul fondo: 25 MO + 1 gemma (50 MO). PASSAGGIO SEGRETO (Tymora 1/3): Parete est, 1m sotto acqua (Percezione DC 13) → Stanza 5B',
      uscite: '2 (sud a [4], est a [8])'
    },
    {
      numero: '5B',
      nome: 'Camera Nascosta (SEGRETA)',
      dimensioni: '4x4m, cubica',
      descrizione: 'Stanza asciutta, cassa di legno al centro. Fungo luminoso nell\'angolo.',
      illuminazione: 'Fioca (fungo)',
      tesoro: '100 MO + 1 Pozione Guarigione + Anello d\'Argento "Fortuna a chi osa" (30 MO, blessed Tymora). +50 Favore Tymora',
      uscite: 'Solo verso [5]',
      note: 'Easter egg: "Qui riposò Durnan, 1450 DR"'
    },
    {
      numero: '18',
      nome: 'La Cascata Sotterranea',
      dimensioni: '10x10m',
      descrizione: 'Cascata (2m altezza) acqua limpida. Vasca raccoglie acqua (1m profonda). Suono rilassante.',
      illuminazione: 'Media (cristalli luminosi naturali)',
      anomalia: 'ACQUA SCORRE VERSO L\'ALTO per 30cm poi ricade! (Percezione DC 14)',
      missione: 'MYSTRA: "Acqua Anomala" - Segnalare = +25 Favore',
      tesoro: 'Sul fondo vasca: 20 MO + conchiglia magica (emette luce se parola "Lux")',
      uscite: '2 (nord a [14], sud a [21])',
      note: 'PRIMA STRANEZZA! Giocatori dovrebbero iniziare a dubitare.'
    },
    {
      numero: '20',
      nome: 'Sala delle Serrature',
      dimensioni: '8x8m cubica, 3 porte identiche',
      descrizione: '3 porte con serrature complesse. Simboli: Grifone, Spada, Moneta.',
      illuminazione: 'Media (torce 3)',
      trappola: 'PUZZLE: Ordine corretto = Grifone→Spada→Moneta (Storia DC 13). Ordine sbagliato = allarme sonoro',
      tesoro: 'Dietro porta Moneta: 200 MO + mappa parziale livello 2',
      missione: 'MYSTRA: "Decifrare Graffiti" (4/5) - Simbolo Moneta rune magiche',
      uscite: '4 (varie porte + corridoio C6)'
    },
    {
      numero: '33',
      nome: 'Accampamento Principale Goblin',
      dimensioni: '15x15m',
      descrizione: '5 giacigli (paglia), fuoco centrale, cibo marcio ammucchiato.',
      illuminazione: 'Fioca (brasi)',
      mostri: '6 Goblin (CR 1/4, HP 7 ciascuno). Se allertati: imboscata. Se sorpresi: metà fugge.',
      tesoro: '30 MO sparse. PASSAGGIO SEGRETO (Tymora 3/3): Dietro giaciglio nord-ovest (Percezione DC 17) → Stanza 33A',
      uscite: '4 (varie direzioni)'
    },
    {
      numero: '33A',
      nome: 'Camera Tesoro Goblin (SEGRETA)',
      dimensioni: '4x4m',
      descrizione: 'Cumulo disordinato oggetti rubati.',
      illuminazione: 'Buia',
      tesoro: '120 MO + 3 gemme (30 MO ciascuna) + Spada Corta +1 (MAGICA!) + spezie (15 MO). +50 Favore Tymora + MONETA FORTUNATA (1 reroll d20/giorno, 7 giorni)',
      uscite: 'Solo verso [33]'
    },
    {
      numero: '40',
      nome: 'BOSS: Tana degli Sciami',
      dimensioni: '20x20m circolare',
      descrizione: 'Sala fetida. Cumuli spazzatura. Pozzo centrale (10m diametro, 3m profondo) pieno rifiuti.',
      illuminazione: 'Fioca (torce 4 agli angoli)',
      mostri: 'BOSS FIGHT: 3 Sciami di Ratti (CR 1/4, HP 24 ciascuno). Sciame 3 emerge Round 2 (sorpresa!). Tempo: 3-5 round.',
      tesoro: 'Nel pozzo: 150 MO + 4 gemme (25 MO) + Pozione Guarigione Maggiore (4d4+4) + Pergamena Misty Step + Chiave Ferro (livello 2)',
      uscite: 'Porta nord appare dopo vittoria → LIVELLO 2',
      note: 'Climax del livello! Descrivi epicamente.'
    }
  ];

  // Dati del BOSS Grolnek
  const bossGrolnek = {
    nome: 'GROLNEK, Otyugh Evoluto',
    cr: '3 (adattato)',
    tipo: 'Aberrazione (Large)',
    ca: 14,
    hp: 90,
    velocita: '30ft (nuoto 30ft in acqua viola)',
    attacchi: [
      'Multiattacco: 2 tentacoli + 1 morso (o 3 tentacoli)',
      'Tentacolo (portata 10ft): +6, 1d8+4 contundente, Afferra (Fuga DC 13)',
      'Morso (portata 5ft): +6, 2d8+4 perforante, Malattia (CON DC 13)'
    ],
    abilita: [
      'Rigenerazione Putrida: Se immerso in acqua viola → 10 HP/round',
      'Percezione Tremori: Vantaggio vs creature in contatto terra/acqua',
      'Olfatto Acuto: Vantaggio Percezione olfatto'
    ],
    meccanica: 'MAREA ALTERNATA: Acqua BASSA (round 1-3, 7+) vs ALTA (round 4-6). Cicla ogni 3 round.',
    tattica: [
      'Round 1-3 (BASSA): Aggressivo, tentacoli per afferrare, trascina verso pozzo',
      'Round 4-6 (ALTA): Si immerge (Stealth +3), emerge sotto PG isolati, hit & run',
      'Se <30 HP: Tentativo fuga nel pozzo profondo'
    ],
    purificazione: [
      'METODO 1 (Mystra): Purify Food & Drink (rituale 11 min) o Lesser Restoration sul pozzo. +100 Favore Mystra + benedizione (+10 HP temp, 24h)',
      'METODO 2 (Tymora): Tuffarsi nel pozzo, nuotare 10m sotto, combattere 3 Stirge Giganti subacquei, distruggere Cristallo Corrotto (AC 12, 20 HP). +150 Favore Tymora + Ispirazione!',
      'METODO 3 (Materiale): Versare componenti alchemiche o sacrificare 1 Pozione Guarigione. +50 Favore generale'
    ],
    tesoro: '500 MO + 4 gemme (25 MO) + Pozione Guarigione Maggiore + Pergamena Misty Step + AMULETO DEL SOPRAVVISSUTO (1/giorno: rimani a 1 HP invece di 0 HP)'
  };

  const renderStanza = (stanza: Stanza) => (
    <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-xl font-bold text-yellow-400">
          [{stanza.numero}] {stanza.nome}
        </h4>
        <button
          onClick={() => setStanzaSelezionata(stanzaSelezionata === stanza.numero ? null : stanza.numero)}
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          {stanzaSelezionata === stanza.numero ? 'Nascondi' : 'Espandi'}
        </button>
      </div>

      {stanzaSelezionata === stanza.numero && (
        <div className="space-y-3 text-sm">
          <div>
            <span className="font-semibold text-slate-300">Dimensioni:</span>{' '}
            <span className="text-slate-400">{stanza.dimensioni}</span>
          </div>
          <div>
            <span className="font-semibold text-slate-300">Descrizione:</span>{' '}
            <span className="text-slate-400">{stanza.descrizione}</span>
          </div>
          <div>
            <span className="font-semibold text-slate-300">Illuminazione:</span>{' '}
            <span className="text-slate-400">{stanza.illuminazione}</span>
          </div>
          {stanza.mostri && (
            <div className="bg-red-900/20 border border-red-700 rounded p-2">
              <span className="font-semibold text-red-400">⚔️ Mostri:</span>{' '}
              <span className="text-slate-300">{stanza.mostri}</span>
            </div>
          )}
          {stanza.tesoro && (
            <div className="bg-yellow-900/20 border border-yellow-700 rounded p-2">
              <span className="font-semibold text-yellow-400">💰 Tesoro:</span>{' '}
              <span className="text-slate-300">{stanza.tesoro}</span>
            </div>
          )}
          {stanza.trappola && (
            <div className="bg-orange-900/20 border border-orange-700 rounded p-2">
              <span className="font-semibold text-orange-400">⚠️ Trappola/Puzzle:</span>{' '}
              <span className="text-slate-300">{stanza.trappola}</span>
            </div>
          )}
          {stanza.missione && (
            <div className="bg-purple-900/20 border border-purple-700 rounded p-2">
              <span className="font-semibold text-purple-400">✨ Missione:</span>{' '}
              <span className="text-slate-300">{stanza.missione}</span>
            </div>
          )}
          {stanza.anomalia && (
            <div className="bg-blue-900/20 border border-blue-700 rounded p-2">
              <span className="font-semibold text-blue-400">🌀 Anomalia:</span>{' '}
              <span className="text-slate-300">{stanza.anomalia}</span>
            </div>
          )}
          {stanza.png && (
            <div className="bg-green-900/20 border border-green-700 rounded p-2">
              <span className="font-semibold text-green-400">👤 PNG:</span>{' '}
              <span className="text-slate-300">{stanza.png}</span>
            </div>
          )}
          <div>
            <span className="font-semibold text-slate-300">Uscite:</span>{' '}
            <span className="text-slate-400">{stanza.uscite}</span>
          </div>
          {stanza.note && (
            <div className="bg-slate-800 border border-slate-600 rounded p-2 italic">
              <span className="font-semibold text-slate-400">📝 Note DM:</span>{' '}
              <span className="text-slate-400">{stanza.note}</span>
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
              🗺️ ECOSISTEMA 1 - LE FONDAMENTA FAMILIARI
            </h1>
            <p className="text-xl text-slate-300">Guida Completa DM - Livelli 1-3</p>
          </div>
          <div className="bg-slate-800 rounded-lg px-4 py-2 border border-red-500">
            <div className="text-sm text-slate-400">Party Livello</div>
            <div className="text-3xl font-bold text-red-400">5</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">Durata Stimata</div>
            <div className="text-lg font-bold text-yellow-400">6-8 sessioni</div>
          </div>
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">CR Range</div>
            <div className="text-lg font-bold text-orange-400">1/8 - 3</div>
          </div>
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">Tema</div>
            <div className="text-lg font-bold text-purple-400">Urbano → Misterioso</div>
          </div>
          <div className="bg-slate-800/50 rounded p-3">
            <div className="text-sm text-slate-400">Favore Totale</div>
            <div className="text-lg font-bold text-emerald-400">375 Favore</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {['livelli', 'stanze-chiave', 'boss', 'missioni', 'tesori'].map((sezione) => (
          <button
            key={sezione}
            onClick={() => setSezioneAperta(sezione)}
            className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              sezioneAperta === sezione
                ? 'bg-red-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {sezione.charAt(0).toUpperCase() + sezione.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      {sezioneAperta === 'livelli' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">📊 Panoramica Livelli</h2>
          {livelli.map((livello) => (
            <div
              key={livello.numero}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    Livello {livello.numero}: {livello.nome}
                  </h3>
                  <p className="text-slate-400 mt-1">CR Medio: {livello.cr} | Sessioni: {livello.sessioni}</p>
                </div>
                <button
                  onClick={() => setLivelloSelezionato(livello.numero)}
                  className={`px-4 py-2 rounded ${
                    livelloSelezionato === livello.numero
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {livelloSelezionato === livello.numero ? 'Selezionato' : 'Seleziona'}
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-700 rounded p-3">
                  <div className="text-xs text-slate-400">Stanze</div>
                  <div className="text-xl font-bold text-emerald-400">{livello.stanze}</div>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <div className="text-xs text-slate-400">Tesoro</div>
                  <div className="text-xl font-bold text-yellow-400">{livello.tesoro}</div>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <div className="text-xs text-slate-400">Favore Potenziale</div>
                  <div className="text-xl font-bold text-purple-400">{livello.favore}</div>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <div className="text-xs text-slate-400">CR Medio</div>
                  <div className="text-xl font-bold text-orange-400">{livello.cr}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {sezioneAperta === 'stanze-chiave' && (
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            🗝️ Stanze Chiave - Livello {livelloSelezionato}
          </h2>
          <p className="text-slate-400 mb-6">
            Clicca su una stanza per espandere i dettagli completi
          </p>
          {livelloSelezionato === 1 ? (
            <div>{stanzeL1.map(renderStanza)}</div>
          ) : (
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <p className="text-slate-400 text-center">
                Dettagli completi disponibili solo per Livello 1. Per Livelli 2-3, consulta il documento originale.
              </p>
            </div>
          )}
        </div>
      )}

      {sezioneAperta === 'boss' && (
        <div>
          <h2 className="text-2xl font-bold text-red-400 mb-4">👹 BOSS: Grolnek, Otyugh Evoluto</h2>
          <div className="bg-slate-800 border-2 border-red-700 rounded-lg p-6 space-y-4">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-900/20 rounded p-4 border border-red-700">
                <div className="text-sm text-slate-400">CA</div>
                <div className="text-3xl font-bold text-red-400">{bossGrolnek.ca}</div>
              </div>
              <div className="bg-red-900/20 rounded p-4 border border-red-700">
                <div className="text-sm text-slate-400">HP</div>
                <div className="text-3xl font-bold text-red-400">{bossGrolnek.hp}</div>
              </div>
              <div className="bg-red-900/20 rounded p-4 border border-red-700">
                <div className="text-sm text-slate-400">CR</div>
                <div className="text-3xl font-bold text-red-400">{bossGrolnek.cr}</div>
              </div>
            </div>

            <div className="bg-slate-700 rounded p-4">
              <h4 className="font-bold text-yellow-400 mb-2">⚔️ Attacchi</h4>
              <ul className="space-y-1 text-slate-300">
                {bossGrolnek.attacchi.map((attacco, i) => (
                  <li key={i} className="text-sm">• {attacco}</li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-700 rounded p-4">
              <h4 className="font-bold text-purple-400 mb-2">✨ Abilità Speciali</h4>
              <ul className="space-y-1 text-slate-300">
                {bossGrolnek.abilita.map((abilita, i) => (
                  <li key={i} className="text-sm">• {abilita}</li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900/20 rounded p-4 border border-blue-700">
              <h4 className="font-bold text-blue-400 mb-2">🌊 Meccanica Boss: {bossGrolnek.meccanica}</h4>
              <div className="mt-3 space-y-2">
                <h5 className="font-semibold text-slate-300">Tattica per Round:</h5>
                <ul className="space-y-1 text-sm text-slate-400">
                  {bossGrolnek.tattica.map((t, i) => (
                    <li key={i}>• {t}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-green-900/20 rounded p-4 border border-green-700">
              <h4 className="font-bold text-green-400 mb-2">🧪 Purificazione Pozzo (Obbligatoria per Pianerottolo)</h4>
              <ul className="space-y-2 text-sm text-slate-300 mt-3">
                {bossGrolnek.purificazione.map((metodo, i) => (
                  <li key={i} className="bg-slate-800 rounded p-2">• {metodo}</li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-900/20 rounded p-4 border border-yellow-700">
              <h4 className="font-bold text-yellow-400 mb-2">💰 Tesoro Boss</h4>
              <p className="text-slate-300 text-sm">{bossGrolnek.tesoro}</p>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'missioni' && (
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-4">✨ Missioni Divine - Tracking</h2>
          <div className="space-y-4">
            <div className="bg-slate-800 border-l-4 border-red-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-400 mb-3">⚔️ TEMPUS</h3>
              <div className="space-y-2 text-slate-300">
                <div className="bg-slate-700 rounded p-3">
                  <div className="font-semibold">"Pattuglia Metodica" - Livello 1</div>
                  <div className="text-sm text-slate-400 mt-1">Mappare 80%+ del livello → +50 Favore + Benedizione "Battle Focus" (+2 Iniziativa, 24h)</div>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <div className="font-semibold">"Eliminare senza perdite" - Livello 2</div>
                  <div className="text-sm text-slate-400 mt-1">Sconfiggere tutti i mostri senza morti del party → +100 Favore</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border-l-4 border-yellow-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">🎲 TYMORA</h3>
              <div className="space-y-2 text-slate-300">
                <div className="bg-slate-700 rounded p-3">
                  <div className="font-semibold">"La Scommessa del Novizio" - 3 Passaggi Segreti</div>
                  <div className="text-sm text-slate-400 mt-1">
                    1. Stanza 5 - Cisterna (DC 13)<br/>
                    2. Stanza 33 - Accampamento Goblin (DC 17)<br/>
                    Ricompensa: +50 Favore + MONETA FORTUNATA (reroll d20 1/giorno, 7 giorni)
                  </div>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <div className="font-semibold">"Tesoro Nascosto Biblioteca" - Livello 2</div>
                  <div className="text-sm text-slate-400 mt-1">Trovare camera segreta → +100 Favore</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border-l-4 border-blue-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-3">📚 MYSTRA</h3>
              <div className="space-y-2 text-slate-300">
                <div className="bg-slate-700 rounded p-3">
                  <div className="font-semibold">"Decifrare i Graffiti" - 5 Simboli Gang</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Stanze 3, 11, 12, 20, 25 (Check Arcano DC 10 o Storia DC 12)<br/>
                    Ricompensa: +50 Favore + Conoscenza permanente
                  </div>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <div className="font-semibold">"Acqua Anomala" - Livello 1 & 2</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Stanza 18 (Cascata) + Stanza 18-L2 (Fontana) → +50 Favore totale
                  </div>
                </div>
                <div className="bg-slate-700 rounded p-3">
                  <div className="font-semibold">"Salvare Conoscenza" - Livello 2</div>
                  <div className="text-sm text-slate-400 mt-1">
                    Biblioteca Sommersa: Recuperare 10 libri (Investigazione DC 13, 10 min)<br/>
                    Ricompensa: +125 Favore + Pergamena 3° livello
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {sezioneAperta === 'tesori' && (
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">💰 Riepilogo Tesori</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Livello 1</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Oro:</span>
                  <span className="text-yellow-400 font-semibold">~850 MO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Gemme:</span>
                  <span className="text-yellow-400 font-semibold">~280 MO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Valore Totale:</span>
                  <span className="text-yellow-400 font-bold">~1400 MO</span>
                </div>
                <div className="border-t border-slate-700 pt-2 mt-3">
                  <div className="text-purple-400 font-semibold mb-2">Oggetti Magici:</div>
                  <ul className="space-y-1 text-slate-400">
                    <li>• Spada Corta +1</li>
                    <li>• Amuleto +1 Iniziativa</li>
                    <li>• Conchiglia Luce</li>
                    <li>• Anello Tyr (benedetto)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Livello 2</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Oro:</span>
                  <span className="text-yellow-400 font-semibold">~1100 MO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Gemme:</span>
                  <span className="text-yellow-400 font-semibold">~350 MO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Valore Totale:</span>
                  <span className="text-yellow-400 font-bold">~2000 MO</span>
                </div>
                <div className="border-t border-slate-700 pt-2 mt-3">
                  <div className="text-purple-400 font-semibold mb-2">Oggetti Magici:</div>
                  <ul className="space-y-1 text-slate-400">
                    <li>• Bacchetta Bacche (3 cariche)</li>
                    <li>• Mantello Stealth</li>
                    <li>• Spada Argentata</li>
                    <li>• Codex Aquilonis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 border-2 border-red-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Boss (Livello 3)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Oro:</span>
                  <span className="text-yellow-400 font-semibold">~500 MO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Gemme:</span>
                  <span className="text-yellow-400 font-semibold">~100 MO</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Valore Totale:</span>
                  <span className="text-yellow-400 font-bold">~700 MO</span>
                </div>
                <div className="border-t border-red-700 pt-2 mt-3">
                  <div className="text-red-400 font-semibold mb-2">Oggetto Unico:</div>
                  <div className="bg-red-900/20 border border-red-700 rounded p-2 text-slate-300">
                    <strong>Amuleto del Sopravvissuto</strong>
                    <div className="text-xs mt-1">1/giorno: rimani a 1 HP invece di scendere a 0 HP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-2 border-yellow-700 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">💎 Totale Ecosistema 1</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-800 rounded p-4">
                <div className="text-slate-400 text-sm">Valore Totale Complessivo</div>
                <div className="text-4xl font-bold text-yellow-400">~4100 MO</div>
              </div>
              <div className="bg-slate-800 rounded p-4">
                <div className="text-slate-400 text-sm">Favore Divino Totale Possibile</div>
                <div className="text-4xl font-bold text-purple-400">500+ Favore</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
