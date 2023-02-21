import { MetaTags } from '@redwoodjs/web';
import PatientsCell from 'src/components/Patients/PatientsCell';
import BaseModelNavigationLayout from 'src/layouts/BaseModelNavigationLayout/BaseModelNavigationLayout';

type PatientsPageProps = {
  id: string;
  userId: string;
};

export default function PatientsPage({ id, userId }: PatientsPageProps) {
  return <PatientsCell id={id ?? userId} editable={false} />;
}
