# Google Analytics Integration - Semindo Project

## Overview
Proyek Semindo telah terintegrasi dengan Google Analytics untuk tracking dan analisis penggunaan website. Implementasi ini menggunakan environment variables untuk keamanan dan fleksibilitas konfigurasi.

## Struktur Integrasi

### 1. File Konfigurasi
- **`src/lib/analytics.ts`** - Konfigurasi utama Google Analytics
- **`src/hooks/useAnalytics.ts`** - Custom hooks untuk tracking
- **`src/types/gtag.d.ts`** - Type definitions untuk TypeScript
- **`.env`** - Environment variables (tidak di-commit ke repository)
- **`.env.example`** - Template environment variables

### 2. Environment Variables
```bash
# .env
VITE_GA_MEASUREMENT_ID=G-BT9YRBJVV3

# .env.example (template)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Custom Hooks
- **`useAnalytics()`** - Automatic page view tracking
- **`useTrackEvent()`** - Manual event tracking

### 4. Type Definitions
File `src/types/gtag.d.ts` menyediakan type safety untuk Google Analytics.

## Fitur yang Tersedia

### ✅ Automatic Page Tracking
- Semua perpindahan halaman otomatis ter-track
- Menggunakan React Router DOM integration

### ✅ Custom Event Tracking
- Button clicks
- Form submissions  
- File downloads
- Outbound link clicks

### ✅ Manual Event Tracking
```typescript
import { trackEvent } from '@/lib/analytics';

// Track custom event
trackEvent('button_click', 'navigation', 'contact_us');
```

## Penggunaan dalam Komponen React

### Automatic Tracking (sudah aktif)
```typescript
// Sudah terintegrasi di App.tsx
import { useAnalytics } from '@/hooks/useAnalytics';

function App() {
  useAnalytics(); // Otomatis track page views
  return <Router>...</Router>;
}
```

### Manual Event Tracking
```typescript
import { useTrackEvent } from '@/hooks/useAnalytics';

function ContactButton() {
  const trackEvent = useTrackEvent();
  
  const handleClick = () => {
    trackEvent('button_click', 'contact', 'header_contact_button');
    // Handle button click
  };
  
  return <button onClick={handleClick}>Contact Us</button>;
}
```

## Halaman yang Ter-track Otomatis

1. **Home** (`/`) - Index.tsx
2. **Tentang Kami** (`/tentang-kami`) - TentangKami.tsx
3. **Layanan Konsultasi** (`/layanan-konsultasi`) - LayananKonsultasi.tsx
4. **Self Assessment** (`/self-assessment`) - SelfAssessment.tsx
5. **Learning Hub** (`/learning-hub`) - LearningHub.tsx
6. **Marketplace** (`/marketplace`) - Marketplace.tsx
7. **Financing Hub** (`/financing-hub`) - FinancingHub.tsx
8. **Export Hub** (`/export-hub`) - ExportHub.tsx
9. **Community** (`/community`) - Community.tsx
10. **Blog** (`/blog`) - Blog.tsx
11. **Contact** (`/contact`) - Contact.tsx

## Setup dan Konfigurasi

### 1. Environment Variables
```bash
# Copy template
cp .env.example .env

# Edit .env dengan tracking ID yang benar
VITE_GA_MEASUREMENT_ID=G-YOUR-TRACKING-ID
```

### 2. Verifikasi Development
```bash
npm run dev
# Buka browser developer tools
# Check Network tab untuk requests ke google-analytics.com
# Check Console untuk GA debug messages
```

### 3. Verifikasi Production
- Deploy ke Netlify
- Gunakan Google Analytics Real-Time reports
- Check Google Tag Assistant Chrome extension

## Keamanan dan Privacy

### ✅ Environment Variables
- Tracking ID disimpan di `.env` (tidak di-commit)
- Template tersedia di `.env.example`
- Nilai default menggunakan placeholder `G-XXXXXXXXXX`

### ✅ Privacy Compliance
- Implementasi mengikuti best practices
- Tidak mengumpulkan PII secara otomatis
- Compatible dengan GDPR requirements

### ✅ Security Best Practices
- Tracking ID tidak hardcoded di source code
- Environment variables untuk konfigurasi sensitif
- Type safety dengan TypeScript

## Deployment ke Netlify

### Environment Variables di Netlify
1. Masuk ke Netlify Dashboard
2. Pilih site Semindo
3. Go to **Site settings** > **Environment variables**
4. Tambahkan:
   - **Key**: `VITE_GA_MEASUREMENT_ID`
   - **Value**: `G-BT9YRBJVV3`

### Build Commands
```bash
# Netlify akan otomatis menggunakan environment variables
npm run build
```

### 7. Privacy Compliance
- Pastikan untuk menambahkan Privacy Policy
- Implementasikan cookie consent jika diperlukan
- Pertimbangkan GDPR compliance untuk user Eropa

### 8. Troubleshooting

#### Jika tracking tidak bekerja:
1. Periksa console browser untuk error
2. Pastikan measurement ID benar
3. Periksa network requests ke Google Analytics
4. Pastikan tidak ada ad blocker yang memblokir

#### Common Issues:
- **Script blocked**: Ad blocker atau privacy extension
- **No data in GA**: Tunggu 24-48 jam untuk data muncul
- **TypeScript errors**: Pastikan type definitions sudah benar

## Maintenance
- Update measurement ID jika diperlukan di `src/lib/analytics.ts`
- Monitor GA dashboard untuk memastikan data masuk
- Update tracking events sesuai kebutuhan bisnis