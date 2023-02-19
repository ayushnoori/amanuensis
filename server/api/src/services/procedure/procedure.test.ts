import type { Procedures } from '@prisma/client';

import {
  procedure,
  procedures,
  createProcedures,
  updateProcedures,
  deleteProcedures,
} from './procedure';
import type { StandardScenario } from './procedure.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('procedure', () => {
  scenario('returns all procedure', async (scenario: StandardScenario) => {
    const result = await procedure();

    expect(result.length).toEqual(Object.keys(scenario.procedures).length);
  });

  scenario(
    'returns a single procedures',
    async (scenario: StandardScenario) => {
      const result = await procedures({ id: scenario.procedures.one.id });

      expect(result).toEqual(scenario.procedures.one);
    },
  );

  scenario('creates a procedures', async () => {
    const result = await createProcedures({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a procedures', async (scenario: StandardScenario) => {
    const original = (await procedures({
      id: scenario.procedures.one.id,
    })) as Procedures;
    const result = await updateProcedures({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a procedures', async (scenario: StandardScenario) => {
    const original = (await deleteProcedures({
      id: scenario.procedures.one.id,
    })) as Procedures;
    const result = await procedures({ id: original.id });

    expect(result).toEqual(null);
  });
});
