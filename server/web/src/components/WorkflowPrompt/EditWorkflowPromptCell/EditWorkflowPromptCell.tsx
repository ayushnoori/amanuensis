import type { EditWorkflowPromptById } from 'types/graphql';

import { navigate, routes } from '@redwoodjs/router';
import type { CellSuccessProps } from '@redwoodjs/web';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ModelCellFailure from 'src/components/model-cell/ModelCellFailure/ModelCellFailure';
import ModelCellLoading from 'src/components/model-cell/ModelCellLoading/ModelCellLoading';
import ModelDataWrapper from 'src/components/ModelDataWrapper/ModelDataWrapper';
import WorkflowPromptForm from 'src/components/WorkflowPrompt/WorkflowPromptForm';

export const QUERY = gql`
  query EditWorkflowPromptById($id: String!) {
    workflowPrompt: workflowPrompt(id: $id) {
      id
      name
      prompt
    }
  }
`;
const UPDATE_WORKFLOW_PROMPT_MUTATION = gql`
  mutation UpdateWorkflowPromptMutation($id: String!, $input: UpdateWorkflowPromptInput!) {
    updateWorkflowPrompt(id: $id, input: $input) {
      id
      name
      prompt
    }
  }
`;

export const Loading = ModelCellLoading;

export const Failure = ModelCellFailure;

export const Success = ({ workflowPrompt }: CellSuccessProps<EditWorkflowPromptById>) => {
  const [updateWorkflowPrompt, { loading, error }] = useMutation(UPDATE_WORKFLOW_PROMPT_MUTATION, {
    onCompleted: () => {
      toast.success('WorkflowPrompt updated');
      navigate(routes.workflowPrompts());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSave = (input, id) => {
    
    updateWorkflowPrompt({
      variables: {
        id,
        
          input,
        
      }
    });
  };

  return (
    <ModelDataWrapper title="Edit WorkflowPrompt" subtitle={'ID: ' + workflowPrompt.id}>
      <WorkflowPromptForm
        workflowPrompt={workflowPrompt}
        onSave={onSave}
        error={error}
        loading={loading}
      />
    </ModelDataWrapper>
  );
}
