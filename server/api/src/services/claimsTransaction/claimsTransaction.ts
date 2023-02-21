import type {
  QueryResolvers,
  MutationResolvers,
  ClaimsTransactionsRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const claimsTransaction: QueryResolvers['claimsTransaction'] = () => {
  return db.claimsTransactions.findMany();
};

export const claimsTransactions: QueryResolvers['claimsTransactions'] = ({
  id,
}) => {
  return db.claimsTransactions.findUnique({
    where: { id },
  });
};

export const createClaimsTransactions: MutationResolvers['createClaimsTransactions'] =
  ({ input }) => {
    return db.claimsTransactions.create({
      data: input,
    });
  };

export const updateClaimsTransactions: MutationResolvers['updateClaimsTransactions'] =
  ({ id, input }) => {
    return db.claimsTransactions.update({
      data: input,
      where: { id },
    });
  };

export const deleteClaimsTransactions: MutationResolvers['deleteClaimsTransactions'] =
  ({ id }) => {
    return db.claimsTransactions.delete({
      where: { id },
    });
  };

export const ClaimsTransactions: ClaimsTransactionsRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.claimsTransactions
      .findUnique({ where: { id: root?.id } })
      .Encounters();
  },
  Claims: (_obj, { root }) => {
    return db.claimsTransactions
      .findUnique({ where: { id: root?.id } })
      .Claims();
  },
  Patients: (_obj, { root }) => {
    return db.claimsTransactions
      .findUnique({ where: { id: root?.id } })
      .Patients();
  },
  Organizations: (_obj, { root }) => {
    return db.claimsTransactions
      .findUnique({ where: { id: root?.id } })
      .Organizations();
  },
  Providers_ClaimsTransactions_providerToProviders: (_obj, { root }) => {
    return db.claimsTransactions
      .findUnique({ where: { id: root?.id } })
      .Providers_ClaimsTransactions_providerToProviders();
  },
  Providers_ClaimsTransactions_supervisingProviderIdToProviders: (
    _obj,
    { root },
  ) => {
    return db.claimsTransactions
      .findUnique({ where: { id: root?.id } })
      .Providers_ClaimsTransactions_supervisingProviderIdToProviders();
  },
};
