"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [maskStyle, setMaskStyle] = useState<CSSProperties>({});

  useEffect(() => {
    const textEl = textRef.current;
    if (!textEl) return;

    const updateMask = () => {
      const rect = textEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const style = window.getComputedStyle(textEl);
      const fontFamily = style.fontFamily.replace(/"/g, "'");
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${rect.width}' height='${rect.height}'><text x='0' y='0' font-family='${fontFamily}' font-weight='${style.fontWeight}' font-size='${parseFloat(
        style.fontSize
      )}' dominant-baseline='hanging' fill='#fff'>${text}</text></svg>`;
      const url = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
      setMaskStyle({
        WebkitMaskImage: url,
        maskImage: url,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
      });
    };

    updateMask();
    window.addEventListener("resize", updateMask);
    return () => window.removeEventListener("resize", updateMask);
  }, [text]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [active]);

  return (
    <span className="relative inline-block">
      <span
        ref={textRef}
        className={className}
        style={{ visibility: active ? "hidden" : "visible" }}
      >
        {text}
      </span>
      {active && (
        <span
          className="absolute inset-0 pointer-events-none"
          style={maskStyle}
        >
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </span>
      )}
    </span>
  );
}
