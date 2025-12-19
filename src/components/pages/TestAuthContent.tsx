import { DMOnly, PlayerSpecific } from '../auth/VisibilityControls';

export default function TestAuthContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-yellow-500">Test Sistema di Autenticazione</h1>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-slate-300">
          Questa pagina mostra come funzionano i componenti di visibilità basati sull'autenticazione.
        </p>
      </div>

      {/* Contenuto pubblico */}
      <section className="bg-slate-800 border border-slate-700 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-green-400 mb-4">✅ Contenuto Pubblico</h2>
        <p className="text-slate-300">
          Questo contenuto è visibile a tutti, sia loggati che non loggati.
        </p>
        <p className="text-slate-400 text-sm mt-2">
          Usa questo per informazioni generali sulla campagna che tutti possono vedere.
        </p>
      </section>

      {/* Contenuto solo DM */}
      <DMOnly>
        <section className="bg-purple-900/30 border border-purple-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-400 mb-4">🎭 Contenuto Solo DM</h2>
          <p className="text-slate-300">
            Questo contenuto è visibile <strong>solo al Dungeon Master</strong>.
          </p>
          <div className="mt-4 bg-purple-950/50 p-4 rounded border border-purple-800">
            <h3 className="text-lg font-semibold text-purple-300 mb-2">Note Segrete del DM:</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Il drago nascosto nella torre è in realtà un antico drago d'oro sotto incantesimo</li>
              <li>Il mercante è una spia del culto del drago</li>
              <li>La chiave del tesoro è nascosta nel libro nella biblioteca</li>
            </ul>
          </div>
          <p className="text-purple-300 text-sm mt-4 italic">
            💡 Se vedi questa sezione, sei loggato come DM!
          </p>
        </section>
      </DMOnly>

      {/* Contenuto per giocatore specifico */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-400">👤 Contenuti Giocatore-Specifici</h2>
        <p className="text-slate-300">
          Le sezioni qui sotto sono visibili solo a giocatori specifici (e sempre al DM).
          Per testare, dovrai creare altri utenti player con ID specifici.
        </p>

        {/* Esempio per giocatore 1 */}
        <PlayerSpecific playerId="a259339d-0392-4962-8a5f-0d1565e89bbe">
          <section className="bg-blue-900/30 border border-blue-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Segreto di Gandalf</h3>
            <p className="text-slate-300">
              Solo tu, Gandalf, sai che il vecchio mago della torre è in realtà tuo padre.
            </p>
            <p className="text-blue-300 text-sm mt-4 italic">
              💡 Questo è visibile solo al giocatore con ID "a259339d-0392-4962-8a5f-0d1565e89bbe" (e al DM)
            </p>
          </section>
        </PlayerSpecific>

        {/* Esempio per giocatore 2 */}
        <PlayerSpecific playerId="5156191a-0ce3-4ff9-8ab6-c50a53932570">
          <section className="bg-green-900/30 border border-green-700 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-400 mb-3">Segreto di Aragorn</h3>
            <p className="text-slate-300">
              Solo tu, Aragorn, hai ricevuto una lettera misteriosa che parla di un tesoro nascosto.
            </p>
            <p className="text-green-300 text-sm mt-4 italic">
              💡 Questo è visibile solo al giocatore con ID "5156191a-0ce3-4ff9-8ab6-c50a53932570" (e al DM)
            </p>
          </section>
        </PlayerSpecific>
      </div>

      {/* Istruzioni per l'uso */}
      <section className="bg-slate-800 border border-yellow-600 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">📖 Come Usare i Componenti</h2>

        <div className="space-y-4 text-slate-300">
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">1. DMOnly</h3>
            <pre className="bg-slate-900 p-3 rounded text-sm overflow-x-auto"><code>{`<DMOnly>
  <p>Contenuto solo per il DM</p>
</DMOnly>`}</code></pre>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-2">2. PlayerSpecific</h3>
            <pre className="bg-slate-900 p-3 rounded text-sm overflow-x-auto"><code>{`<PlayerSpecific playerId="uuid-del-giocatore">
  <p>Contenuto solo per questo giocatore</p>
</PlayerSpecific>`}</code></pre>
            <p className="text-sm text-slate-400 mt-2">
              Per ottenere l'UUID di un giocatore: vai su Supabase → Authentication → Users → copia l'ID
            </p>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-700 rounded p-4 mt-4">
            <h4 className="font-semibold text-yellow-300 mb-2">⚠️ Importante:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Il DM vede sempre tutti i contenuti (PlayerSpecific inclusi)</li>
              <li>I player vedono solo i loro contenuti specifici e quelli pubblici</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
