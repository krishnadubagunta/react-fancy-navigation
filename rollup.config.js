import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import react from 'react'
import reactDom from 'react-dom'
import resolve from 'rollup-plugin-node-resolve'
import { DEFAULT_EXTENSIONS } from '@babel/core'

export default {
  input: ['src/index.ts', 'src/fancyNavigation/AnimationClass/TranslationClass/index.tsx'],
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true
  },
  external: [
    'react',
    'react-dom'
  ],
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom)
      }
    }),
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
        ['@babel/preset-env', { modules: 'auto', loose: true }],
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
