import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import { DEFAULT_EXTENSIONS } from '@babel/core'

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs'
  },
  inlineDynamicImports: true,
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: [
        '**/__tests__/**'
      ],
      clean: true
    }),
    babel({
      babelrc: true,
      presets: [
        ['@babel/preset-env', { modules: 'auto' }],
        '@babel/preset-react'
      ],
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx'
      ],
      exclude: 'node_modules/**'
    })
  ]
}
