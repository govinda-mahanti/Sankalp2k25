import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Optimize PNG files
      png: {
        quality: 80,
      },
      // Optimize JPEG files
      jpeg: {
        quality: 80,
      },
      // Optimize JPG files
      jpg: {
        quality: 80,
      },
      // Convert to WebP
      webp: {
        quality: 75,
      },
      // Optimize SVG files
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
})
