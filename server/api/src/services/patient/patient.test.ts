import type { Patients } from '@prisma/client';

import {
  patient,
  patients,
  createPatients,
  updatePatients,
  deletePatients,
} from './patient';
import type { StandardScenario } from './patient.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('patient', () => {
  scenario('returns all patient', async (scenario: StandardScenario) => {
    const result = await patient();

    expect(result.length).toEqual(Object.keys(scenario.patients).length);
  });

  scenario('returns a single patients', async (scenario: StandardScenario) => {
    const result = await patients({ id: scenario.patients.one.id });

    expect(result).toEqual(scenario.patients.one);
  });

  scenario('creates a patients', async () => {
    const result = await createPatients({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a patients', async (scenario: StandardScenario) => {
    const original = (await patients({
      id: scenario.patients.one.id,
    })) as Patients;
    const result = await updatePatients({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a patients', async (scenario: StandardScenario) => {
    const original = (await deletePatients({
      id: scenario.patients.one.id,
    })) as Patients;
    const result = await patients({ id: original.id });

    expect(result).toEqual(null);
  });
});
