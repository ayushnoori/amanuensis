import { FaCity, FaExchangeAlt, FaUsers } from 'react-icons/fa';
import { GiJigsawPiece, GiJigsawBox } from 'react-icons/gi';

import { routes } from '@redwoodjs/router';

import { SidebarProps } from 'src/components/Sidebar/Sidebar';
import BaseDashboardLayout from 'src/layouts/BaseDashboardLayout/BaseDashboardLayout';

type AdminDashboardLayoutProps = {
  children?: React.ReactNode;
};

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  const sidebarProps: SidebarProps = {
    organizationName: 'Amanuensis',
    groups: [
      {
        id: 'general',
        links: [
          {
            label: 'Organizations',
            icon: FaCity,
            to: routes.speechTest(),
          },
          {
            label: 'Users',
            icon: FaUsers,
            to: routes.speechTest(),
          },
        ],
      },
      {
        id: 'materials',
        name: 'Materials',
        links: [
          {
            label: 'Materials',
            icon: GiJigsawPiece,
            to: routes.speechTest(),
          },
          {
            label: 'Material Units',
            icon: GiJigsawBox,
            to: routes.speechTest(),
          },
        ],
      },
    ],
    bottomGroups: [
      {
        id: 'settings',
        links: [
          {
            label: 'Change Organization',
            icon: FaExchangeAlt,
            to: routes.speechTest(),
          },
        ],
      },
    ],
  };

  return (
    <BaseDashboardLayout sidebarProps={sidebarProps}>
      {children}
    </BaseDashboardLayout>
  );
};

export default AdminDashboardLayout;
