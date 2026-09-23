import React, { useEffect, useRef, useState, useCallback } from 'react';

interface TurntableCanvasProps {
  progress: number; // 0 to 1
  onInteractiveScrub?: (newProgress: number) => void;
  className?: string;
}

const TOTAL_FRAMES = 9;
const FRAME_PATHS = Array.from({ length: TOTAL_FRAMES }, (_, i) => `/turntable/frame_${i}.jpg`);

export const TurntableCanvas: React.FC<TurntableCanvasProps> = ({
  progress,
  onInteractiveScrub,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isReady, setIsReady] = useState<boolean>(false);

  // Drag state
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const startProgress = useRef<number>(0);

  // 1. Preload all turntable frames
  useEffect(() => {
    let mounted = true;
    let count = 0;
    const loadedImgs: HTMLImageElement[] = [];

    FRAME_PATHS.forEach((path, idx) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        if (!mounted) return;
        count++;
        if (count === TOTAL_FRAMES) {
          setIsReady(true);
        }
      };
      img.onerror = () => {
        console.warn(`Failed to load frame ${path}, fallback to frame_0.jpg`);
        if (!mounted) return;
        count++;
        if (count === TOTAL_FRAMES) {
          setIsReady(true);
        }
      };
      loadedImgs[idx] = img;
    });

    imagesRef.current = loadedImgs;

    return () => {
      mounted = false;
    };
  }, []);

  // 2. Render method for dual-buffer alpha crossfade
  const drawFrame = useCallback((prog: number) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate frame indices
    const clampedProg = Math.max(0, Math.min(1, prog));
    const frameFloat = clampedProg * (TOTAL_FRAMES - 1);
    const i0 = Math.floor(frameFloat);
    const i1 = Math.min(TOTAL_FRAMES - 1, Math.ceil(frameFloat));
    const blend = frameFloat - i0;

    const img0 = imagesRef.current[i0];
    const img1 = imagesRef.current[i1];

    if (!img0 || !img0.complete) return;

    // Calculate dimensions: subject occupies ~78-84% of viewport height
    const imgAspect = img0.naturalWidth && img0.naturalHeight 
      ? img0.naturalWidth / img0.naturalHeight 
      : 3 / 4;

    const targetHeight = height * 0.82;
    const targetWidth = targetHeight * imgAspect;
    const x = (width - targetWidth) / 2;
    const y = (height - targetHeight) / 2 + (height * 0.02);

    // Subtle atmospheric red backlight glow
    const glowGradient = ctx.createRadialGradient(
      x + targetWidth * 0.5,
      y + targetHeight * 0.35,
      targetWidth * 0.1,
      x + targetWidth * 0.5,
      y + targetHeight * 0.4,
      targetHeight * 0.55
    );
    glowGradient.addColorStop(0, 'rgba(255, 42, 85, 0.22)');
    glowGradient.addColorStop(0.5, 'rgba(225, 29, 72, 0.06)');
    glowGradient.addColorStop(1, 'rgba(3, 3, 8, 0)');

    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(x + targetWidth * 0.5, y + targetHeight * 0.4, targetHeight * 0.55, 0, Math.PI * 2);
    ctx.fill();

    // High quality filtering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Draw primary base frame
    ctx.globalAlpha = 1.0;
    ctx.drawImage(img0, x, y, targetWidth, targetHeight);

    // Crossfade adjacent frame if in between steps
    if (blend > 0.005 && i0 !== i1 && img1 && img1.complete) {
      ctx.globalAlpha = blend;
      ctx.drawImage(img1, x, y, targetWidth, targetHeight);
    }

    ctx.globalAlpha = 1.0;
  }, []);

  // 3. Handle window resize and high-DPI scaling
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    drawFrame(progress);
  }, [drawFrame, progress]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // 4. Redraw whenever progress changes or images finish loading
  useEffect(() => {
    drawFrame(progress);
  }, [progress, isReady, drawFrame]);

  // 5. Interactive Mouse & Touch Drag Scrubbing
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startProgress.current = progress;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDragging.current || !onInteractiveScrub) return;
    const deltaX = e.clientX - startX.current;
    // 300px drag = 1 full rotation
    const progressDelta = (deltaX / 360);
    let newProgress = (startProgress.current + progressDelta) % 1;
    if (newProgress < 0) newProgress += 1;
    onInteractiveScrub(newProgress);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDragging.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      data-cursor="EXPLORE"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain touch-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      />

      {/* Fallback image if canvas or WebGL unavailable */}
      <noscript>
        <img
          src="/turntable/frame_0.jpg"
          alt="Mohammed Adil portrait"
          className="w-auto h-[80vh] object-contain mx-auto"
        />
      </noscript>
    </div>
  );
};
