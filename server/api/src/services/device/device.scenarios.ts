import type { Prisma, Devices } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.DevicesCreateArgs>({
  devices: { one: { data: { id: 'String' } }, two: { data: { id: 'String' } } },
});

export type StandardScenario = ScenarioData<Devices, 'devices'>;
