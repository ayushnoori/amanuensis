import { render } from '@redwoodjs/testing/web'

import DoctorDashboardLayout from './DoctorDashboardLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DoctorDashboardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DoctorDashboardLayout />)
    }).not.toThrow()
  })
})
