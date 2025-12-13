# Cave Fightwear - Premium Dövüş Sporları E-Ticaret Platformu

![Cave Fightwear](https://img.shields.io/badge/Cave-Fightwear-dc2626?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)

Premium dövüş sporları ekipmanları ve giyim e-ticaret platformu. MMA, BJJ, Muay Thai ve daha fazlası için tasarlandı.

## 🚀 Hızlı Başlangıç

### Gereksinimler

- **Node.js** 18.17 veya üzeri
- **npm** veya **yarn** veya **pnpm**
- **Git**

### Yerel Kurulum

```bash
# 1. Repoyu klonlayın
git clone https://github.com/YOUR_USERNAME/cave-fightwear.git
cd cave-fightwear

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

---

## 📦 Vercel'e Deploy Etme (Önerilen)

### Yöntem 1: Vercel Dashboard (En Kolay)

1. **Vercel hesabı oluşturun**: [vercel.com](https://vercel.com) adresine gidin
2. **GitHub'ı bağlayın**: "Continue with GitHub" seçeneğini tıklayın
3. **Repo'yu import edin**: 
   - "Add New" → "Project" tıklayın
   - GitHub repo'nuzu listeden seçin
   - "Import" tıklayın
4. **Deploy edin**: 
   - Framework otomatik olarak "Next.js" algılanacak
   - "Deploy" butonuna tıklayın
5. **Tamamlandı!** 🎉 
   - Birkaç dakika içinde siteniz `your-project.vercel.app` adresinde yayında olacak

### Yöntem 2: Vercel CLI

```bash
# 1. Vercel CLI'ı global olarak yükleyin
npm install -g vercel

# 2. Proje dizininde deploy edin
vercel

# 3. Yönergeleri takip edin:
#    - Vercel hesabınıza giriş yapın
#    - Projeyi bağlayın veya yeni proje oluşturun
#    - Deploy tamamlanana kadar bekleyin

# Production'a deploy için:
vercel --prod
```

---

## 🔧 Ortam Değişkenleri (Opsiyonel)

Production için `.env.local` dosyası oluşturabilirsiniz:

```env
# Vercel'de bu değişkenleri dashboard'dan ekleyin
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

> **Not**: Bu proje şu an için ortam değişkeni gerektirmez. İleride ödeme entegrasyonu veya API bağlantıları eklenirse gerekli olacaktır.

---

## 📁 Proje Yapısı

```
cave-fightwear/
├── public/                 # Statik dosyalar (resimler)
│   ├── cave-maske.png
│   ├── cave-maske2.jpg
│   └── cave-shirt.png
├── src/
│   ├── app/               # Next.js App Router sayfaları
│   │   ├── page.tsx       # Ana sayfa
│   │   ├── magaza/        # Mağaza sayfası
│   │   ├── urun/[slug]/   # Ürün detay sayfası
│   │   ├── hikayemiz/     # Hakkımızda sayfası
│   │   ├── iletisim/      # İletişim sayfası
│   │   └── admin/         # Admin paneli
│   ├── components/        # React bileşenleri
│   │   ├── ui/            # Shadcn/UI bileşenleri
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CartSheet.tsx
│   │   └── ProductCard.tsx
│   └── lib/               # Yardımcı dosyalar
│       ├── data.ts        # Ürün verileri
│       ├── store.ts       # Zustand store
│       └── utils.ts       # Utility fonksiyonları
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

---

## 🛠️ Teknoloji Stack

| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| Next.js | 15+ | React framework (App Router) |
| TypeScript | 5+ | Tip güvenli JavaScript |
| Tailwind CSS | 4+ | Utility-first CSS |
| Shadcn/UI | Latest | Premium UI bileşenleri |
| Framer Motion | 11+ | Animasyon kütüphanesi |
| Zustand | 5+ | State yönetimi |

---

## 📱 Sayfalar

| Sayfa | URL | Açıklama |
|-------|-----|----------|
| Ana Sayfa | `/` | Hero slider, ürünler, marka hikayesi |
| Mağaza | `/magaza` | Filtrelenebilir ürün grid'i |
| Ürün Detay | `/urun/[slug]` | Galeri, beden seçimi, sepete ekle |
| Hikayemiz | `/hikayemiz` | Marka manifestosu |
| İletişim | `/iletisim` | İletişim formu, sosyal medya |
| Admin | `/admin` | Dashboard, ürün yönetimi |

---

## 🔄 GitHub'a Push Etme

### Windows için:
```batch
github_push.bat https://github.com/YOUR_USERNAME/cave-fightwear.git
```

### Linux/Mac için:
```bash
chmod +x github_push.sh
./github_push.sh https://github.com/YOUR_USERNAME/cave-fightwear.git
```

> **Not**: İlk kez GitHub'a push ederken kimlik doğrulaması istenecektir. GitHub hesabınızla giriş yapmanız gerekecek.

---

## 🔐 GitHub Private Repo Bağlantısı

Private repo'ya push ederken:

1. **GitHub hesabınıza giriş yapmanız gerekecek**
2. **Personal Access Token (PAT) kullanmanız önerilir:**
   - GitHub → Settings → Developer Settings → Personal Access Tokens
   - "Generate new token (classic)" tıklayın
   - `repo` izinlerini seçin
   - Token'ı kopyalayın
3. **Push ederken şifre yerine token'ı girin**

---

## 📞 Sosyal Medya

- 📸 [Instagram](https://www.instagram.com/cavefw)
- 🎬 [YouTube](https://www.youtube.com/@cavefightwear)
- 🎵 [TikTok](https://www.tiktok.com/@cavefightwear)
- 🐦 [X (Twitter)](https://x.com/cavefw)
- 🔗 [Linktree](https://t.co/yK8k624DPe)

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.

---

**Cave Fightwear** - Mağaradan çıkan, zirveye yürür. 🥊
