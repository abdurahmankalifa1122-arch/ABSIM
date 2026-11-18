import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, type Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function rootSitemapPlugin(): Plugin {
  const sitemapPath = path.resolve(__dirname, 'sitemap.xml');
  return {
    name: 'root-sitemap',
    configureServer(server) {
      server.middlewares.use('/sitemap.xml', (_req, res, next) => {
        if (fs.existsSync(sitemapPath)) {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(fs.readFileSync(sitemapPath, 'utf-8'));
          return;
        }
        next();
      });
    },
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      if (fs.existsSync(sitemapPath) && fs.existsSync(distDir)) {
        fs.copyFileSync(sitemapPath, path.join(distDir, 'sitemap.xml'));
      }
    },
  };
}

export default defineConfig(() => {
  return {
    // Relative base ensures compatibility with GitHub Pages and arbitrary subpaths
    base: './',
    plugins: [react(), tailwindcss(), rootSitemapPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
