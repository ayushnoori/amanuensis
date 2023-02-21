import type { EditPatientQuestionById } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type { CellSuccessProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ModelCellFailure from 'src/components/model-cell/ModelCellFailure/ModelCellFailure';
import ModelCellLoading from 'src/components/model-cell/ModelCellLoading/ModelCellLoading';
import ModelDataWrapper from 'src/components/ModelDataWrapper/ModelDataWrapper';
import PatientQuestionForm from 'src/components/PatientQuestion/PatientQuestionForm';
import usePatientRoutes from 'src/hooks/use-patient-routes';

export const QUERY = gql`
  query EditPatientQuestionById($id: String!) {
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
const UPDATE_PATIENT_QUESTION_MUTATION = gql`
  mutation UpdatePatientQuestionMutation($id: String!, $input: UpdatePatientQuestionInput!) {
    updatePatientQuestion(id: $id, input: $input) {
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

export const Failure = ModelCellFailure;

export const Success = ({ patientQuestion }: CellSuccessProps<EditPatientQuestionById>) => {
  const patientRoutes = usePatientRoutes();

  const [updatePatientQuestion, { loading, error }] = useMutation(UPDATE_PATIENT_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('PatientQuestion updated');
      navigate(patientRoutes.patientQuestions());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSave = (input, id) => {

    updatePatientQuestion({
      variables: {
        id,

          input,

      }
    });
  };

  return (
    <ModelDataWrapper title="Edit PatientQuestion" subtitle={'ID: ' + patientQuestion.id}>
      <PatientQuestionForm
        patientQuestion={patientQuestion}
        onSave={onSave}
        error={error}
        loading={loading}
      />
    </ModelDataWrapper>
  );
}
