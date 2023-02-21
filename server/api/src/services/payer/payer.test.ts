import type { Payers } from '@prisma/client';

import {
  payer,
  payers,
  createPayers,
  updatePayers,
  deletePayers,
} from './payer';
import type { StandardScenario } from './payer.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('payer', () => {
  scenario('returns all payer', async (scenario: StandardScenario) => {
    const result = await payer();

    expect(result.length).toEqual(Object.keys(scenario.payers).length);
  });

  scenario('returns a single payers', async (scenario: StandardScenario) => {
    const result = await payers({ id: scenario.payers.one.id });

    expect(result).toEqual(scenario.payers.one);
  });

  scenario('creates a payers', async () => {
    const result = await createPayers({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a payers', async (scenario: StandardScenario) => {
    const original = (await payers({ id: scenario.payers.one.id })) as Payers;
    const result = await updatePayers({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a payers', async (scenario: StandardScenario) => {
    const original = (await deletePayers({
      id: scenario.payers.one.id,
    })) as Payers;
    const result = await payers({ id: original.id });

    expect(result).toEqual(null);
  });
});
