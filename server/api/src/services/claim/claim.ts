import type {
  QueryResolvers,
  MutationResolvers,
  ClaimsRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const claim: QueryResolvers['claim'] = () => {
  return db.claims.findMany();
};

export const claims: QueryResolvers['claims'] = ({ id }) => {
  return db.claims.findUnique({
    where: { id },
  });
};

export const createClaims: MutationResolvers['createClaims'] = ({ input }) => {
  return db.claims.create({
    data: input,
  });
};

export const updateClaims: MutationResolvers['updateClaims'] = ({
  id,
  input,
}) => {
  return db.claims.update({
    data: input,
    where: { id },
  });
};

export const deleteClaims: MutationResolvers['deleteClaims'] = ({ id }) => {
  return db.claims.delete({
    where: { id },
  });
};

export const Claims: ClaimsRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.claims.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.claims.findUnique({ where: { id: root?.id } }).Patients();
  },
  Payers_Claims_primaryPatientInsuranceIdToPayers: (_obj, { root }) => {
    return db.claims
      .findUnique({ where: { id: root?.id } })
      .Payers_Claims_primaryPatientInsuranceIdToPayers();
  },
  Providers_Claims_providerToProviders: (_obj, { root }) => {
    return db.claims
      .findUnique({ where: { id: root?.id } })
      .Providers_Claims_providerToProviders();
  },
  Providers_Claims_referringProviderIdToProviders: (_obj, { root }) => {
    return db.claims
      .findUnique({ where: { id: root?.id } })
      .Providers_Claims_referringProviderIdToProviders();
  },
  Payers_Claims_secondaryPatientInsuranceIdToPayers: (_obj, { root }) => {
    return db.claims
      .findUnique({ where: { id: root?.id } })
      .Payers_Claims_secondaryPatientInsuranceIdToPayers();
  },
  Providers_Claims_supervisingProviderIdToProviders: (_obj, { root }) => {
    return db.claims
      .findUnique({ where: { id: root?.id } })
      .Providers_Claims_supervisingProviderIdToProviders();
  },
  ClaimsTransactions: (_obj, { root }) => {
    return db.claims
      .findUnique({ where: { id: root?.id } })
      .ClaimsTransactions();
  },
};
