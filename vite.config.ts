import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    transformer: "lightningcss",
    lightningcss: {
      cssModules: {
        pattern: "[name]__[local]___[hash]",
      },
    },
  },
  // css: {
  //   modules: {
  //     localsConvention: "dashes",
  //     generateScopedName: "[name]__[local]___[hash:base64:2]",
  //   },
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
