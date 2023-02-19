import type { Prisma, Immunizations } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.ImmunizationsCreateArgs>({
  immunizations: {
    one: { data: { id: 'String' } },
    two: { data: { id: 'String' } },
  },
});

export type StandardScenario = ScenarioData<Immunizations, 'immunizations'>;
