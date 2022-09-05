import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://<1vanInclan>.github.io/react-rick-y-morty/",
  plugins: [react()]
})
