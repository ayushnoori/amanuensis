import { routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import BaseModelView from 'src/components/BaseModelView/BaseModelView';
import {
  formatEnum,
  jsonDisplay,
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

export default function WorkflowPrompt({ workflowPrompt }) {
  const [deleteWorkflowPrompt] = useMutation(DELETE_WORKFLOW_PROMPT_MUTATION, {
    onCompleted: () => {
      toast.success('WorkflowPrompt deleted');
      navigate(routes.workflowPrompts());
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete workflowPrompt ' + id + '?')) {
      deleteWorkflowPrompt({ variables: { id } });
    }
  };

  const data = [
    
      {
        propertyId: 'id',
        label: 'Id',
        
          value: workflowPrompt.id,
        
      },
    
      {
        propertyId: 'name',
        label: 'Name',
        
          value: workflowPrompt.name,
        
      },
    
      {
        propertyId: 'prompt',
        label: 'Prompt',
        
          value: workflowPrompt.prompt,
        
      },
    
  ];

  return (
    <BaseModelView
      title="WorkflowPrompt Detail"
      subtitle={'ID: ' + workflowPrompt.id}
      data={data}
      onDelete={() => onDeleteClick(workflowPrompt.id)}
      onEdit={() => navigate(routes.editWorkflowPrompt({ id: workflowPrompt.id }))}
    />
  );
}
