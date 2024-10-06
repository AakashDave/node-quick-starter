import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './bin/index.ts',
  output: {
    file: './dist/index.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),    // Then process TypeScript files
    resolve(),        // Resolve Node.js modules
    commonjs(),       // Convert CommonJS modules to ES6
    terser(),         // Minify the output
  ],
};
