'use_strict';
class ImageReporter {
    async onTestResult(_test, testResult, _aggregatedResult) {
        if (!process.env.CI)
            return;
        if (!testResult.numFailingTests) {
            // && testResult.failureMessage.match(/different from snapshot/)
            const filePath = testResult.testFilePath;
            console.log(filePath);
        }
    }
}
module.exports = ImageReporter;
//# sourceMappingURL=ImageReporter.js.map