import type { Prisma, ImagingStudies } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.ImagingStudiesCreateArgs>({
  imagingStudies: {
    one: { data: { id: 'String' } },
    two: { data: { id: 'String' } },
  },
});

export type StandardScenario = ScenarioData<ImagingStudies, 'imagingStudies'>;
