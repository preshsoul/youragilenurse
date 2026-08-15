type ResponsiveImageProps = {
  alt: string;
  fallbackSrc: string;
  optimizedBase: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
};

export default function ResponsiveImage({
  alt,
  fallbackSrc,
  optimizedBase,
  width,
  height,
  sizes,
  priority = false,
}: ResponsiveImageProps) {
  const webpSources = `${optimizedBase}-768.webp 768w, ${optimizedBase}-1200.webp 1200w`;

  return (
    <picture>
      <source type="image/webp" srcSet={webpSources} sizes={sizes} />
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
      />
    </picture>
  );
}
