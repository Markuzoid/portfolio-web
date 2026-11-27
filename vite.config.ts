import fs from "node:fs";
import path from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

const LOCAL_MEDIA_MAP: Record<string, string> = {
  "/local-media/dravixa-demo.mp4": path.resolve("D:/portfolio/video DEMo dravixa (1).mp4"),
  "/local-media/hydrolytix-demo.mp4": path.resolve("D:/portfolio/video demo Kelompok Hydrolytix.mp4"),
};

function serveLocalVideo(req: IncomingMessage, res: ServerResponse): boolean {
  const urlPath = (req.url || "").split("?")[0];
  const filePath = LOCAL_MEDIA_MAP[urlPath];
  if (!filePath || !fs.existsSync(filePath)) {
    return false;
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Accept-Ranges", "bytes");
  res.setHeader("Cache-Control", "no-store");

  if (range) {
    const match = /bytes=(\d*)-(\d*)/.exec(range);
    const start = match && match[1] ? Number.parseInt(match[1], 10) : 0;
    const end =
      match && match[2]
        ? Math.min(Number.parseInt(match[2], 10), fileSize - 1)
        : fileSize - 1;

    if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= fileSize) {
      res.statusCode = 416;
      res.setHeader("Content-Range", `bytes */${fileSize}`);
      res.end();
      return true;
    }

    res.statusCode = 206;
    res.setHeader("Content-Range", `bytes ${start}-${end}/${fileSize}`);
    res.setHeader("Content-Length", String(end - start + 1));
    fs.createReadStream(filePath, { start, end }).pipe(res);
    return true;
  }

  res.statusCode = 200;
  res.setHeader("Content-Length", String(fileSize));
  fs.createReadStream(filePath).pipe(res);
  return true;
}

function localMediaPlugin(): Plugin {
  return {
    name: "local-media-stream",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!serveLocalVideo(req, res)) {
          next();
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!serveLocalVideo(req, res)) {
          next();
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), localMediaPlugin()],
  server: {
    port: 5173,
    strictPort: false,
  },
});
