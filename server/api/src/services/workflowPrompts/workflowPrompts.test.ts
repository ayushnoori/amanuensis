import type { WorkflowPrompt } from '@prisma/client';

import {
  workflowPrompts,
  workflowPrompt,
  createWorkflowPrompt,
  updateWorkflowPrompt,
  deleteWorkflowPrompt,
} from './workflowPrompts';
import type { StandardScenario } from './workflowPrompts.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('workflowPrompts', () => {
  scenario(
    'returns all workflowPrompts',
    async (scenario: StandardScenario) => {
      const result = await workflowPrompts();

      expect(result.length).toEqual(
        Object.keys(scenario.workflowPrompt).length,
      );
    },
  );

  scenario(
    'returns a single workflowPrompt',
    async (scenario: StandardScenario) => {
      const result = await workflowPrompt({
        id: scenario.workflowPrompt.one.id,
      });

      expect(result).toEqual(scenario.workflowPrompt.one);
    },
  );

  scenario('creates a workflowPrompt', async () => {
    const result = await createWorkflowPrompt({
      input: { name: 'String', prompt: 'String' },
    });

    expect(result.name).toEqual('String');
    expect(result.prompt).toEqual('String');
  });

  scenario('updates a workflowPrompt', async (scenario: StandardScenario) => {
    const original = (await workflowPrompt({
      id: scenario.workflowPrompt.one.id,
    })) as WorkflowPrompt;
    const result = await updateWorkflowPrompt({
      id: original.id,
      input: { name: 'String2' },
    });

    expect(result.name).toEqual('String2');
  });

  scenario('deletes a workflowPrompt', async (scenario: StandardScenario) => {
    const original = (await deleteWorkflowPrompt({
      id: scenario.workflowPrompt.one.id,
    })) as WorkflowPrompt;
    const result = await workflowPrompt({ id: original.id });

    expect(result).toEqual(null);
  });
});
