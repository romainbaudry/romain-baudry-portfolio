"use client";

import { useEffect, useRef } from "react";

interface VideoTextProps {
  text: string;
  active: boolean;
  videoSrc: string;
  className?: string;
}

export default function VideoText({
  text,
  active,
  videoSrc,
  className = "",
}: VideoTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const textEl = textRef.current;
    if (!canvas || !video || !textEl) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (!active) {
      video.pause();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let rafId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = textEl.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    resize();

    const style = window.getComputedStyle(textEl);
    const fontString = `${style.fontWeight} ${
      parseFloat(style.fontSize) * dpr
    }px ${style.fontFamily}`;

    const draw = () => {
      if (canvas.width && canvas.height) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.globalCompositeOperation = "source-over";
        ctx.font = fontString;
        ctx.textBaseline = "top";
        ctx.fillStyle = "#000";
        ctx.fillText(text, 0, 0);

        const vw = video.videoWidth;
        const vh = video.videoHeight;
        if (vw && vh) {
          ctx.globalCompositeOperation = "source-in";
          const scale = Math.max(canvas.width / vw, canvas.height / vh);
          const dw = vw * scale;
          const dh = vh * scale;
          const dx = (canvas.width - dw) / 2;
          const dy = (canvas.height - dh) / 2;
          ctx.drawImage(video, dx, dy, dw, dh);
        }
      }
      rafId = requestAnimationFrame(draw);
    };

    video.play().catch(() => {});
    rafId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
      video.pause();
    };
  }, [active, text]);

  return (
    <span className="relative inline-block">
      <span
        ref={textRef}
        className={className}
        style={{ visibility: active ? "hidden" : "visible" }}
      >
        {text}
      </span>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: active ? 1 : 0 }}
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute w-px h-px opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </span>
  );
}
