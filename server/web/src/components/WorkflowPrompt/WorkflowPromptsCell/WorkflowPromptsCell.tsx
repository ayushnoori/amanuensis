import type { FindWorkflowPrompts } from 'types/graphql';

import { routes } from '@redwoodjs/router';
import type { CellSuccessProps } from '@redwoodjs/web';

import ModelCellEmpty from 'src/components/model-cell/ModelCellEmpty/ModelCellEmpty';
import ModelCellFailure from 'src/components/model-cell/ModelCellFailure/ModelCellFailure';
import ModelCellLoading from 'src/components/model-cell/ModelCellLoading/ModelCellLoading';
import WorkflowPrompts from 'src/components/WorkflowPrompt/WorkflowPrompts';

export const QUERY = gql`
  query FindWorkflowPrompts {
    workflowPrompts {
      id
      name
      prompt
    }
  }
`;

export const Loading = ModelCellLoading;

export const Empty = () => (
  <ModelCellEmpty
    modelPluralName="workflowPrompts"
    newModelRoute={routes.newWorkflowPrompt()}
  />
);

export const Failure = ModelCellFailure;

export const Success = ({ workflowPrompts }: CellSuccessProps<FindWorkflowPrompts>) => {
  return <WorkflowPrompts workflowPrompts={workflowPrompts} />;
};
