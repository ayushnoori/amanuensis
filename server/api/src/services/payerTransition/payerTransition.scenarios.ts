import type { Prisma, PayerTransitions } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.PayerTransitionsCreateArgs>({
  payerTransitions: {
    one: { data: { id: 'String' } },
    two: { data: { id: 'String' } },
  },
});

export type StandardScenario = ScenarioData<
  PayerTransitions,
  'payerTransitions'
>;
