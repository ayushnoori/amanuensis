import type { Prisma, Conditions } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.ConditionsCreateArgs>({
  conditions: {
    one: { data: { id: 'String' } },
    two: { data: { id: 'String' } },
  },
});

export type StandardScenario = ScenarioData<Conditions, 'conditions'>;
