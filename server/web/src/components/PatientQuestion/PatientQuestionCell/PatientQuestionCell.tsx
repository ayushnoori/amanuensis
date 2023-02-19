import type { FindPatientQuestionById } from 'types/graphql';

import type { CellSuccessProps } from '@redwoodjs/web';

import ModelCellFailure from 'src/components/model-cell/ModelCellFailure/ModelCellFailure';
import ModelCellLoading from 'src/components/model-cell/ModelCellLoading/ModelCellLoading';
import ModelCellNotFound from 'src/components/model-cell/ModelCellNotFound/ModelCellNotFound';
import PatientQuestion from 'src/components/PatientQuestion/PatientQuestion';

export const QUERY = gql`
  query FindPatientQuestionById($id: String!) {
    patientQuestion: patientQuestion(id: $id) {
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

export const Empty = () => <ModelCellNotFound modelNameSingular="PatientQuestion" />;

export const Failure = ModelCellFailure;

export const Success = ({ patientQuestion }: CellSuccessProps<FindPatientQuestionById>) => {
  return <PatientQuestion patientQuestion={patientQuestion} />;
};
