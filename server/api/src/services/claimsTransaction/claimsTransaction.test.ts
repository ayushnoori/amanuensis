import type { ClaimsTransactions } from '@prisma/client';

import {
  claimsTransaction,
  claimsTransactions,
  createClaimsTransactions,
  updateClaimsTransactions,
  deleteClaimsTransactions,
} from './claimsTransaction';
import type { StandardScenario } from './claimsTransaction.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('claimsTransaction', () => {
  scenario(
    'returns all claimsTransaction',
    async (scenario: StandardScenario) => {
      const result = await claimsTransaction();

      expect(result.length).toEqual(
        Object.keys(scenario.claimsTransactions).length,
      );
    },
  );

  scenario(
    'returns a single claimsTransactions',
    async (scenario: StandardScenario) => {
      const result = await claimsTransactions({
        id: scenario.claimsTransactions.one.id,
      });

      expect(result).toEqual(scenario.claimsTransactions.one);
    },
  );

  scenario('creates a claimsTransactions', async () => {
    const result = await createClaimsTransactions({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario(
    'updates a claimsTransactions',
    async (scenario: StandardScenario) => {
      const original = (await claimsTransactions({
        id: scenario.claimsTransactions.one.id,
      })) as ClaimsTransactions;
      const result = await updateClaimsTransactions({
        id: original.id,
        input: { id: 'String2' },
      });

      expect(result.id).toEqual('String2');
    },
  );

  scenario(
    'deletes a claimsTransactions',
    async (scenario: StandardScenario) => {
      const original = (await deleteClaimsTransactions({
        id: scenario.claimsTransactions.one.id,
      })) as ClaimsTransactions;
      const result = await claimsTransactions({ id: original.id });

      expect(result).toEqual(null);
    },
  );
});
