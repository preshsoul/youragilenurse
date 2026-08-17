"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type StillItem = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
};

type StillStripProps = { items: StillItem[] };

function scrollToSlide(strip: HTMLDivElement, index: number, behavior: ScrollBehavior) {
  const slide = strip.children[index] as HTMLElement | undefined;
  if (!slide) return;

  strip.scrollTo({
    left: Math.max(0, slide.offsetLeft + slide.offsetWidth / 2 - strip.clientWidth / 2),
    behavior,
  });
}

export default function StillStrip({ items }: StillStripProps) {
  const stripRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(-1);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const syncActiveSlide = () => {
      const stripCenter = strip.scrollLeft + strip.clientWidth / 2;
      const nearestSlide = Array.from(strip.children).reduce(
        (nearest, child, index) => {
          const slide = child as HTMLElement;
          const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - stripCenter);
          return distance < nearest.distance ? { index, distance } : nearest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      );
      setActiveSlide((current) => current === nearestSlide.index ? current : nearestSlide.index);
    };

    syncActiveSlide();
    strip.addEventListener("scroll", syncActiveSlide, { passive: true });
    window.addEventListener("resize", syncActiveSlide);

    return () => {
      strip.removeEventListener("scroll", syncActiveSlide);
      window.removeEventListener("resize", syncActiveSlide);
    };
  }, [items.length]);

  const moveToSlide = (direction: -1 | 1) => {
    const strip = stripRef.current;
    if (!strip || items.length === 0) return;

    const current = activeSlide < 0 ? 0 : activeSlide;
    const next = (current + direction + items.length) % items.length;
    setActiveSlide(next);
    scrollToSlide(strip, next, "smooth");
  };

  return (
    <div className="still-strip-shell">
      <div ref={stripRef} className="still-strip" id="still-strip" aria-label="Stills from the portfolio" aria-live="off">
        {items.map((item) => (
          <figure className="still-strip-card" key={item.src}>
            <Image src={item.src} alt={item.alt} width={item.width} height={item.height} unoptimized sizes="(max-width: 640px) 70vw, (max-width: 980px) 34vw, 21vw" />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
      {items.length > 1 && <div className="still-strip-controls"><button type="button" onClick={() => moveToSlide(-1)} aria-controls="still-strip" aria-label="Show previous still">←</button><button type="button" onClick={() => moveToSlide(1)} aria-controls="still-strip" aria-label="Show next still">→</button></div>}
      <p className="still-strip-hint">Stills from the work: swipe, scroll or use the arrow buttons to explore.</p>
    </div>
  );
}
