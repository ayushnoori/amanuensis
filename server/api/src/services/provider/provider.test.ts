import type { Providers } from '@prisma/client';

import {
  provider,
  providers,
  createProviders,
  updateProviders,
  deleteProviders,
} from './provider';
import type { StandardScenario } from './provider.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('provider', () => {
  scenario('returns all provider', async (scenario: StandardScenario) => {
    const result = await provider();

    expect(result.length).toEqual(Object.keys(scenario.providers).length);
  });

  scenario('returns a single providers', async (scenario: StandardScenario) => {
    const result = await providers({ id: scenario.providers.one.id });

    expect(result).toEqual(scenario.providers.one);
  });

  scenario('creates a providers', async () => {
    const result = await createProviders({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a providers', async (scenario: StandardScenario) => {
    const original = (await providers({
      id: scenario.providers.one.id,
    })) as Providers;
    const result = await updateProviders({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a providers', async (scenario: StandardScenario) => {
    const original = (await deleteProviders({
      id: scenario.providers.one.id,
    })) as Providers;
    const result = await providers({ id: original.id });

    expect(result).toEqual(null);
  });
});
