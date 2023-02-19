import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ModelDataWrapper from 'src/components/ModelDataWrapper/ModelDataWrapper';
import PatientQuestionForm from 'src/components/PatientQuestion/PatientQuestionForm';

const CREATE_PATIENT_QUESTION_MUTATION = gql`
  mutation CreatePatientQuestionMutation($input: CreatePatientQuestionInput!) {
    createPatientQuestion(input: $input) {
      id
    }
  }
`;

export default function NewPatientQuestion() {
  const [createPatientQuestion, { loading, error }] = useMutation(
    CREATE_PATIENT_QUESTION_MUTATION, {
      onCompleted: () => {
        toast.success('PatientQuestion created');
        navigate(routes.patientQuestions());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );

  const onSave = (input) => {
    
    createPatientQuestion({
      variables: {
        
        input,
        
      },
    });
  };

  return (
    <ModelDataWrapper
      title="New PatientQuestion"
      subtitle="Enter new patientQuestion information"
    >
      <PatientQuestionForm onSave={onSave} loading={loading} error={error} />
    </ModelDataWrapper>
  );
}
