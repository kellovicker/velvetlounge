import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
// singlefile plugin only used for `npm run build:single`
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  build: { assetsInlineLimit: mode === 'single' ? 100000000 : 4096 },
}))
