import type { Observations } from '@prisma/client';

import {
  observation,
  observations,
  createObservations,
  updateObservations,
  deleteObservations,
} from './observation';
import type { StandardScenario } from './observation.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('observation', () => {
  scenario('returns all observation', async (scenario: StandardScenario) => {
    const result = await observation();

    expect(result.length).toEqual(Object.keys(scenario.observations).length);
  });

  scenario(
    'returns a single observations',
    async (scenario: StandardScenario) => {
      const result = await observations({ id: scenario.observations.one.id });

      expect(result).toEqual(scenario.observations.one);
    },
  );

  scenario('creates a observations', async () => {
    const result = await createObservations({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a observations', async (scenario: StandardScenario) => {
    const original = (await observations({
      id: scenario.observations.one.id,
    })) as Observations;
    const result = await updateObservations({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a observations', async (scenario: StandardScenario) => {
    const original = (await deleteObservations({
      id: scenario.observations.one.id,
    })) as Observations;
    const result = await observations({ id: original.id });

    expect(result).toEqual(null);
  });
});
