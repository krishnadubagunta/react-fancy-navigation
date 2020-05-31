module.exports = {
  launch: {
    headless: process.env.CI === 'true' || !process.env.TDD
  },
  server: {
    command: 'BROWSER=none yarn start --scripts-prepend-node-path',
    port: 3000,
    launchTimeout: 10000
  }
}
