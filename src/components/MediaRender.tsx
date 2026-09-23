import React from 'react';
import { MediaItem } from '@/data/story';

interface MediaRenderProps {
  item: MediaItem;
  className?: string;
  loading?: "eager" | "lazy";
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
}

export function MediaRender({ 
  item, 
  className = "", 
  loading = "lazy",
  controls = false,
  autoPlay = true,
  muted = true
}: MediaRenderProps) {
  
  const finalSrc = item.src.startsWith('/') ? `/regalo${item.src}` : item.src;

  if (item.type === 'video' || item.src.toLowerCase().endsWith('.mp4')) {
    return (
      <video
        src={finalSrc}
        className={className}
        autoPlay={autoPlay}
        loop={autoPlay}
        muted={muted}
        playsInline
        controls={controls}
        preload={autoPlay ? "auto" : "metadata"}
      />
    );
  }

  return (
    <img
      src={finalSrc}
      alt={item.alt || ""}
      className={className}
      loading={loading}
    />
  );
}
