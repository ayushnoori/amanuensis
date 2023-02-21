import type { PayerTransitions } from '@prisma/client';

import {
  payerTransition,
  payerTransitions,
  createPayerTransitions,
  updatePayerTransitions,
  deletePayerTransitions,
} from './payerTransition';
import type { StandardScenario } from './payerTransition.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('payerTransition', () => {
  scenario(
    'returns all payerTransition',
    async (scenario: StandardScenario) => {
      const result = await payerTransition();

      expect(result.length).toEqual(
        Object.keys(scenario.payerTransitions).length,
      );
    },
  );

  scenario(
    'returns a single payerTransitions',
    async (scenario: StandardScenario) => {
      const result = await payerTransitions({
        id: scenario.payerTransitions.one.id,
      });

      expect(result).toEqual(scenario.payerTransitions.one);
    },
  );

  scenario('creates a payerTransitions', async () => {
    const result = await createPayerTransitions({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a payerTransitions', async (scenario: StandardScenario) => {
    const original = (await payerTransitions({
      id: scenario.payerTransitions.one.id,
    })) as PayerTransitions;
    const result = await updatePayerTransitions({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a payerTransitions', async (scenario: StandardScenario) => {
    const original = (await deletePayerTransitions({
      id: scenario.payerTransitions.one.id,
    })) as PayerTransitions;
    const result = await payerTransitions({ id: original.id });

    expect(result).toEqual(null);
  });
});
