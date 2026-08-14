"use client";

import { useMemo, useState } from "react";
import AutoplayVideo from "./autoplay-video";
import type { PortfolioCategory, VideoAsset } from "./media-register";

type Filter = { id: "all" | PortfolioCategory; label: string };

const filters: Filter[] = [
  { id: "all", label: "All" },
  { id: "on-camera", label: "On camera" },
  { id: "product-demo", label: "Product demo" },
  { id: "product-detail", label: "Product detail" },
  { id: "lifestyle", label: "Lifestyle" },
];

type PortfolioGridProps = { videos: VideoAsset[] };

export default function PortfolioGrid({ videos }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter["id"]>("all");
  const visibleVideos = useMemo(
    () => activeFilter === "all"
      ? videos
      : videos.filter((video) => video.categories?.includes(activeFilter)),
    [activeFilter, videos],
  );

  return (
    <>
      <div className="filter-row" aria-label="Filter portfolio videos">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter.id}
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="work-grid" aria-live="polite">
        {visibleVideos.map((video, index) => (
          <article className={`work-card work-card-${index + 1}`} key={video.id}>
            <div className="work-video">
              <AutoplayVideo
                controls
                src={video.src}
                poster={video.poster}
                label={`${video.title} portfolio video`}
                captions={video.id === "makeup-routine" ? "/media/captions/makeup-routine.vtt" : undefined}
              />
              <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="preview-tag">Muted preview</span>
            </div>
            <div className="work-copy"><p>{video.creativeFunction}</p><h3>{video.title}</h3><span className="duration">{video.duration}</span></div>
          </article>
        ))}
      </div>
    </>
  );
}
