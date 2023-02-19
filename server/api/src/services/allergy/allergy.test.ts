import type { Allergies } from '@prisma/client';

import {
  allergy,
  allergies,
  createAllergies,
  updateAllergies,
  deleteAllergies,
} from './allergy';
import type { StandardScenario } from './allergy.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('allergy', () => {
  scenario('returns all allergy', async (scenario: StandardScenario) => {
    const result = await allergy();

    expect(result.length).toEqual(Object.keys(scenario.allergies).length);
  });

  scenario('returns a single allergies', async (scenario: StandardScenario) => {
    const result = await allergies({ id: scenario.allergies.one.id });

    expect(result).toEqual(scenario.allergies.one);
  });

  scenario('creates a allergies', async () => {
    const result = await createAllergies({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a allergies', async (scenario: StandardScenario) => {
    const original = (await allergies({
      id: scenario.allergies.one.id,
    })) as Allergies;
    const result = await updateAllergies({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a allergies', async (scenario: StandardScenario) => {
    const original = (await deleteAllergies({
      id: scenario.allergies.one.id,
    })) as Allergies;
    const result = await allergies({ id: original.id });

    expect(result).toEqual(null);
  });
});
