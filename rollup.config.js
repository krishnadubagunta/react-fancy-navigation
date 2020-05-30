import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'cjs'
  },
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
      babelrc: false,
      presets: [
        ['es2015', { modules: false }],
        ['env', { modules: false }],
        'react'
      ],
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    })
  ]
}
