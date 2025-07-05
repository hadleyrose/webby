import { defineConfig } from 'vite';
export default defineConfig({
    root: '_site',
    build: {
        outDir: '../public',
        emptyOutDir: true
    },
    // publicDir: 'src',
    assetsInclude: ["**/*.glb"]
})