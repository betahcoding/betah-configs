import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: './index.js',
    base: './base.js',
    next: './nextjs.js',
    react: './reactjs.js',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: true,
  minify: true,
});
