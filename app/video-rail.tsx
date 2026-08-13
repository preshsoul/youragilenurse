"use client";

import { useEffect, useRef, useState } from "react";
import AutoplayVideo from "./autoplay-video";

type VideoRailItem = {
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
  const slides = items.length > 1 ? [...items, items[0]] : items;

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
  }, [slides.length]);

  useEffect(() => {
    if (items.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let resetTimer: number | undefined;
    const timer = window.setInterval(() => {
      const rail = railRef.current;
      if (!rail) return;

      const current = activeSlide < 0 ? 0 : activeSlide;
      const next = current + 1;

      // Scroll only the rail, placing the selected clip precisely at its centre.
      scrollToSlide(rail, next, "smooth");

      if (next === items.length) {
        resetTimer = window.setTimeout(() => {
          const resetRail = railRef.current;
          if (resetRail) scrollToSlide(resetRail, 0, "auto");
        }, 700);
      }
    }, 5000);

    return () => {
      window.clearInterval(timer);
      if (resetTimer) window.clearTimeout(resetTimer);
    };
  }, [activeSlide, items.length]);

  return (
    <div className="video-rail-shell">
      <div ref={railRef} className="video-rail" aria-label="Selected UGC video samples" aria-live="off">
        {slides.map((item, index) => (
          <figure className="video-rail-card" key={`${item.id}-${index}`} aria-hidden={index === items.length || undefined}>
            <AutoplayVideo src={item.src} poster={item.poster} label={`${item.title} muted video preview`} captions={item.captions} active={index === activeSlide} />
            <figcaption><span>{String((index % items.length) + 1).padStart(2, "0")}</span>{item.label}</figcaption>
          </figure>
        ))}
      </div>
      <p className="video-rail-hint">Moving portfolio previews — swipe or scroll to explore.</p>
    </div>
  );
}
