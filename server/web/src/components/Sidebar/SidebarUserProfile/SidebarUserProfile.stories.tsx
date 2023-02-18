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

export const generated = () => {
  return <SidebarUserProfile {...SIDEBAR_USER_PROFILE_PROPS} />;
};

export default { title: 'Components/SidebarUserProfile' };
