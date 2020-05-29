import { shallow } from "enzyme";
import * as React from 'react'
import ReactFancyNavigation from '../index'

describe('React Navigation test', () => {
  it('Renders', async () => {
    const component = shallow(<ReactFancyNavigation animate="none" menuType="hamburger" title="Heading" />).contains(<header>Pre Header</header>)
    expect(component).toBeTruthy()
  })
})
