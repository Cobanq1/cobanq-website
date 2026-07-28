import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Two entry points means Rollup splits shared code into its own chunk. The
// single-file preview artifact can't resolve those chunk imports, so
// SINGLE_ENTRY=1 builds the main site alone, as one self-contained bundle.
const input =
  process.env.SINGLE_ENTRY === "1"
    ? { main: "index.html" }
    : {
        // Main site plus a standalone build of the CoPay onboarding that
        // can be deployed on its own (see scripts/build-onboarding-drop.cjs).
        main: "index.html",
        onboarding: "onboarding.html",
      }

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: { input },
  },
})
