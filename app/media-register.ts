export type RightsStatus = "cleared" | "hold" | "confirm";
export type PortfolioCategory = "on-camera" | "product-demo" | "lifestyle" | "product-detail";

export type PortraitAsset = {
  id: string;
  src: string;
  alt: string;
  role: string;
  public: boolean;
};

export type VideoAsset = {
  id: string;
  title: string;
  src: string;
  poster?: string;
  duration: string;
  dimensions: string;
  relationship: string;
  creativeFunction: string;
  rightsStatus: RightsStatus;
  public: boolean;
  originalLinks?: {
    tiktok?: string;
    instagram?: string;
  };
  holdReason?: string;
  categories?: PortfolioCategory[];
};

export const portraits: PortraitAsset[] = [
  {
    id: "hero-fuchsia-close",
    src: "/media/portraits/monisola-laughing-fuchsia-close.jpg",
    alt: "Monisola Adejo laughing outdoors in a vivid fuchsia dress.",
    role: "Hero image and primary warmth signal",
    public: true,
  },
  {
    id: "yellow-conversation",
    src: "/media/portraits/monisola-yellow-close.jpg",
    alt: "Monisola smiling at the camera outdoors in a yellow top.",
    role: "Conversational enquiry portrait",
    public: true,
  },
  {
    id: "nursing-context",
    src: "/media/portraits/monisola-scrubs-full.jpg",
    alt: "Monisola standing outdoors in pink nursing scrubs.",
    role: "Behind-the-brief portrait; personal identity context",
    public: true,
  },
  {
    id: "fuchsia-editorial-full",
    src: "/media/portraits/monisola-fuchsia-full.jpg",
    alt: "Monisola standing confidently outdoors in a vivid fuchsia dress.",
    role: "Later editorial transition or enquiry image",
    public: true,
  },
];

export const videos: VideoAsset[] = [
  {
    id: "littmann-story",
    title: "Littmann story",
    src: "media_audit/controlled-production-copies/littmann-story-hold.mp4",
    duration: "21.57 seconds",
    dimensions: "576 x 1024",
    relationship: "organic social; relationship unconfirmed",
    creativeFunction: "Story sequencing and long-term product ownership",
    rightsStatus: "hold",
    public: false,
    holdReason:
      "Combines regulated nursing identity with a strong product recommendation.",
    originalLinks: {
      tiktok: "https://vt.tiktok.com/ZS4wSL2PT/",
      instagram: "https://www.instagram.com/reel/Dbg_sjzAxIQ/?igsh=aGh2aTJoYjR0bjM1",
    },
  },
  {
    id: "healthcare-hand-cream",
    title: "Healthcare-context hand-cream footage",
    src: "media_audit/controlled-production-copies/healthcare-hand-cream-hold.mp4",
    duration: "40.97 seconds",
    dimensions: "576 x 1024",
    relationship: "relationship and public-post match unconfirmed",
    creativeFunction: "Direct-to-camera workplace routine",
    rightsStatus: "hold",
    public: false,
    holdReason:
      "Healthcare setting and social-link relationship need confirmation before display.",
  },
  {
    id: "nurse-bag-sequence",
    title: "A work bag where every item has a reason.",
    src: "/media/videos/nurse-bag-sequence-v2.mp4",
    poster: "/media/posters/nurse-bag-poster.jpg",
    duration: "21.93 seconds",
    dimensions: "576 x 1024",
    relationship: "organic social",
    creativeFunction: "Product handling and ordered sequencing",
    rightsStatus: "cleared",
    public: true,
    categories: ["on-camera", "product-demo", "lifestyle"],
    originalLinks: {
      tiktok: "https://vt.tiktok.com/ZS4wBXxmg/",
      instagram: "https://www.instagram.com/reel/DbtjkA8iP57/?igsh=NDZuaDgwb2hmdjZw",
    },
  },
  {
    id: "makeup-routine",
    title: "Ten minutes. A full face. Somewhere to be.",
    src: "/media/videos/makeup-routine-original-v2.mp4",
    poster: "/media/posters/makeup-routine-poster.jpg",
    duration: "82.33 seconds",
    dimensions: "464 x 832",
    relationship: "organic social; portfolio edit pending",
    creativeFunction: "Direct-to-camera tutorial and practical routine framing",
    rightsStatus: "cleared",
    public: true,
    categories: ["on-camera", "product-demo", "lifestyle"],
    originalLinks: {
      tiktok: "https://vt.tiktok.com/ZS4wBMBnW/",
      instagram: "https://www.instagram.com/reel/Dbp7IJCgZuF/?igsh=ZjIwaWUybzFkM3Az",
    },
  },
  {
    id: "figs-scrubs-unboxing",
    title: "From unboxing to work-ready.",
    src: "/media/videos/figs-scrubs-unboxing-v2.mp4",
    poster: "/media/posters/figs-scrubs-unboxing-poster.jpg",
    duration: "49.13 seconds",
    dimensions: "576 x 1024",
    relationship: "creator-owned portfolio footage",
    creativeFunction: "Unboxing, garment detail and an in-use fit reveal",
    rightsStatus: "cleared",
    public: true,
    categories: ["on-camera", "product-demo", "lifestyle"],
  },
  {
    id: "figs-scrubs-transformation",
    title: "Fresh scrubs, fresh energy.",
    src: "/media/videos/figs-scrubs-transformation-v2.mp4",
    poster: "/media/posters/figs-scrubs-transformation-poster.jpg",
    duration: "22.93 seconds",
    dimensions: "576 x 1024",
    relationship: "creator-owned portfolio footage",
    creativeFunction: "Quick-change hook and full-look product reveal",
    rightsStatus: "cleared",
    public: true,
    categories: ["on-camera", "product-demo", "lifestyle"],
  },
  {
    id: "mom-lasting-makeup-hack",
    title: "A practical makeup routine that holds up.",
    src: "/media/videos/lasting-makeup-hack-v2.mp4",
    poster: "/media/posters/lasting-makeup-hack-poster.jpg",
    duration: "36.57 seconds",
    dimensions: "576 x 1024",
    relationship: "creator-owned portfolio footage",
    creativeFunction: "Hook delivery and expressive direct-to-camera energy",
    rightsStatus: "cleared",
    public: true,
    categories: ["on-camera", "lifestyle"],
  },
  {
    id: "creator-introduction",
    title: "A creator’s eye, from concept to camera.",
    src: "/media/videos/creator-introduction-v2.mp4",
    poster: "/media/posters/creator-introduction-poster.jpg",
    duration: "28.60 seconds",
    dimensions: "576 x 1024",
    relationship: "creator-owned portfolio footage",
    creativeFunction: "Creator presence and filming setup context",
    rightsStatus: "cleared",
    public: true,
    categories: ["on-camera"],
    originalLinks: {
      tiktok: "https://vt.tiktok.com/ZS4wkTeLg/",
      instagram: "https://www.instagram.com/reel/Dbq2zK2A7OZ/?igsh=MTUwbDZieXB2aDU3ag==",
    },
  },
  {
    id: "nurse-life-direct-to-camera",
    title: "A nurse’s point of view, straight to camera.",
    src: "/media/videos/nurse-life-direct-to-camera-v2.mp4",
    poster: "/media/posters/nurse-life-direct-to-camera-poster.jpg",
    duration: "37.10 seconds",
    dimensions: "576 x 1024",
    relationship: "creator-owned portfolio footage",
    creativeFunction: "Personable direct-to-camera delivery in a professional lifestyle setting",
    rightsStatus: "cleared",
    public: true,
    categories: ["on-camera", "lifestyle"],
  },
  {
    id: "spa-luxetique-brand-detail",
    title: "Fifteen seconds of texture, light and use.",
    src: "/media/videos/spa-luxetique-brand-detail-v2.mp4",
    poster: "/media/posters/spa-luxetique-poster.jpg",
    duration: "14.73 seconds",
    dimensions: "576 x 1024",
    relationship: "brand-directed product detail",
    creativeFunction: "Compact product-detail unit",
    rightsStatus: "cleared",
    public: true,
    categories: ["product-detail"],
  },
  {
    id: "extended-product-unboxing",
    title: "45 seconds of Soft beautiful product detailing video",
    src: "/media/videos/extended-product-unboxing-v2.mp4",
    poster: "/media/posters/extended-product-unboxing-poster.jpg",
    duration: "45.10 seconds",
    dimensions: "576 x 1024",
    relationship: "creator-owned portfolio footage",
    creativeFunction: "Extended product unboxing video.",
    rightsStatus: "cleared",
    public: true,
    categories: ["product-demo", "product-detail"],
  },
];

export const publicVideos = videos.filter(
  (video) => video.public && video.rightsStatus === "cleared",
);

export const leadWork = publicVideos.find((video) => video.id === "makeup-routine")!;
