import type { Prisma, CarePlans } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.CarePlansCreateArgs>({
  carePlans: {
    one: { data: { id: 'String' } },
    two: { data: { id: 'String' } },
  },
});

export type StandardScenario = ScenarioData<CarePlans, 'carePlans'>;
