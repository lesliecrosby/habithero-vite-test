// import legacy from '@vitejs/plugin-legacy'

export default {
  build: {
    target: 'es2015',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'assets/[name][extname]',
        entryFileNames: 'assets/[name].js'
      }
    }
  },
  // plugins: [
  //   legacy({
  //     targets: ['ie >= 11'],
  //     additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  //   })
  // ]
}