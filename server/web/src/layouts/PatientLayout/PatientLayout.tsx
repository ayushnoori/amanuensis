import { routes } from '@redwoodjs/router';

import BaseModelNavigationLayout from 'src/layouts/BaseModelNavigationLayout/BaseModelNavigationLayout';

type PatientsLayoutProps = {
  children: React.ReactNode
};

export default function PatientLayout({ children }: PatientsLayoutProps) {
  return (
    <BaseModelNavigationLayout
      headingText="Patients"
      newButtonText="Patient"
      subheadingText="Patient information"
      headingRoute={routes.patient()}
      newModelRoute={routes.newPatients()}
    >
      {children}
    </BaseModelNavigationLayout>
  );
}
