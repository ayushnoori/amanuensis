import type { Encounters } from '@prisma/client';

import {
  encounter,
  encounters,
  createEncounters,
  updateEncounters,
  deleteEncounters,
} from './encounter';
import type { StandardScenario } from './encounter.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('encounter', () => {
  scenario('returns all encounter', async (scenario: StandardScenario) => {
    const result = await encounter();

    expect(result.length).toEqual(Object.keys(scenario.encounters).length);
  });

  scenario(
    'returns a single encounters',
    async (scenario: StandardScenario) => {
      const result = await encounters({ id: scenario.encounters.one.id });

      expect(result).toEqual(scenario.encounters.one);
    },
  );

  scenario('creates a encounters', async () => {
    const result = await createEncounters({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a encounters', async (scenario: StandardScenario) => {
    const original = (await encounters({
      id: scenario.encounters.one.id,
    })) as Encounters;
    const result = await updateEncounters({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a encounters', async (scenario: StandardScenario) => {
    const original = (await deleteEncounters({
      id: scenario.encounters.one.id,
    })) as Encounters;
    const result = await encounters({ id: original.id });

    expect(result).toEqual(null);
  });
});
