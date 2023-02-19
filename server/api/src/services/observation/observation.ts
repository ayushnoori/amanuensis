import type {
  QueryResolvers,
  MutationResolvers,
  ObservationsRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const observation: QueryResolvers['observation'] = () => {
  return db.observations.findMany();
};

export const observations: QueryResolvers['observations'] = ({ id }) => {
  return db.observations.findUnique({
    where: { id },
  });
};

export const createObservations: MutationResolvers['createObservations'] = ({
  input,
}) => {
  return db.observations.create({
    data: input,
  });
};

export const updateObservations: MutationResolvers['updateObservations'] = ({
  id,
  input,
}) => {
  return db.observations.update({
    data: input,
    where: { id },
  });
};

export const deleteObservations: MutationResolvers['deleteObservations'] = ({
  id,
}) => {
  return db.observations.delete({
    where: { id },
  });
};

export const Observations: ObservationsRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.observations.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.observations.findUnique({ where: { id: root?.id } }).Patients();
  },
};
