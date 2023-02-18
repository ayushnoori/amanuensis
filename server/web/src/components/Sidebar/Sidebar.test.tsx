import { render } from '@redwoodjs/testing/web';

import Sidebar from './Sidebar';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sidebar />);
    }).not.toThrow();
  });
});
