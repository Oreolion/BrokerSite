import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-tradingview-widget': './node_modules/react-tradingview-widget/dist/index.js',
    },
  },
});
