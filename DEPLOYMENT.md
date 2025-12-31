# Deployment Guide

## Vercel Deployment

Questo progetto è deployato su Vercel. Segui queste linee guida per evitare problemi comuni.

### Configurazione Richiesta

#### Environment Variables
Le seguenti variabili d'ambiente devono essere configurate su Vercel:

```
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**IMPORTANTE**: Assicurati che tutte le variabili siano abilitate per **Production**, **Preview** e **Development**.

#### Framework Settings
- **Framework Preset**: Astro
- **Build Command**: `npm run build` (default)
- **Output Directory**: `dist` (default)
- **Root Directory**: `.` (default)

### Problemi Comuni e Soluzioni

#### ❌ Problema: I deploy hanno successo ma il sito mostra contenuti vecchi/cachati

**Causa**: La cartella `.vercel/` era tracciata in Git e committata nel repository. Vercel usava i file pre-generati invece di fare un build pulito.

**Soluzione**:
1. Assicurati che `.vercel/` sia nel `.gitignore`
2. Rimuovi la cartella dal repository:
   ```bash
   git rm -r --cached .vercel
   git commit -m "Remove .vercel folder from git tracking"
   git push
   ```
3. Se il problema persiste, elimina il progetto da Vercel e ricrealo da zero

**Prevenzione**: Il file `.gitignore` ora include:
```
dist/
.vercel/
```

Il file `.vercelignore` fornisce protezione aggiuntiva.

#### ❌ Problema: Il menu DM non appare dopo il login

**Causa**: Problemi di autenticazione o caching del browser.

**Soluzione**:
1. Verifica che le environment variables Supabase siano configurate correttamente
2. Controlla che l'utente abbia `role='dm'` nella tabella `profiles` di Supabase
3. Prova in modalità incognito per escludere problemi di cache del browser
4. Controlla la console del browser per errori

### Best Practices

1. **Non committare mai file di build**: `dist/` e `.vercel/` devono sempre essere in `.gitignore`
2. **Testa in locale prima**: Esegui `npm run build` localmente per verificare che il build funzioni
3. **Usa Incognito per testare**: Dopo un deploy, testa sempre in modalità incognito per evitare cache del browser
4. **Variabili d'ambiente**: Verifica sempre che le env vars siano configurate correttamente su Vercel
5. **Redeploy con cache clear**: Se sospetti problemi di cache, usa l'opzione "Redeploy" su Vercel e **deseleziona** "Use existing Build Cache"

### Workflow Consigliato

1. Sviluppa e testa in locale (`npm run dev`)
2. Testa il build locale (`npm run build`)
3. Committi e pusha su GitHub
4. Vercel deploya automaticamente
5. Testa in modalità incognito sul dominio Vercel
6. Se ci sono problemi, controlla i log di build su Vercel Dashboard

### Link Utili

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Astro Deployment Docs](https://docs.astro.build/en/guides/deploy/vercel/)
- [Supabase Dashboard](https://app.supabase.com)

---

**Ultimo aggiornamento**: 31 Dicembre 2025
**Issue risolto**: Rimozione della cartella `.vercel/` dal repository per risolvere problemi di caching durante il deployment
