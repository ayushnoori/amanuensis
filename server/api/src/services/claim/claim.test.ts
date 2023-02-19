import type { Claims } from '@prisma/client';

import {
  claim,
  claims,
  createClaims,
  updateClaims,
  deleteClaims,
} from './claim';
import type { StandardScenario } from './claim.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('claim', () => {
  scenario('returns all claim', async (scenario: StandardScenario) => {
    const result = await claim();

    expect(result.length).toEqual(Object.keys(scenario.claims).length);
  });

  scenario('returns a single claims', async (scenario: StandardScenario) => {
    const result = await claims({ id: scenario.claims.one.id });

    expect(result).toEqual(scenario.claims.one);
  });

  scenario('creates a claims', async () => {
    const result = await createClaims({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a claims', async (scenario: StandardScenario) => {
    const original = (await claims({ id: scenario.claims.one.id })) as Claims;
    const result = await updateClaims({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a claims', async (scenario: StandardScenario) => {
    const original = (await deleteClaims({
      id: scenario.claims.one.id,
    })) as Claims;
    const result = await claims({ id: original.id });

    expect(result).toEqual(null);
  });
});
