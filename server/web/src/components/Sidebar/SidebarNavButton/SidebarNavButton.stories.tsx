import { FiHome } from 'react-icons/fi';

import SidebarNavButton from './SidebarNavButton';

const SIDEBAR_NAV_BUTTON_PROPS = {
  label: 'Home',
  icon: FiHome,
  to: '/',
};

export const generated = () => {
  return <SidebarNavButton {...SIDEBAR_NAV_BUTTON_PROPS} />;
};

export default { title: 'Components/SidebarNavButton' };
