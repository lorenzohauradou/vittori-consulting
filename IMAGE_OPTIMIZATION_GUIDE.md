# 🎨 Guida Ottimizzazione Immagini - Vittori Consulting

## ✅ Checklist Completa

### 1. Conversione Formato (30-50% riduzione dimensioni)

- [ ] Converti tutte le `.jpg/.jpeg/.png` in **WebP**
- [ ] Usa **AVIF** per immagini hero (supporto 95%+ browser moderni)
- [ ] Mantieni originali come fallback se necessario

**Tool consigliati:**

- Online: https://squoosh.app (Google)
- Desktop: ImageOptim (Mac), FileOptimizer (Windows)
- CLI: `cwebp -q 85 input.jpg -o output.webp`

### 2. Compressione e Ridimensionamento

#### Dimensioni Target per Categoria:

| Categoria       | Dimensioni Attuali | Dimensioni Ideali | Risparmio |
| --------------- | ------------------ | ----------------- | --------- |
| Logo header     | 300x300px          | 200x200px         | ~60%      |
| Team photos     | 80x80px            | 80x80px ✅        | OK        |
| Partner logos   | Variabili          | 150x60px max      | ~40%      |
| Problems images | Variabili          | 800x450px         | ~50%      |
| Hero images     | Variabili          | 1920x1080px max   | ~30%      |

#### Livelli di Qualità:

- **Loghi/Icone**: qualità 85-90 (devono essere nitidi)
- **Foto persone**: qualità 85-92 (importante per branding)
- **Background/decorazioni**: qualità 75-85 (meno critici)
- **Screenshots**: qualità 80 (testo leggibile)

### 3. Implementazione Next.js Image

#### Configurazione `next.config.ts` ✅ FATTO

```ts
images: {
  formats: ['image/avif', 'image/webp'],
  minimumCacheTTL: 60 * 60 * 24 * 365, // 1 anno di cache
}
```

#### Best Practices per Componenti:

**Per immagini ABOVE THE FOLD (visibili subito):**

```tsx
<Image
  src="/images/logo.webp"
  alt="Logo"
  width={200}
  height={200}
  priority // Carica subito!
  quality={90}
/>
```

**Per immagini BELOW THE FOLD (scroll):**

```tsx
<Image
  src="/images/team/lorenzo.webp"
  alt="Lorenzo"
  width={80}
  height={80}
  loading="lazy" // Carica quando necessario
  placeholder="blur" // Effetto sfocato durante caricamento
  quality={85}
/>
```

**Per immagini RESPONSIVE:**

```tsx
<Image
  src="/images/hero.webp"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

### 4. Placeholder Blur (UX Premium)

**Opzione A: Manuale**

```tsx
<Image
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJ..."
/>
```

**Opzione B: Automatica (consigliata)**

```bash
npm install --save-dev @plaiceholder/next
```

Poi nel tuo componente:

```tsx
import { getPlaiceholder } from "plaiceholder";

const { base64 } = await getPlaiceholder("/images/photo.jpg");
```

### 5. Lazy Loading & Intersection Observer

Next.js Image lo fa già! Ma puoi customizzarlo:

```tsx
<Image
  loading="lazy" // Default per immagini non-priority
  onLoadingComplete={(img) => {
    console.log("Immagine caricata:", img.naturalWidth);
  }}
/>
```

### 6. CDN e Caching

Vercel fa tutto automaticamente ✅:

- CDN globale distribuito
- Cache intelligente
- Ottimizzazione on-the-fly
- Formato adattivo (WebP/AVIF automatico)

**Nessuna configurazione necessaria!**

### 7. Analisi Performance

**Tools per misurare risultati:**

1. **Lighthouse** (Chrome DevTools)
   - Premi F12 → Lighthouse → Run audit
   - Target: Score 90+ su Performance

2. **WebPageTest.org**
   - Test completo con waterfall
   - Mostra dimensioni immagini reali

3. **Bundle Analyzer**
   ```bash
   npm run build
   npx @next/bundle-analyzer
   ```

## 🚀 Script Rapidi

### Converti tutte le immagini in WebP

```bash
# Rende eseguibile lo script
chmod +x scripts/optimize-images.sh

# Esegui (richiede imagemagick e cwebp)
./scripts/optimize-images.sh
```

### Installa tool di conversione

```bash
# macOS
brew install webp imagemagick

# Ubuntu/Debian
sudo apt-get install webp imagemagick

# Windows (usa Chocolatey)
choco install imagemagick
```

### Analizza dimensioni attuali

```bash
# Mostra dimensioni di tutte le immagini
find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) -exec du -h {} + | sort -rh
```

## 📊 Risultati Attesi

Dopo l'ottimizzazione completa:

| Metrica                    | Prima   | Dopo     | Miglioramento      |
| -------------------------- | ------- | -------- | ------------------ |
| Dimensione totale immagini | ~5-10MB | ~1-3MB   | **60-70%**         |
| Lighthouse Performance     | 70-80   | 90-95    | **+20 punti**      |
| Time to Interactive (TTI)  | 4-6s    | 2-3s     | **50%** più veloce |
| Largest Contentful Paint   | 3-5s    | 1.5-2.5s | **40%** più veloce |

## 🎯 Azioni Prioritarie (Quick Wins)

### 1. **Converti le 3 immagini più pesanti** (10 min)

- Identifica con: `du -h public/images/**/* | sort -rh | head -3`
- Converti in WebP su Squoosh.app
- Risparmio immediato: ~2-3MB

### 2. **Aggiungi `quality={85}` a tutte le Image** (5 min)

- Cerca: `<Image`
- Aggiungi: `quality={85}`
- Default di Next.js è 75, ma 85 è il sweet spot

### 3. **Implementa `sizes` attribute** (già fatto! ✅)

- Fondamentale per responsive
- Permette a Next.js di servire dimensioni corrette

### 4. **Abilita AVIF in config** (già fatto! ✅)

- AVIF è 20% più piccolo di WebP
- Fallback automatico a WebP per vecchi browser

## 🔗 Risorse Utili

- **Squoosh.app**: https://squoosh.app/
- **TinyPNG**: https://tinypng.com/
- **Next.js Image Docs**: https://nextjs.org/docs/api-reference/next/image
- **Web.dev Image Guide**: https://web.dev/fast/#optimize-your-images
- **Can I Use WebP**: https://caniuse.com/webp (97%+ support)
- **Can I Use AVIF**: https://caniuse.com/avif (95%+ support)

## 💡 Pro Tips

1. **Non ottimizzare troppo**: Qualità sotto 75 inizia a essere visibile
2. **SVG per loghi semplici**: Meglio di PNG/WebP se il logo è vettoriale
3. **Usa `priority` solo per hero images**: Massimo 2-3 immagini per pagina
4. **Testa su 3G**: Chrome DevTools → Network → Slow 3G
5. **Monitora Core Web Vitals**: Google Search Console → Experience → Core Web Vitals

---

**Domande? Problemi?**
Apri un issue o contatta il team dev! 🚀
