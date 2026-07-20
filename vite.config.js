import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        // Main site plus a standalone build of the CoPay onboarding that
        // can be deployed on its own (see scripts/build-onboarding-drop.cjs).
        main: "index.html",
        onboarding: "onboarding.html",
      },
    },
  },
})
