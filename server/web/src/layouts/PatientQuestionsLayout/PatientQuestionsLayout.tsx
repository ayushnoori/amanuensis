import { routes } from '@redwoodjs/router';

import BaseModelNavigationLayout from 'src/layouts/BaseModelNavigationLayout/BaseModelNavigationLayout';

type PatientQuestionLayoutProps = {
  children: React.ReactNode
};

export default function PatientQuestionsLayout({ children }: PatientQuestionLayoutProps) {
  return (
    <BaseModelNavigationLayout
      headingText="PatientQuestions"
      newButtonText="PatientQuestion"
      subheadingText="PatientQuestion information"
      headingRoute={routes.patientQuestions()}
      newModelRoute={routes.newPatientQuestion()}
    >
      {children}
    </BaseModelNavigationLayout>
  );
}
