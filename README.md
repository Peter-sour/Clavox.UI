Clavox Frontend 💬
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white) ![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)


Frontend aplikasi Clavox dibangun menggunakan React + Vite + Tailwind CSS dan terintegrasi dengan Ionic + Capacitor sehingga bisa dijalankan sebagai aplikasi mobile (Android/iOS).

⚠️ Catatan: Proyek ini membutuhkan backend (Node.js + Express + Socket.IO). Silakan clone dan jalankan backend di repo terpisah.

✨ Fitur Utama

🔐 Autentikasi OTP & Nomor Telepon

💬 Chat Realtime (via Socket.IO dari backend)

🎨 UI Modern menggunakan Tailwind CSS

📱 Build ke Mobile App dengan Capacitor + Ionic

⚡ Performa cepat berkat Vite + React

📂 Struktur Proyek
frontend/
├── src/              # Kode utama frontend
├── public/
├── package.json
├── vite.config.ts
├── index.html
└── ...

🚀 Quick Start
1. Clone Repository
git clone https://github.com/Peter-sour/Clavox-frontend.git
cd Clavox-frontend

2. Install Dependencies
npm install
npm install react-router-dom
npm install react-phone-number-input libphonenumber-js --legacy-peer-deps
npm install react-otp-input

3. Tambahan Ionic & Capacitor
npm install --save-dev @capacitor/cli
npm install @capacitor/core
npm install @ionic/react @ionic/react-router ionicons

4. Jalankan Aplikasi
npm run dev   # berjalan di http://localhost:5173

5. Build & Integrasi Mobile
npm run build
npx cap sync
npx cap add android
npx cap add ios
npx cap open android   # buka di Android Studio
npx cap open ios       # buka di Xcode

🧑‍💻 Scripts
npm run dev       # mode development
npm run build     # build production
npm run preview   # preview build

🛠️ Tech Stack

React + Vite

Tailwind CSS

Ionic + Capacitor

React Router DOM

React OTP Input

React Phone Number Input

📌 Roadmap

 Push Notification (via Capacitor FCM)

 Enkripsi End-to-End (butuh update backend)

 Dark Mode

 Deploy ke Play Store & App Store

📜 Lisensi

Proyek ini dirilis di bawah MIT License.

💡 Support

Jika project ini membantu, jangan lupa beri ⭐ di repo ini!
