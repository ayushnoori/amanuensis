import type { FindPatient } from 'types/graphql';

import { routes } from '@redwoodjs/router';
import type { CellSuccessProps } from '@redwoodjs/web';

import ModelCellEmpty from 'src/components/model-cell/ModelCellEmpty/ModelCellEmpty';
import ModelCellFailure from 'src/components/model-cell/ModelCellFailure/ModelCellFailure';
import ModelCellLoading from 'src/components/model-cell/ModelCellLoading/ModelCellLoading';
import Patient from 'src/components/Patients/Patient';

export const QUERY = gql`
  query FindPatient {
    patient {
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

export const Empty = () => (
  <ModelCellEmpty
    modelPluralName="patient"
    newModelRoute={routes.newPatients()}
  />
);

export const Failure = ModelCellFailure;

export const Success = ({ patient }: CellSuccessProps<FindPatient>) => {
  return <Patient patient={patient} />;
};
