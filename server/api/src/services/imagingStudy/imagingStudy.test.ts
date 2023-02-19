import type { ImagingStudies } from '@prisma/client';

import {
  imagingStudy,
  imagingStudies,
  createImagingStudies,
  updateImagingStudies,
  deleteImagingStudies,
} from './imagingStudy';
import type { StandardScenario } from './imagingStudy.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('imagingStudy', () => {
  scenario('returns all imagingStudy', async (scenario: StandardScenario) => {
    const result = await imagingStudy();

    expect(result.length).toEqual(Object.keys(scenario.imagingStudies).length);
  });

  scenario(
    'returns a single imagingStudies',
    async (scenario: StandardScenario) => {
      const result = await imagingStudies({
        id: scenario.imagingStudies.one.id,
      });

      expect(result).toEqual(scenario.imagingStudies.one);
    },
  );

  scenario('creates a imagingStudies', async () => {
    const result = await createImagingStudies({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a imagingStudies', async (scenario: StandardScenario) => {
    const original = (await imagingStudies({
      id: scenario.imagingStudies.one.id,
    })) as ImagingStudies;
    const result = await updateImagingStudies({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a imagingStudies', async (scenario: StandardScenario) => {
    const original = (await deleteImagingStudies({
      id: scenario.imagingStudies.one.id,
    })) as ImagingStudies;
    const result = await imagingStudies({ id: original.id });

    expect(result).toEqual(null);
  });
});
