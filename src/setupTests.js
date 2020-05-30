
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const { configureToMatchImageSnapshot } = require('jest-image-snapshot')
require('expect-puppeteer')

Enzyme.configure({ adapter: new Adapter() })
const toMatchImageSnapshot = configureToMatchImageSnapshot({
  customDiffConfig: {
    threshold: 5
  },
  noColors: false
})
expect.extend({ toMatchImageSnapshot })
