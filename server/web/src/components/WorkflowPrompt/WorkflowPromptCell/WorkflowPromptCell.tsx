import type { FindWorkflowPromptById } from 'types/graphql';

import type { CellSuccessProps } from '@redwoodjs/web';

import ModelCellFailure from 'src/components/model-cell/ModelCellFailure/ModelCellFailure';
import ModelCellLoading from 'src/components/model-cell/ModelCellLoading/ModelCellLoading';
import ModelCellNotFound from 'src/components/model-cell/ModelCellNotFound/ModelCellNotFound';
import WorkflowPrompt from 'src/components/WorkflowPrompt/WorkflowPrompt';

export const QUERY = gql`
  query FindWorkflowPromptById($id: String!) {
    workflowPrompt: workflowPrompt(id: $id) {
      id
      name
      prompt
    }
  }
`;

export const Loading = ModelCellLoading;

export const Empty = () => <ModelCellNotFound modelNameSingular="WorkflowPrompt" />;

export const Failure = ModelCellFailure;

export const Success = ({ workflowPrompt }: CellSuccessProps<FindWorkflowPromptById>) => {
  return <WorkflowPrompt workflowPrompt={workflowPrompt} />;
};
