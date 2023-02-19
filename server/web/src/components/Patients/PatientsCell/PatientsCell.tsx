import type { FindPatientsById } from 'types/graphql';

import type { CellSuccessProps } from '@redwoodjs/web';

import ModelCellFailure from 'src/components/model-cell/ModelCellFailure/ModelCellFailure';
import ModelCellLoading from 'src/components/model-cell/ModelCellLoading/ModelCellLoading';
import ModelCellNotFound from 'src/components/model-cell/ModelCellNotFound/ModelCellNotFound';
import Patients from 'src/components/Patients/Patients';

export const QUERY = gql`
  query FindPatientsById($id: String!) {
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

export const Loading = ModelCellLoading;

export const Empty = () => <ModelCellNotFound modelNameSingular="Patients" />;

export const Failure = ModelCellFailure;

export const Success = ({ patients }: CellSuccessProps<FindPatientsById>) => {
  return <Patients patients={patients} />;
};
