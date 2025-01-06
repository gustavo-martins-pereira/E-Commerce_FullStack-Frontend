import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"],
        alias: {
            "@api": path.resolve(__dirname, "./src/api"),
            "@assets": path.resolve( __dirname, "./src/assets"),
            "@components": path.resolve( __dirname, "./src/components"),
            "@contexts": path.resolve( __dirname, "./src/contexts"),
            "@pages": path.resolve( __dirname, "./src/pages"),
            "@utils": path.resolve(__dirname, "./src/utils"),
        }
    },
});
