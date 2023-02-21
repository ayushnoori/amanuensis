import type { Prisma, ClaimsTransactions } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.ClaimsTransactionsCreateArgs>({
  claimsTransactions: {
    one: { data: { id: 'String' } },
    two: { data: { id: 'String' } },
  },
});

export type StandardScenario = ScenarioData<
  ClaimsTransactions,
  'claimsTransactions'
>;
