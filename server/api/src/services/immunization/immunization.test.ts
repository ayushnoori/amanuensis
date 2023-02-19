import type { Immunizations } from '@prisma/client';

import {
  immunization,
  immunizations,
  createImmunizations,
  updateImmunizations,
  deleteImmunizations,
} from './immunization';
import type { StandardScenario } from './immunization.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('immunization', () => {
  scenario('returns all immunization', async (scenario: StandardScenario) => {
    const result = await immunization();

    expect(result.length).toEqual(Object.keys(scenario.immunizations).length);
  });

  scenario(
    'returns a single immunizations',
    async (scenario: StandardScenario) => {
      const result = await immunizations({ id: scenario.immunizations.one.id });

      expect(result).toEqual(scenario.immunizations.one);
    },
  );

  scenario('creates a immunizations', async () => {
    const result = await createImmunizations({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a immunizations', async (scenario: StandardScenario) => {
    const original = (await immunizations({
      id: scenario.immunizations.one.id,
    })) as Immunizations;
    const result = await updateImmunizations({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a immunizations', async (scenario: StandardScenario) => {
    const original = (await deleteImmunizations({
      id: scenario.immunizations.one.id,
    })) as Immunizations;
    const result = await immunizations({ id: original.id });

    expect(result).toEqual(null);
  });
});
