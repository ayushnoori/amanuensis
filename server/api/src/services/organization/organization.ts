import type {
  QueryResolvers,
  MutationResolvers,
  OrganizationsRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const organization: QueryResolvers['organization'] = () => {
  return db.organizations.findMany();
};

export const organizations: QueryResolvers['organizations'] = ({ id }) => {
  return db.organizations.findUnique({
    where: { id },
  });
};

export const createOrganizations: MutationResolvers['createOrganizations'] = ({
  input,
}) => {
  return db.organizations.create({
    data: input,
  });
};

export const updateOrganizations: MutationResolvers['updateOrganizations'] = ({
  id,
  input,
}) => {
  return db.organizations.update({
    data: input,
    where: { id },
  });
};

export const deleteOrganizations: MutationResolvers['deleteOrganizations'] = ({
  id,
}) => {
  return db.organizations.delete({
    where: { id },
  });
};

export const Organizations: OrganizationsRelationResolvers = {
  ClaimsTransactions: (_obj, { root }) => {
    return db.organizations
      .findUnique({ where: { id: root?.id } })
      .ClaimsTransactions();
  },
  Encounters: (_obj, { root }) => {
    return db.organizations
      .findUnique({ where: { id: root?.id } })
      .Encounters();
  },
  Providers: (_obj, { root }) => {
    return db.organizations.findUnique({ where: { id: root?.id } }).Providers();
  },
};
