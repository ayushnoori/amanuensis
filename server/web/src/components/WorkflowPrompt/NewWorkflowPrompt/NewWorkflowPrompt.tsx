import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import ModelDataWrapper from 'src/components/ModelDataWrapper/ModelDataWrapper';
import WorkflowPromptForm from 'src/components/WorkflowPrompt/WorkflowPromptForm';

const CREATE_WORKFLOW_PROMPT_MUTATION = gql`
  mutation CreateWorkflowPromptMutation($input: CreateWorkflowPromptInput!) {
    createWorkflowPrompt(input: $input) {
      id
    }
  }
`;

export default function NewWorkflowPrompt() {
  const [createWorkflowPrompt, { loading, error }] = useMutation(
    CREATE_WORKFLOW_PROMPT_MUTATION, {
      onCompleted: () => {
        toast.success('WorkflowPrompt created');
        navigate(routes.workflowPrompts());
      },
      onError: (error) => {
        toast.error(error.message);
      },
    },
  );

  const onSave = (input) => {
    
    createWorkflowPrompt({
      variables: {
        
        input,
        
      },
    });
  };

  return (
    <ModelDataWrapper
      title="New WorkflowPrompt"
      subtitle="Enter new workflowPrompt information"
    >
      <WorkflowPromptForm onSave={onSave} loading={loading} error={error} />
    </ModelDataWrapper>
  );
}
