import type { Supplies } from '@prisma/client';

import {
  supply,
  supplies,
  createSupplies,
  updateSupplies,
  deleteSupplies,
} from './supply';
import type { StandardScenario } from './supply.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('supply', () => {
  scenario('returns all supply', async (scenario: StandardScenario) => {
    const result = await supply();

    expect(result.length).toEqual(Object.keys(scenario.supplies).length);
  });

  scenario('returns a single supplies', async (scenario: StandardScenario) => {
    const result = await supplies({ id: scenario.supplies.one.id });

    expect(result).toEqual(scenario.supplies.one);
  });

  scenario('creates a supplies', async () => {
    const result = await createSupplies({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a supplies', async (scenario: StandardScenario) => {
    const original = (await supplies({
      id: scenario.supplies.one.id,
    })) as Supplies;
    const result = await updateSupplies({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a supplies', async (scenario: StandardScenario) => {
    const original = (await deleteSupplies({
      id: scenario.supplies.one.id,
    })) as Supplies;
    const result = await supplies({ id: original.id });

    expect(result).toEqual(null);
  });
});
