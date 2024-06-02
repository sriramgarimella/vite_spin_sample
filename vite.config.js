import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
        output: {
            dir: 'dist/spin/',
            entryFileNames: 'application-entry.js',
            assetFileNames: 'application-asset.css',
            chunkFileNames: "application-chunk.js",
            manualChunks: undefined,
        }
    }
}
})
