import type { Prisma, WorkflowPrompt } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.WorkflowPromptCreateArgs>({
  workflowPrompt: {
    one: { data: { name: 'String', prompt: 'String' } },
    two: { data: { name: 'String', prompt: 'String' } },
  },
});

export type StandardScenario = ScenarioData<WorkflowPrompt, 'workflowPrompt'>;
