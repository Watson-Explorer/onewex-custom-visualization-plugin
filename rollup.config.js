import babel from 'rollup-plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
// import postcss from 'rollup-plugin-postcss-modules'
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

const NODE_ENV = process.env.NODE_ENV || 'development'

export default {
  input: 'src/index.js',
  // input: 'src/typescript/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'amd',
      exports: 'named',
      strict: false // to work around "Cannot read property 'document' of undefined" caused e.g. with d3
      // sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    svgr(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: ['node_modules/**', '**/*.ts', '**/*.tsx'],
      plugins: ['external-helpers']
    }),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs()
  ]
}
