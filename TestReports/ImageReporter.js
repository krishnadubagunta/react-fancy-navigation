const path = require('path')
const fs = require('fs')
const { uploadFilesMultipart } = require("../gdriveApi")

function ImageReporter (globalConfig, options) {
  this._globalConfig = globalConfig
  this._options = options

  this.onTestResult = (test, testResult, aggregatedResult) => {
    if(!process.env.CI) return

    const failedTests = testResult.numFailingTests
    const testResultFailureMessage = testResult ? testResult.failureMessage ? testResult.failureMessage.match(/different from snapshot/) : '' : ''
    if (failedTests != 0 && testResultFailureMessage != '') {
      const dirPath = path.dirname(testResult.testFilePath)
      const diffOutputPath = path.resolve(dirPath, "__image_snapshots__/__diff_output__")
      const files = fs.readdirSync(diffOutputPath)

      files.forEach(async (file) => {
        const name = `diff_output/${file}`;
        const mediaObject = {
          mimeType: 'image/jpeg',
          body: fs.createWriteStream(file),
        }
        const fileMetadata = {
          name
        }
        const result = await uploadFilesMultipart(mediaObject, fileMetadata)
        console.log(result)
      })
    }
  }
}

module.exports = ImageReporter

// class ImageReporter {
//   constructor(globalConfig: any, options: any) {
//     this._globalConfig = globalConfig;
//     this._options = options;
//   }

//   async onTestResult(_test: any, testResult: any, _aggregateResults: any) {
//     if(!process.env.CI) return
//     if (testResult.numFailingTests && testResult.failureMessage.match(/different from snapshot/)) {
//       const files: string[] = fs.readdirSync('./__tests__/__image_snapshots__/__diff_output__/');
//       files.forEach(async (value) => {
//         const name = `diff_output/${value}`;
//         const mediaObject: MediaMimeType = {
//           mimeType: 'image/jpeg',
//           body: fs.createWriteStream(value),
//         }
//         const fileMetadata: FileMetadata = {
//           name
//         }
//         const result = await uploadFilesMultipart(mediaObject, fileMetadata)
//         console.log(result)
//       });
//     }
//   }
// }
