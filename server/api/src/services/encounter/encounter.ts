import type {
  QueryResolvers,
  MutationResolvers,
  EncountersRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const encounter: QueryResolvers['encounter'] = () => {
  return db.encounters.findMany();
};

export const encounters: QueryResolvers['encounters'] = ({ id }) => {
  return db.encounters.findUnique({
    where: { id },
  });
};

export const createEncounters: MutationResolvers['createEncounters'] = ({
  input,
}) => {
  return db.encounters.create({
    data: input,
  });
};

export const updateEncounters: MutationResolvers['updateEncounters'] = ({
  id,
  input,
}) => {
  return db.encounters.update({
    data: input,
    where: { id },
  });
};

export const deleteEncounters: MutationResolvers['deleteEncounters'] = ({
  id,
}) => {
  return db.encounters.delete({
    where: { id },
  });
};

export const Encounters: EncountersRelationResolvers = {
  CarePlans: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).CarePlans();
  },
  Claims: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Claims();
  },
  ClaimsTransactions: (_obj, { root }) => {
    return db.encounters
      .findUnique({ where: { id: root?.id } })
      .ClaimsTransactions();
  },
  Conditions: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Conditions();
  },
  Devices: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Devices();
  },
  Organizations: (_obj, { root }) => {
    return db.encounters
      .findUnique({ where: { id: root?.id } })
      .Organizations();
  },
  Patients: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Patients();
  },
  Payers: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Payers();
  },
  Providers: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Providers();
  },
  ImagingStudies: (_obj, { root }) => {
    return db.encounters
      .findUnique({ where: { id: root?.id } })
      .ImagingStudies();
  },
  Immunizations: (_obj, { root }) => {
    return db.encounters
      .findUnique({ where: { id: root?.id } })
      .Immunizations();
  },
  Medications: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Medications();
  },
  Observations: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Observations();
  },
  Procedures: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Procedures();
  },
  Supplies: (_obj, { root }) => {
    return db.encounters.findUnique({ where: { id: root?.id } }).Supplies();
  },
};
