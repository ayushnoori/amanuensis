import { render } from '@redwoodjs/testing/web';

import BaseDashboardLayout from './BaseDashboardLayout';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BaseDashboardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BaseDashboardLayout />);
    }).not.toThrow();
  });
});
