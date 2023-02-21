import type { Medications } from '@prisma/client';

import {
  medication,
  medications,
  createMedications,
  updateMedications,
  deleteMedications,
} from './medication';
import type { StandardScenario } from './medication.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('medication', () => {
  scenario('returns all medication', async (scenario: StandardScenario) => {
    const result = await medication();

    expect(result.length).toEqual(Object.keys(scenario.medications).length);
  });

  scenario(
    'returns a single medications',
    async (scenario: StandardScenario) => {
      const result = await medications({ id: scenario.medications.one.id });

      expect(result).toEqual(scenario.medications.one);
    },
  );

  scenario('creates a medications', async () => {
    const result = await createMedications({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a medications', async (scenario: StandardScenario) => {
    const original = (await medications({
      id: scenario.medications.one.id,
    })) as Medications;
    const result = await updateMedications({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a medications', async (scenario: StandardScenario) => {
    const original = (await deleteMedications({
      id: scenario.medications.one.id,
    })) as Medications;
    const result = await medications({ id: original.id });

    expect(result).toEqual(null);
  });
});
