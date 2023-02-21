import type { Devices } from '@prisma/client';

import {
  device,
  devices,
  createDevices,
  updateDevices,
  deleteDevices,
} from './device';
import type { StandardScenario } from './device.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('device', () => {
  scenario('returns all device', async (scenario: StandardScenario) => {
    const result = await device();

    expect(result.length).toEqual(Object.keys(scenario.devices).length);
  });

  scenario('returns a single devices', async (scenario: StandardScenario) => {
    const result = await devices({ id: scenario.devices.one.id });

    expect(result).toEqual(scenario.devices.one);
  });

  scenario('creates a devices', async () => {
    const result = await createDevices({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a devices', async (scenario: StandardScenario) => {
    const original = (await devices({
      id: scenario.devices.one.id,
    })) as Devices;
    const result = await updateDevices({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a devices', async (scenario: StandardScenario) => {
    const original = (await deleteDevices({
      id: scenario.devices.one.id,
    })) as Devices;
    const result = await devices({ id: original.id });

    expect(result).toEqual(null);
  });
});
