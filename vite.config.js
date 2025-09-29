import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5115,
    allowedHosts: ['test.ujjainmahakal.com', 'http://localhost:5000'],
  },
})
