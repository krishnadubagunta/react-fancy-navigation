import React from 'react'
import { shallow } from "enzyme"
import ReactFancyNavigation from '../index'
import renderer from "react-test-renderer";

describe('React Navigation test', () => {
  it('Renders', async () => {
    const component = shallow(<ReactFancyNavigation animate="none" menuType="hamburger" title="Heading" />).contains(<header>Pre Header</header>)
    expect(component).toBeTruthy()
  })

  it('does snapshot testing', () => {
    const tree = renderer
      .create(<ReactFancyNavigation animate="none" menuType="hamburger" title="Heading" />)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})
