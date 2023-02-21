import { render } from '@redwoodjs/testing/web';

import AdminDashboardLayout from './AdminDashboardLayout';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminDashboardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminDashboardLayout />);
    }).not.toThrow();
  });
});
