import type { EditPatientsById } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type { CellSuccessProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ModelCellFailure from 'src/components/model-cell/ModelCellFailure/ModelCellFailure';
import ModelCellLoading from 'src/components/model-cell/ModelCellLoading/ModelCellLoading';
import ModelDataWrapper from 'src/components/ModelDataWrapper/ModelDataWrapper';
import PatientsForm from 'src/components/Patients/PatientsForm';

export const QUERY = gql`
  query EditPatientsById($id: String!) {
    patients: patients(id: $id) {
      id
      birthDate
      deathDate
      ssn
      drivers
      passport
      prefix
      first
      last
      suffix
      maiden
      marital
      race
      ethnicity
      gender
      birthPlace
      address
      city
      state
      county
      fips
      zip
      lat
      lon
      healthcareExpenses
      healthcareCoverage
      income
    }
  }
`;
const UPDATE_PATIENTS_MUTATION = gql`
  mutation UpdatePatientsMutation($id: String!, $input: UpdatePatientsInput!) {
    updatePatients(id: $id, input: $input) {
      id
      birthDate
      deathDate
      ssn
      drivers
      passport
      prefix
      first
      last
      suffix
      maiden
      marital
      race
      ethnicity
      gender
      birthPlace
      address
      city
      state
      county
      fips
      zip
      lat
      lon
      healthcareExpenses
      healthcareCoverage
      income
    }
  }
`;

export const Loading = ModelCellLoading;

export const Failure = ModelCellFailure;

export const Success = ({ patients }: CellSuccessProps<EditPatientsById>) => {
  const [updatePatients, { loading, error }] = useMutation(UPDATE_PATIENTS_MUTATION, {
    onCompleted: () => {
      toast.success('Patients updated');
      navigate(routes.patient());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSave = (input, id) => {
    
    updatePatients({
      variables: {
        id,
        
          input,
        
      }
    });
  };

  return (
    <ModelDataWrapper title="Edit Patients" subtitle={'ID: ' + patients.id}>
      <PatientsForm
        patients={patients}
        onSave={onSave}
        error={error}
        loading={loading}
      />
    </ModelDataWrapper>
  );
}
