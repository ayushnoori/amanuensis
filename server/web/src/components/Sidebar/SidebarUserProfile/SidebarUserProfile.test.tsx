import { render } from '@redwoodjs/testing/web';

import SidebarUserProfile from './SidebarUserProfile';

const SIDEBAR_USER_PROFILE_PROPS = {
  user: {
    id: '123',
    name: 'Iñaki Arango',
    picture: 'https://avatars0.githubusercontent.com/u/17098?s=460&v=4',
    email: 'inaki.arango@recyco.in',
    globalRoles: { superadmin: true },
  },
};

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SidebarUserProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarUserProfile {...SIDEBAR_USER_PROFILE_PROPS} />);
    }).not.toThrow();
  });
});
