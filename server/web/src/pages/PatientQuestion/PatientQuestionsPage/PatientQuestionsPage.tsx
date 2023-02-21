import { useParams } from '@redwoodjs/router';
import PatientQuestionsCell from 'src/components/PatientQuestion/PatientQuestionsCell';

export default function PatientQuestionsPage() {
  const params = useParams();
  return <PatientQuestionsCell userId={params.userId} />;
}
