import type { Conditions } from '@prisma/client';

import {
  condition,
  conditions,
  createConditions,
  updateConditions,
  deleteConditions,
} from './condition';
import type { StandardScenario } from './condition.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('condition', () => {
  scenario('returns all condition', async (scenario: StandardScenario) => {
    const result = await condition();

    expect(result.length).toEqual(Object.keys(scenario.conditions).length);
  });

  scenario(
    'returns a single conditions',
    async (scenario: StandardScenario) => {
      const result = await conditions({ id: scenario.conditions.one.id });

      expect(result).toEqual(scenario.conditions.one);
    },
  );

  scenario('creates a conditions', async () => {
    const result = await createConditions({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a conditions', async (scenario: StandardScenario) => {
    const original = (await conditions({
      id: scenario.conditions.one.id,
    })) as Conditions;
    const result = await updateConditions({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a conditions', async (scenario: StandardScenario) => {
    const original = (await deleteConditions({
      id: scenario.conditions.one.id,
    })) as Conditions;
    const result = await conditions({ id: original.id });

    expect(result).toEqual(null);
  });
});
