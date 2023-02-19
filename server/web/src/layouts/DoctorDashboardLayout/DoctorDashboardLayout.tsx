import { FaExchangeAlt, FaUsers } from 'react-icons/fa';
import { SiCodesandbox } from 'react-icons/si';

import { routes } from '@redwoodjs/router';

import { SidebarProps } from 'src/components/Sidebar/Sidebar';
import BaseDashboardLayout from 'src/layouts/BaseDashboardLayout/BaseDashboardLayout';

type DoctorDashboardLayoutProps = {
  children?: React.ReactNode;
};

const DoctorDashboardLayout = ({ children }: DoctorDashboardLayoutProps) => {
  const sidebarProps: SidebarProps = {
    organizationName: 'Stanford General Hospital',
    groups: [
      {
        id: 'general',
        links: [
          {
            label: 'Patients',
            icon: FaUsers,
            to: routes.speechTest(),
          },
        ],
      },
      {
        id: 'materials',
        name: 'Workflows',
        links: [
          {
            label: 'Analyses',
            icon: SiCodesandbox,
            to: '/daw',
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
            to: '/',
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

export default DoctorDashboardLayout;
