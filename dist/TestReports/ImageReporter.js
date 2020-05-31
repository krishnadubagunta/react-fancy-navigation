'use_strict';
import { uploadFilesMultipart } from '../gdriveApi';
import path from 'path';
import fs from 'fs';
class ImageReporter {
    async onTestResult(_test, testResult, _aggregatedResult) {
        var _a;
        if (!process.env.CI)
            return;
        if (testResult.numFailingTests && ((_a = testResult === null || testResult === void 0 ? void 0 : testResult.failureMessage) === null || _a === void 0 ? void 0 : _a.match(/different from snapshot/))) {
            const dirPath = path.dirname(testResult.testFilePath);
            const diffOutputPath = path.resolve(dirPath, "__image_snapshots__/__diff_output__");
            const files = fs.readdirSync(diffOutputPath);
            files.forEach(async (file) => {
                const name = `diff_output/${file}`;
                const mediaObject = {
                    mimeType: 'image/jpeg',
                    body: fs.createWriteStream(file),
                };
                const fileMetadata = {
                    name
                };
                const result = await uploadFilesMultipart(mediaObject, fileMetadata);
                console.log(result);
            });
        }
    }
}
module.exports = ImageReporter;
//# sourceMappingURL=ImageReporter.js.map