module.exports = function (api) {
  api.cache(() => !process.env.CI === 'true')

  return {
    presets: [
      '@babel/preset-react'
    ]
  }
}
