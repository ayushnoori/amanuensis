import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import PatientsCell from 'src/components/Patients/PatientsCell';
import BaseModelNavigationLayout from 'src/layouts/BaseModelNavigationLayout/BaseModelNavigationLayout';

const OwnProfilePage = ({ userId }: { userId: string }) => {
  const currentUser = {
    name: 'JC Rodriguez',
  };

  return (
    <>
      <MetaTags title="Patient Profile" description="Patient profile" />

      <BaseModelNavigationLayout headingText={currentUser.name}>
        <PatientsCell id={userId} editable={false} />
      </BaseModelNavigationLayout>
    </>
  );
}

export default OwnProfilePage
