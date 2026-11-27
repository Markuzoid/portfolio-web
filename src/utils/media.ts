export type ResolvedVideoSource =
  | {
      kind: "gdrive";
      embedUrl: string;
      openUrl: string;
      badge: string;
      isFallbackReel: boolean;
    }
  | {
      kind: "youtube";
      embedUrl: string;
      openUrl: string;
      badge: string;
      isFallbackReel: boolean;
    }
  | {
      kind: "mp4";
      src: string;
      openUrl?: string;
      badge: string;
      isFallbackReel: boolean;
    };

function extractDriveId(url: string): string | null {
  const pathMatch = /\/file\/d\/([a-zA-Z0-9_-]+)/.exec(url);
  if (pathMatch?.[1]) return pathMatch[1];
  const queryMatch = /[?&]id=([a-zA-Z0-9_-]+)/.exec(url);
  if (queryMatch?.[1]) return queryMatch[1];
  return null;
}

function extractYouTubeId(url: string): string | null {
  const watchMatch = /[?&]v=([a-zA-Z0-9_-]{6,})/.exec(url);
  if (watchMatch?.[1]) return watchMatch[1];
  const shortMatch = /youtu\.be\/([a-zA-Z0-9_-]{6,})/.exec(url);
  if (shortMatch?.[1]) return shortMatch[1];
  const liveMatch = /youtube\.com\/(?:live|embed|shorts)\/([a-zA-Z0-9_-]{6,})/.exec(url);
  if (liveMatch?.[1]) return liveMatch[1];
  return null;
}

export function resolveVideoSource(
  videoUrl?: string,
  localVideoUrl?: string,
  fallbackDriveUrl?: string
): ResolvedVideoSource | null {
  if (videoUrl) {
    if (videoUrl.includes("drive.google.com")) {
      const id = extractDriveId(videoUrl);
      if (id) {
        return {
          kind: "gdrive",
          embedUrl: `https://drive.google.com/file/d/${id}/preview`,
          openUrl: `https://drive.google.com/file/d/${id}/view?usp=sharing`,
          badge: "GOOGLE DRIVE · EMBED",
          isFallbackReel: false,
        };
      }
    }

    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      const id = extractYouTubeId(videoUrl);
      if (id) {
        return {
          kind: "youtube",
          embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
          openUrl: videoUrl,
          badge: "YOUTUBE · EMBED",
          isFallbackReel: false,
        };
      }
    }

    return {
      kind: "mp4",
      src: videoUrl,
      openUrl: videoUrl,
      badge: "DIRECT STREAM · MP4",
      isFallbackReel: false,
    };
  }

  if (import.meta.env.DEV && localVideoUrl) {
    return {
      kind: "mp4",
      src: localVideoUrl,
      badge: "LOCAL DEV STREAM · MP4",
      isFallbackReel: false,
    };
  }

  if (fallbackDriveUrl) {
    const id = extractDriveId(fallbackDriveUrl);
    if (id) {
      return {
        kind: "gdrive",
        embedUrl: `https://drive.google.com/file/d/${id}/preview`,
        openUrl: fallbackDriveUrl,
        badge: "GOOGLE DRIVE · VIDEO PORTFOLIO REEL",
        isFallbackReel: true,
      };
    }
  }

  return null;
}
