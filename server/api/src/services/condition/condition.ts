import type {
  QueryResolvers,
  MutationResolvers,
  ConditionsRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const condition: QueryResolvers['condition'] = () => {
  return db.conditions.findMany();
};

export const conditions: QueryResolvers['conditions'] = ({ id }) => {
  return db.conditions.findUnique({
    where: { id },
  });
};

export const createConditions: MutationResolvers['createConditions'] = ({
  input,
}) => {
  return db.conditions.create({
    data: input,
  });
};

export const updateConditions: MutationResolvers['updateConditions'] = ({
  id,
  input,
}) => {
  return db.conditions.update({
    data: input,
    where: { id },
  });
};

export const deleteConditions: MutationResolvers['deleteConditions'] = ({
  id,
}) => {
  return db.conditions.delete({
    where: { id },
  });
};

export const Conditions: ConditionsRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.conditions.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.conditions.findUnique({ where: { id: root?.id } }).Patients();
  },
};
