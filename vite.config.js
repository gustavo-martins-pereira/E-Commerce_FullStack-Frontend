import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        extensions: [".jsx", ".js", ".ts", ".tsx"],
        alias: {
            "@components": path.resolve( __dirname, "./src/components"),
            "@contexts": path.resolve( __dirname, "./src/contexts"),
            "@pages": path.resolve( __dirname, "./src/pages"),
            "@assets": path.resolve( __dirname, "./src/assets"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@api": path.resolve(__dirname, "./src/api"),
        }
    },
});
