import { render } from '@redwoodjs/testing/web'

import SpeechTestPage from './SpeechTestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SpeechTestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpeechTestPage />)
    }).not.toThrow()
  })
})
