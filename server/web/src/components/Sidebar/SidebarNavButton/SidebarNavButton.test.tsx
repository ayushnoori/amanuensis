import { FiHome } from 'react-icons/fi';

import { render } from '@redwoodjs/testing/web';

import SidebarNavButton from './SidebarNavButton';

const SIDEBAR_NAV_BUTTON_PROPS = {
  label: 'Home',
  icon: FiHome,
  to: '/',
};

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SidebarNavButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarNavButton {...SIDEBAR_NAV_BUTTON_PROPS} />);
    }).not.toThrow();
  });
});
