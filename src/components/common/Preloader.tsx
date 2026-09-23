import React, { useEffect, useState } from 'react';
import heroMaskImg from '../../assets/hero_mask.jpg';
import frame0Img from '../../assets/turntable/frame_0.jpg';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  useEffect(() => {
    let current = 0;

    // Preload hero images (real identity + superhero mask)
    const heroAssets = [frame0Img, heroMaskImg];
    const totalAssets = heroAssets.length;
    let loaded = 0;

    heroAssets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        const targetPercent = Math.min(100, Math.round((loaded / totalAssets) * 100));
        if (targetPercent > current) {
          current = targetPercent;
          setProgress(current);
        }
      };
      img.onerror = () => {
        loaded++;
        const targetPercent = Math.min(100, Math.round((loaded / totalAssets) * 100));
        if (targetPercent > current) {
          current = targetPercent;
          setProgress(current);
        }
      };
    });

    // Interval fallback to guarantee loader completes smoothly even on slow networks
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return Math.min(100, prev + 12);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030308] text-white transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-sm px-6 text-center space-y-6">
        {/* Monogram */}
        <div className="font-editorial text-4xl font-extrabold tracking-widest text-white flex items-center justify-center gap-1">
          <span>ADIL</span>
          <span className="text-[#ff2a55] animate-pulse">.</span>
        </div>

        {/* Minimal Kicker */}
        <div className="font-mono text-xs text-white/50 tracking-[0.25em] uppercase">
          Loading 360° experience
        </div>

        {/* Minimal Progress Bar */}
        <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#ff2a55] to-rose-400 transition-all duration-300 ease-out shadow-[0_0_12px_#ff2a55]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Numeric Telemetry */}
        <div className="flex items-center justify-between text-[11px] font-mono text-white/40">
          <span>FRAME_ASSETS_SYNC</span>
          <span className="text-[#ff2a55] font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
