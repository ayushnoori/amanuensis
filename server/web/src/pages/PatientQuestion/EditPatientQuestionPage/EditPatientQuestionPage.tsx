import EditPatientQuestionCell from 'src/components/PatientQuestion/EditPatientQuestionCell';

type PatientQuestionPageProps = {
  id: string;
};

export default function EditPatientQuestionPage({ id }: PatientQuestionPageProps) {
  return <EditPatientQuestionCell id={id} />;
}
