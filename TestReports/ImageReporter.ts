
'use_strict'
// import { uploadFilesMultipart, FileMetadata, MediaMimeType } from "../gdriveApi";
import { Reporter, Test } from '@jest/reporters'
import { TestResult, AggregatedResult } from '@jest/test-result'


class ImageReporter implements Pick<Reporter, 'onTestResult'> {

  async onTestResult(_test: Test, testResult: TestResult, _aggregatedResult: AggregatedResult) {
    if(!process.env.CI) return

    if (!testResult.numFailingTests) {
      // && testResult.failureMessage.match(/different from snapshot/)
      const filePath = testResult.testFilePath
      console.log(filePath)
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
