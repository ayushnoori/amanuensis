import { render } from '@redwoodjs/testing/web'

import PatientDashboardLayout from './PatientDashboardLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PatientDashboardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PatientDashboardLayout />)
    }).not.toThrow()
  })
})
