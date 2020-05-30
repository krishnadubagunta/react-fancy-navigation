import React from 'react';
import { shallow } from "enzyme";
import ReactFancyNavigation from '../index';
import renderer from "react-test-renderer";
describe('React Navigation test', () => {
    it('Renders', async () => {
        const component = shallow(React.createElement(ReactFancyNavigation, { animate: "none", menuType: "hamburger", title: "Heading" })).contains(React.createElement("header", null, "Pre Header"));
        expect(component).toBeTruthy();
    });
    it('does snapshot testing', () => {
        const tree = renderer
            .create(React.createElement(ReactFancyNavigation, { animate: "none", menuType: "hamburger", title: "Heading" }))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('visual regression testing', async () => {
        await page.goto('http://localhost:3000');
        const image = await page.screenshot();
        expect(image).toMatchImageSnapshot();
    });
});
//# sourceMappingURL=index.js.map