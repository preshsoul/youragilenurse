"use client";

import { useEffect, useRef, useState } from "react";
import AutoplayVideo from "./autoplay-video";

export type VideoRailItem = {
  id: string;
  src: string;
  poster?: string;
  title: string;
  label: string;
  captions?: string;
};

type VideoRailProps = { items: VideoRailItem[] };

function scrollToSlide(rail: HTMLDivElement, index: number, behavior: ScrollBehavior) {
  const slide = rail.children[index] as HTMLElement | undefined;
  if (!slide) return;

  rail.scrollTo({
    left: Math.max(0, slide.offsetLeft + slide.offsetWidth / 2 - rail.clientWidth / 2),
    behavior,
  });
}

export default function VideoRail({ items }: VideoRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(-1);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const syncActiveSlide = () => {
      const railCenter = rail.scrollLeft + rail.clientWidth / 2;
      const nearestSlide = Array.from(rail.children).reduce(
        (nearest, child, index) => {
          const slide = child as HTMLElement;
          const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - railCenter);
          return distance < nearest.distance ? { index, distance } : nearest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      );
      setActiveSlide((current) => current === nearestSlide.index ? current : nearestSlide.index);
    };

    syncActiveSlide();
    rail.addEventListener("scroll", syncActiveSlide, { passive: true });
    window.addEventListener("resize", syncActiveSlide);

    return () => {
      rail.removeEventListener("scroll", syncActiveSlide);
      window.removeEventListener("resize", syncActiveSlide);
    };
  }, [items.length]);

  const moveToSlide = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail || items.length === 0) return;

    const current = activeSlide < 0 ? 0 : activeSlide;
    const next = (current + direction + items.length) % items.length;
    setActiveSlide(next);
    scrollToSlide(rail, next, "smooth");
  };

  return (
    <div className="video-rail-shell">
      <div ref={railRef} className="video-rail" id="video-rail" aria-label="Selected UGC video previews" aria-live="off">
        {items.map((item, index) => (
          <figure className="video-rail-card" key={item.id} aria-hidden="true">
            <AutoplayVideo src={item.src} poster={item.poster} label={`${item.title} muted video preview`} captions={item.captions} active={index === activeSlide} />
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</figcaption>
          </figure>
        ))}
      </div>
      {items.length > 1 && <div className="video-rail-controls"><button type="button" onClick={() => moveToSlide(-1)} aria-controls="video-rail" aria-label="Show previous video preview">←</button><button type="button" onClick={() => moveToSlide(1)} aria-controls="video-rail" aria-label="Show next video preview">→</button></div>}
      <p className="video-rail-hint">Portfolio previews — swipe, scroll or use the arrow buttons to explore.</p>
    </div>
  );
}
