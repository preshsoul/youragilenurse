"use client";

import { useEffect, useRef, useState } from "react";

type AutoplayVideoProps = {
  src: string;
  poster?: string;
  label: string;
  captions?: string;
  controls?: boolean;
  active?: boolean;
};

type NetworkInformation = {
  effectiveType?: string;
  saveData?: boolean;
};

function shouldAvoidAutoplayOnCurrentConnection() {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  return connection?.saveData || ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "");
}

export default function AutoplayVideo({
  src,
  poster,
  label,
  captions,
  controls = false,
  active = true,
}: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setShouldLoad(true);
        } else {
          video.pause();
        }
      },
      { rootMargin: "80px 0px", threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!active || prefersReducedMotion || shouldAvoidAutoplayOnCurrentConnection()) {
      video.pause();
      return;
    }

    video.muted = true;
    void video.play().catch(() => {
      // Device low-power/data-saving modes can refuse autoplay. The poster and
      // native controls remain available for an intentional play instead.
    });
  }, [active, shouldLoad]);

  return (
    <video
      ref={videoRef}
      controls={controls}
      loop
      muted
      playsInline
      poster={poster}
      preload={shouldLoad ? "metadata" : "none"}
      aria-label={label}
    >
      {shouldLoad && <source src={src} type="video/mp4" />}
      {captions && (
        <track
          src={captions}
          kind="captions"
          srcLang="en"
          label="English captions"
          default
        />
      )}
    </video>
  );
}
