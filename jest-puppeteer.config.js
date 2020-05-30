module.exports = {
  launch: {
    headless: false,
    devtools: true
  },
  server: {
    command: 'yarn start --scripts-prepend-node-path',
    port: 3000
  }
}
