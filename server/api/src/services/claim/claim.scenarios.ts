import type { Prisma, Claims } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.ClaimsCreateArgs>({
  claims: { one: { data: { id: 'String' } }, two: { data: { id: 'String' } } },
});

export type StandardScenario = ScenarioData<Claims, 'claims'>;
