import type { Prisma, Supplies } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.SuppliesCreateArgs>({
  supplies: {
    one: { data: { id: 'String' } },
    two: { data: { id: 'String' } },
  },
});

export type StandardScenario = ScenarioData<Supplies, 'supplies'>;
