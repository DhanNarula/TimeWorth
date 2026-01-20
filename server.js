#!/usr/bin/env bun

/**
 * Simple HTTP server for TimeWorth web UI
 * Run with: bun run server.js
 */

import { file } from "bun";
import { serve } from "bun";

const port = process.env.PORT || 3000;

console.log(`🚀 Starting TimeWorth server on http://localhost:${port}`);

serve({
  port: port,
  fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // Default to index.html
    if (path === "/" || path === "") {
      path = "/index.html";
    }

    // Remove leading slash for file path
    const filePath = path.slice(1);

    // Serve static files
    try {
      const fileObj = file(filePath);
      
      if (fileObj.exists()) {
        // Determine content type
        let contentType = "text/html";
        if (filePath.endsWith(".js")) {
          contentType = "application/javascript";
        } else if (filePath.endsWith(".css")) {
          contentType = "text/css";
        } else if (filePath.endsWith(".json")) {
          contentType = "application/json";
        } else if (filePath.endsWith(".md")) {
          contentType = "text/markdown";
        }

        return new Response(fileObj, {
          headers: {
            "Content-Type": contentType,
          },
        });
      } else {
        // Return 404
        return new Response("File not found", { status: 404 });
      }
    } catch (error) {
      return new Response(`Error: ${error.message}`, { status: 500 });
    }
  },
});

console.log(`✅ Server running! Open http://localhost:${port} in your browser`);
