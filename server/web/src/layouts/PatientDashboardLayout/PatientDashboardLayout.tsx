import { FaUser } from 'react-icons/fa';
import { BsQuestionSquareFill } from 'react-icons/bs';

import { routes } from '@redwoodjs/router';

import { SidebarProps } from 'src/components/Sidebar/Sidebar';
import BaseDashboardLayout from 'src/layouts/BaseDashboardLayout/BaseDashboardLayout';
import usePatientRoutes from 'src/hooks/use-patient-routes';

type PatientDashboardLayoutProps = {
  children?: React.ReactNode;
};

const PatientDashboardLayout = ({ children }: PatientDashboardLayoutProps) => {
  const patientRoutes = usePatientRoutes();

  const sidebarProps: SidebarProps = {
    organizationName: 'Stanford General Hospital',
    groups: [
      {
        id: 'general',
        links: [
          {
            label: 'Profile',
            icon: FaUser,
            to: patientRoutes.profile(),
          },
        ],
      },
      {
        id: 'appointments',
        name: 'Appointments',
        links: [
          {
            label: 'Questions',
            icon: BsQuestionSquareFill,
            to: patientRoutes.patientQuestions(),
          },
        ],
      },
    ],
    bottomGroups: [],
  };

  return (
    <BaseDashboardLayout sidebarProps={sidebarProps}>
      {children}
    </BaseDashboardLayout>
  );
};

export default PatientDashboardLayout;
