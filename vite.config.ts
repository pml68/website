import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg'

export default defineConfig({
  plugins: [
    sveltekit(),
    svg()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        prependData: `@use 'src/app.scss' as *;`,
      }
    }
  }
});
