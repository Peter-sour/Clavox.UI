# Clavox Frontend 💬🎨

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)

Frontend aplikasi chat real-time **Clavox** yang dibangun dengan **React + Vite + Tailwind CSS**. Terintegrasi dengan **Ionic + Capacitor** untuk deployment ke **mobile app (Android/iOS)**.

> **Note**: Ini adalah repository frontend. Backend API tersedia di [Clavox Backend](link-ke-backend-repo)

---

## ✨ Fitur Frontend

- 🎨 **Modern UI/UX** dengan Tailwind CSS
- 📱 **Responsive Design** - Mobile First
- ⚡ **Fast Development** dengan Vite Hot Reload
- 🔐 **Phone Authentication** dengan OTP Input
- 💬 **Real-time Chat Interface** 
- 📱 **Mobile App Ready** - Ionic + Capacitor
- 🌙 **Dark Mode Support** (Coming Soon)
- 🔄 **Socket.IO Integration** untuk real-time messaging

---

## 📂 Struktur Frontend

```
clavox-frontend/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/           # Komponen UI
│   │   ├── Auth/
│   │   ├── Chat/
│   │   └── Common/
│   ├── pages/               # Halaman utama
│   │   ├── Login.jsx
│   │   ├── Chat.jsx
│   │   └── Profile.jsx
│   ├── hooks/               # Custom hooks
│   ├── services/            # API & Socket services
│   ├── utils/               # Helper functions
│   ├── styles/              # Global styles
│   ├── App.jsx
│   └── main.jsx
├── capacitor.config.ts      # Konfigurasi Capacitor
├── ionic.config.json        # Konfigurasi Ionic
├── tailwind.config.js       # Konfigurasi Tailwind
├── vite.config.js          # Konfigurasi Vite
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16+)
- npm atau yarn
- Android Studio (untuk Android build)
- Xcode (untuk iOS build - Mac only)

### 1. Clone Repository

```bash
git clone https://github.com/Peter-sour/clavox-frontend.git
cd clavox-frontend
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install

# React Router
npm install react-router-dom

# Phone number input
npm install react-phone-number-input libphonenumber-js --legacy-peer-deps

# OTP input
npm install react-otp-input

# Ionic & Capacitor
npm install @ionic/react @ionic/react-router ionicons
npm install @capacitor/core
npm install --save-dev @capacitor/cli

# Socket.IO client
npm install socket.io-client
```

### 3. Environment Setup

Buat file `.env` di root project:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

### 4. Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

---

## 📱 Mobile Development

### Setup Capacitor

```bash
# Inisialisasi Capacitor
npx cap init

# Build web assets
npm run build

# Sync dengan native platforms
npx cap sync
```

### Add Mobile Platforms

```bash
# Add Android
npx cap add android

# Add iOS (Mac only)
npx cap add ios
```

### Build & Run Mobile App

```bash
# Build untuk production
npm run build

# Sync assets ke native
npx cap sync

# Open di Android Studio
npx cap open android

# Open di Xcode (Mac only)  
npx cap open ios
```

---

## 🧑‍💻 Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint check
npm run lint:fix     # Fix ESLint issues
```

---

## 🔧 Konfigurasi

### Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
        }
      }
    },
  },
  plugins: [],
}
```

### Vite Config

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})
```

---

## 🌐 API Integration

### Socket.IO Setup

```javascript
// src/services/socket.js
import io from 'socket.io-client';

const socket = io(import.meta.env.VITE_SOCKET_URL);

export default socket;
```

### API Service

```javascript
// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiService = {
  async sendOTP(phoneNumber) {
    // API call logic
  },
  
  async verifyOTP(phoneNumber, otp) {
    // API verification logic  
  }
};
```

---

## 📱 Mobile Features

### Push Notifications

```bash
npm install @capacitor/push-notifications
```

### Native Device Access

```bash
npm install @capacitor/camera
npm install @capacitor/filesystem
npm install @capacitor/haptics
```

---

## 🎨 UI Components

### Reusable Components

- `Button` - Custom button dengan variants
- `Input` - Input field dengan validation
- `Modal` - Modal component
- `ChatBubble` - Chat message bubble
- `PhoneInput` - Phone number input
- `OTPInput` - OTP verification input

---

## 📌 Roadmap Frontend

- [ ] Dark Mode Implementation
- [ ] Push Notification UI
- [ ] Chat Encryption Indicator
- [ ] File Upload Interface
- [ ] Voice Message Recording
- [ ] Chat Export Feature
- [ ] Multiple Theme Support
- [ ] PWA Implementation

---

## 🐛 Troubleshooting

### Common Issues

1. **Build Error**: Pastikan semua dependencies terinstall dengan benar
2. **Socket Connection**: Periksa VITE_SOCKET_URL di file .env
3. **Mobile Build**: Pastikan Android Studio/Xcode sudah terinstall
4. **Phone Input**: Gunakan flag `--legacy-peer-deps` jika ada conflict

### Debug Mode

```bash
# Enable debug untuk Socket.IO
localStorage.debug = 'socket.io-client:socket';
```

---

## 🤝 Contributing

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool  
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Ionic](https://ionicframework.com/) - Mobile UI Components
- [Capacitor](https://capacitorjs.com/) - Native Mobile Runtime

---

## 💡 Support

Jika project ini membantu, jangan lupa beri ⭐ di repo ini!

**Link Repository:**
- Frontend: [Clavox Frontend](https://github.com/Peter-sour/clavox-frontend)
- Backend: [Clavox Backend](https://github.com/Peter-sour/clavox-backend)

---

**Made with ❤️ by [Peter-sour](https://github.com/Peter-sour)**
