"use strict";
describe('React Navigation test', () => {
    it('visual regression testing', async () => {
        await page.goto('http://localhost:3000');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    });
});
//# sourceMappingURL=index.js.map