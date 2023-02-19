import type { FindPatientQuestions } from 'types/graphql';

import { routes } from '@redwoodjs/router';
import type { CellSuccessProps } from '@redwoodjs/web';

import ModelCellEmpty from 'src/components/model-cell/ModelCellEmpty/ModelCellEmpty';
import ModelCellFailure from 'src/components/model-cell/ModelCellFailure/ModelCellFailure';
import ModelCellLoading from 'src/components/model-cell/ModelCellLoading/ModelCellLoading';
import PatientQuestions from 'src/components/PatientQuestion/PatientQuestions';
import usePatientRoutes from '../../../hooks/use-patient-routes';

export const QUERY = gql`
  query FindPatientQuestions($userId: String!) {
    patientQuestions: patientQuestionsByPatientId(id: $userId) {
      id
      patientId
      question
      answer
      askedAt
      answeredAt
      pertient
    }
  }
`;

export const Loading = ModelCellLoading;

export const Empty = () => {
  const patientRoutes = usePatientRoutes();
  return (<ModelCellEmpty
    modelPluralName="patientQuestions"
    // newModelRoute={patientRoutes.newPatientQuestion()}
  />);
};

export const Failure = ModelCellFailure;

export const Success = ({ patientQuestions }: CellSuccessProps<FindPatientQuestions>) => {
  return <PatientQuestions patientQuestions={patientQuestions} />;
};
