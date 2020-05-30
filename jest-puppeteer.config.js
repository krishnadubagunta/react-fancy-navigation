module.exports = {
  launch: {
    headless: !process.env.CI === 'true',
    devtools: true,
    dumpio: true
  },
  server: {
    command: 'yarn start --scripts-prepend-node-path',
    port: 3000
  }
}
