import { createColumnHelper } from '@tanstack/react-table';
import { PatientQuestion } from 'types/graphql';

import { navigate, routes, useParams } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BaseModelTable from 'src/components/BaseModelTable/BaseModelTable';
import { QUERY } from 'src/components/PatientQuestion/PatientQuestionsCell';
import {
  formatEnum,
  truncate,
  jsonTruncate,
  timeTag,
  checkboxInputTag,
} from 'src/utils/display-functions';
import usePatientRoutes from 'src/hooks/use-patient-routes';

const DELETE_PATIENT_QUESTION_MUTATION = gql`
  mutation DeletePatientQuestionMutation($id: String!) {
    deletePatientQuestion(id: $id) {
      id
    }
  }
`;

export default function PatientQuestionsList({ patientQuestions }) {
  const patientRoutes = usePatientRoutes();
  const { userId } = useParams();

  const [deletePatientQuestion] = useMutation(DELETE_PATIENT_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('PatientQuestion deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY, variables: { userId } }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete patientQuestion ' + id + '?')) {
      deletePatientQuestion({ variables: { id } });
    }
  };

  const columnHelper = createColumnHelper<PatientQuestion>();

  const columns = [

    columnHelper.accessor('id', {
      header: 'Id',
      cell: (id) => truncate(id.getValue()),
    }),

    columnHelper.accessor('patientId', {
      header: 'Patient id',
      cell: (patientId) => truncate(patientId.getValue()),
    }),

    columnHelper.accessor('question', {
      header: 'Question',
      cell: (question) => truncate(question.getValue()),
    }),

    columnHelper.accessor('answer', {
      header: 'Answer',
      cell: (answer) => truncate(answer.getValue()),
    }),

    columnHelper.accessor('askedAt', {
      header: 'Asked at',
      cell: (askedAt) => timeTag(askedAt.getValue()),
    }),

    columnHelper.accessor('answeredAt', {
      header: 'Answered at',
      cell: (answeredAt) => timeTag(answeredAt.getValue()),
    }),

    columnHelper.accessor('pertient', {
      header: 'Pertient',
      cell: (pertient) => checkboxInputTag(pertient.getValue()),
    }),

  ];

  return (
    <BaseModelTable
      title="PatientQuestions"
      columns={columns}
      data={patientQuestions}
      onRowView={(row) =>
        navigate(patientRoutes.patientQuestion({ id: row.getValue('id') }))
      }
      onRowEdit={(row) =>
        navigate(patientRoutes.editPatientQuestion({ id: row.getValue('id') }))
      }
      onRowDelete={(row) => onDeleteClick(row.getValue('id'))}
    />
  );
}
