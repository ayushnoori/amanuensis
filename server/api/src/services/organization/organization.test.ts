import type { Organizations } from '@prisma/client';

import {
  organization,
  organizations,
  createOrganizations,
  updateOrganizations,
  deleteOrganizations,
} from './organization';
import type { StandardScenario } from './organization.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('organization', () => {
  scenario('returns all organization', async (scenario: StandardScenario) => {
    const result = await organization();

    expect(result.length).toEqual(Object.keys(scenario.organizations).length);
  });

  scenario(
    'returns a single organizations',
    async (scenario: StandardScenario) => {
      const result = await organizations({ id: scenario.organizations.one.id });

      expect(result).toEqual(scenario.organizations.one);
    },
  );

  scenario('creates a organizations', async () => {
    const result = await createOrganizations({
      input: { id: 'String' },
    });

    expect(result.id).toEqual('String');
  });

  scenario('updates a organizations', async (scenario: StandardScenario) => {
    const original = (await organizations({
      id: scenario.organizations.one.id,
    })) as Organizations;
    const result = await updateOrganizations({
      id: original.id,
      input: { id: 'String2' },
    });

    expect(result.id).toEqual('String2');
  });

  scenario('deletes a organizations', async (scenario: StandardScenario) => {
    const original = (await deleteOrganizations({
      id: scenario.organizations.one.id,
    })) as Organizations;
    const result = await organizations({ id: original.id });

    expect(result).toEqual(null);
  });
});
