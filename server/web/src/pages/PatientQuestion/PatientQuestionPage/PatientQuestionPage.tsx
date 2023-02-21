import PatientQuestionCell from 'src/components/PatientQuestion/PatientQuestionCell';

type PatientQuestionPageProps = {
  id: string;
};

export default function PatientQuestionPage({ id }: PatientQuestionPageProps) {
  return <PatientQuestionCell id={id} />;
}
