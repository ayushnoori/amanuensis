import { createColumnHelper } from '@tanstack/react-table';
import { WorkflowPrompt } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BaseModelTable from 'src/components/BaseModelTable/BaseModelTable';
import { QUERY } from 'src/components/WorkflowPrompt/WorkflowPromptsCell';
import {
  formatEnum,
  truncate,
  jsonTruncate,
  timeTag,
  checkboxInputTag,
} from 'src/utils/display-functions';

const DELETE_WORKFLOW_PROMPT_MUTATION = gql`
  mutation DeleteWorkflowPromptMutation($id: String!) {
    deleteWorkflowPrompt(id: $id) {
      id
    }
  }
`;

export default function WorkflowPromptsList({ workflowPrompts }) {
  const [deleteWorkflowPrompt] = useMutation(DELETE_WORKFLOW_PROMPT_MUTATION, {
    onCompleted: () => {
      toast.success('WorkflowPrompt deleted');
    },
    onError: (error) => {
      toast.error(error.message);
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete workflowPrompt ' + id + '?')) {
      deleteWorkflowPrompt({ variables: { id } });
    }
  };

  const columnHelper = createColumnHelper<WorkflowPrompt>();

  const columns = [
    
    columnHelper.accessor('id', {
      header: 'Id',
      cell: (id) => truncate(id.getValue()),
    }),
    
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (name) => truncate(name.getValue()),
    }),
    
    columnHelper.accessor('prompt', {
      header: 'Prompt',
      cell: (prompt) => truncate(prompt.getValue()),
    }),
    
  ];

  return (
    <BaseModelTable
      title="WorkflowPrompts"
      columns={columns}
      data={workflowPrompts}
      onRowView={(row) => navigate(routes.workflowPrompt({ id: row.getValue('id') }))}
      onRowEdit={(row) => navigate(routes.editWorkflowPrompt({ id: row.getValue('id') }))}
      onRowDelete={(row) => onDeleteClick(row.getValue('id'))}
    />
  );
}
