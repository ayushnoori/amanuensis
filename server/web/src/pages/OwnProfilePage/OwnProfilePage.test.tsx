import { render } from '@redwoodjs/testing/web'

import OwnProfilePage from './OwnProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OwnProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OwnProfilePage />)
    }).not.toThrow()
  })
})
