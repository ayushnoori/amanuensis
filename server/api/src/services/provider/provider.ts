import type {
  QueryResolvers,
  MutationResolvers,
  ProvidersRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const provider: QueryResolvers['provider'] = () => {
  return db.providers.findMany();
};

export const providers: QueryResolvers['providers'] = ({ id }) => {
  return db.providers.findUnique({
    where: { id },
  });
};

export const createProviders: MutationResolvers['createProviders'] = ({
  input,
}) => {
  return db.providers.create({
    data: input,
  });
};

export const updateProviders: MutationResolvers['updateProviders'] = ({
  id,
  input,
}) => {
  return db.providers.update({
    data: input,
    where: { id },
  });
};

export const deleteProviders: MutationResolvers['deleteProviders'] = ({
  id,
}) => {
  return db.providers.delete({
    where: { id },
  });
};

export const Providers: ProvidersRelationResolvers = {
  Claims_Claims_providerToProviders: (_obj, { root }) => {
    return db.providers
      .findUnique({ where: { id: root?.id } })
      .Claims_Claims_providerToProviders();
  },
  Claims_Claims_referringProviderIdToProviders: (_obj, { root }) => {
    return db.providers
      .findUnique({ where: { id: root?.id } })
      .Claims_Claims_referringProviderIdToProviders();
  },
  Claims_Claims_supervisingProviderIdToProviders: (_obj, { root }) => {
    return db.providers
      .findUnique({ where: { id: root?.id } })
      .Claims_Claims_supervisingProviderIdToProviders();
  },
  ClaimsTransactions_ClaimsTransactions_providerToProviders: (
    _obj,
    { root },
  ) => {
    return db.providers
      .findUnique({ where: { id: root?.id } })
      .ClaimsTransactions_ClaimsTransactions_providerToProviders();
  },
  ClaimsTransactions_ClaimsTransactions_supervisingProviderIdToProviders: (
    _obj,
    { root },
  ) => {
    return db.providers
      .findUnique({ where: { id: root?.id } })
      .ClaimsTransactions_ClaimsTransactions_supervisingProviderIdToProviders();
  },
  Encounters: (_obj, { root }) => {
    return db.providers.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Organizations: (_obj, { root }) => {
    return db.providers.findUnique({ where: { id: root?.id } }).Organizations();
  },
};
