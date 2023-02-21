import type { QueryResolvers, MutationResolvers } from 'types/graphql';

import { db } from 'src/lib/db';

export const workflowPrompts: QueryResolvers['workflowPrompts'] = () => {
  return db.workflowPrompt.findMany();
};

export const workflowPrompt: QueryResolvers['workflowPrompt'] = ({ id }) => {
  return db.workflowPrompt.findUnique({
    where: { id },
  });
};

export const createWorkflowPrompt: MutationResolvers['createWorkflowPrompt'] =
  ({ input }) => {
    return db.workflowPrompt.create({
      data: input,
    });
  };

export const updateWorkflowPrompt: MutationResolvers['updateWorkflowPrompt'] =
  ({ id, input }) => {
    return db.workflowPrompt.update({
      data: input,
      where: { id },
    });
  };

export const deleteWorkflowPrompt: MutationResolvers['deleteWorkflowPrompt'] =
  ({ id }) => {
    return db.workflowPrompt.delete({
      where: { id },
    });
  };
