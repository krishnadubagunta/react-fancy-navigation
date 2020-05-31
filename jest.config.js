const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  transform: {
    ...tsjPreset.transform
  },
  globals: {
    'ts-jest': {
      babelConfig: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
        ]

      }
    }
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
  reporters: ['default', '<rootDir>/TestReports/ImageReporter.js']
}
