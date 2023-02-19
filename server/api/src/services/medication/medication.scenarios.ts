import type { Prisma, Medications } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.MedicationsCreateArgs>({
  medications: {
    one: { data: { id: 'String' } },
    two: { data: { id: 'String' } },
  },
});

export type StandardScenario = ScenarioData<Medications, 'medications'>;
