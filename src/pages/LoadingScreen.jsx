import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { SplashScreen } from '@capacitor/splash-screen';
import Logo from '../assets/Logo.png';

const ClavoxLoadingScreen = ({ onLoadingComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const history = useHistory();

  useEffect(() => {
    // Sembunyikan Splash Screen saat loading React mulai
    SplashScreen.hide();

    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            history.push("/login"); // pindah ke halaman login
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [history, onLoadingComplete]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#1C1A1A]">
      {/* Konten Logo & Teks */}
      <div className="flex flex-col items-center gap-y-8">
        {/* Logo */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
          <img
            src={Logo}
            alt="Clavox Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Nama Aplikasi */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#E0E0E0]">
          Clavox
        </h1>
      </div>

      {/* Spinner */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        {loadingProgress < 100 && (
          <div className="w-12 h-12 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
        )}
      </div>
    </div>
  );
};

export default ClavoxLoadingScreen;
