"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { VideoRailItem } from "./video-rail";

const VideoRail = dynamic(() => import("./video-rail"), {
  ssr: false,
  loading: () => <div className="video-rail-placeholder" aria-hidden="true" />,
});

type DeferredVideoRailProps = {
  items: VideoRailItem[];
};

export default function DeferredVideoRail({ items }: DeferredVideoRailProps) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "500px 0px" },
    );

    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  return <div ref={anchorRef}>{shouldLoad ? <VideoRail items={items} /> : <div className="video-rail-placeholder" aria-hidden="true" />}</div>;
}
