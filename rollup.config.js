import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';

export default {
  input: './bin/index.ts',
  output: {
    file: './dist/index.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    resolve(),        
    commonjs(),       
    terser(),        
    json(),
  ],
};
