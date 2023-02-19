import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ModelDataWrapper from 'src/components/ModelDataWrapper/ModelDataWrapper';
import PatientsForm from 'src/components/Patients/PatientsForm';

const CREATE_PATIENTS_MUTATION = gql`
  mutation CreatePatientsMutation($input: CreatePatientsInput!) {
    createPatients(input: $input) {
      id
    }
  }
`;

export default function NewPatients() {
  const [createPatients, { loading, error }] = useMutation(
    CREATE_PATIENTS_MUTATION, {
      onCompleted: () => {
        toast.success('Patients created');
        navigate(routes.patient());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );

  const onSave = (input) => {
    
    createPatients({
      variables: {
        
        input,
        
      },
    });
  };

  return (
    <ModelDataWrapper
      title="New Patients"
      subtitle="Enter new patients information"
    >
      <PatientsForm onSave={onSave} loading={loading} error={error} />
    </ModelDataWrapper>
  );
}
