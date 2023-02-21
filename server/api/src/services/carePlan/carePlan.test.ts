import type { CarePlans } from '@prisma/client';

import {
  carePlan,
  carePlans,
  createCarePlans,
  updateCarePlans,
  deleteCarePlans,
} from './carePlan';
import type { StandardScenario } from './carePlan.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('carePlan', () => {
  scenario('returns all carePlan', async (scenario: StandardScenario) => {
    const result = await carePlan();

    expect(result.length).toEqual(Object.keys(scenario.carePlans).length);
  });

  scenario('returns a single carePlans', async (scenario: StandardScenario) => {
    const result = await carePlans({ id: scenario.carePlans.one.id });

    expect(result).toEqual(scenario.carePlans.one);
  });

  scenario('creates a carePlans', async () => {
    const result = await createCarePlans({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a carePlans', async (scenario: StandardScenario) => {
    const original = (await carePlans({
      id: scenario.carePlans.one.id,
    })) as CarePlans;
    const result = await updateCarePlans({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a carePlans', async (scenario: StandardScenario) => {
    const original = (await deleteCarePlans({
      id: scenario.carePlans.one.id,
    })) as CarePlans;
    const result = await carePlans({ id: original.id });

    expect(result).toEqual(null);
  });
});
