import type { Prisma, Payers } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.PayersCreateArgs>({
  payers: { one: { data: { id: 'String' } }, two: { data: { id: 'String' } } },
});

export type StandardScenario = ScenarioData<Payers, 'payers'>;
