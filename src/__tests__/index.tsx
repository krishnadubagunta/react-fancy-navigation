import React from 'react'
import { shallow } from "enzyme"
import ReactFancyNavigation from '../index'
import renderer from "react-test-renderer";

describe('React Navigation test', () => {
  it('visual regression testing', async () => {
    await page.goto('http://localhost:3000')
    const image = await page.screenshot()

    expect(image).toMatchImageSnapshot()
  })
})
