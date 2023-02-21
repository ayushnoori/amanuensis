import { routes } from '@redwoodjs/router';
import usePatientRoutes from 'src/hooks/use-patient-routes';

import BaseModelNavigationLayout from 'src/layouts/BaseModelNavigationLayout/BaseModelNavigationLayout';

type PatientQuestionLayoutProps = {
  children: React.ReactNode
};

export default function PatientQuestionsLayout({ children }: PatientQuestionLayoutProps) {
  const patientRoutes = usePatientRoutes();

  return (
    <BaseModelNavigationLayout
      headingText="Patient Questions"
      // newButtonText="Patient Question" // Patient should not be able to create new questions
      // subheadingText="PatientQuestion information"
      headingRoute={patientRoutes.patientQuestions()}
      newModelRoute={patientRoutes.newPatientQuestion()}
    >
      {children}
    </BaseModelNavigationLayout>
  );
}
