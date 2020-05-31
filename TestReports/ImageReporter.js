const path = require('path')
const fs = require('fs')
const { uploadFilesMultipart } = require('../gdriveApi')

function ImageReporter (globalConfig, options) {
  this._globalConfig = globalConfig
  this._options = options

  this.onTestResult = (test, testResult, aggregatedResult) => {
    if (!process.env.CI) return

    const failedTests = testResult.numFailingTests
    const testResultFailureMessage = testResult ? testResult.failureMessage ? testResult.failureMessage.match(/different from snapshot/) : '' : ''
    if (failedTests !== 0 && testResultFailureMessage !== '') {
      const dirPath = path.dirname(testResult.testFilePath)
      const diffOutputPath = path.resolve(dirPath, '__image_snapshots__/__diff_output__')
      const files = fs.readdirSync(diffOutputPath)

      files.forEach(async (file) => {
        const name = `diff_output/${file}`
        const mediaObject = {
          mimeType: 'image/jpeg',
          body: fs.createReadStream(path.resolve(diffOutputPath, file))
        }
        const fileMetadata = {
          name
        }
        // const result = await uploadFilesMultipart(mediaObject, fileMetadata)
        // console.log(result)
      })
    }
  }
}

module.exports = ImageReporter
