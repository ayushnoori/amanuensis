import EditPatientsCell from 'src/components/Patients/EditPatientsCell';

type PatientsPageProps = {
  id: string;
};

export default function EditPatientsPage({ id }: PatientsPageProps) {
  return <EditPatientsCell id={id} />;
}
