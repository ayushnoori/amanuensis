import { render } from '@redwoodjs/testing/web';

import SidebarLogo from './SidebarLogo';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SidebarLogo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarLogo />);
    }).not.toThrow();
  });
});
