module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['<rootDir>/src/__tests__/*.tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  preset: 'jest-puppeteer',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  reporters: ['default', '<rootDir>/dist/TestReports/ImageReporter.js']
}
