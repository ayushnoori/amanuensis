import type {
  QueryResolvers,
  MutationResolvers,
  AllergiesRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const allergy: QueryResolvers['allergy'] = () => {
  return db.allergies.findMany();
};

export const allergies: QueryResolvers['allergies'] = ({ id }) => {
  return db.allergies.findUnique({
    where: { id },
  });
};

export const createAllergies: MutationResolvers['createAllergies'] = ({
  input,
}) => {
  return db.allergies.create({
    data: input,
  });
};

export const updateAllergies: MutationResolvers['updateAllergies'] = ({
  id,
  input,
}) => {
  return db.allergies.update({
    data: input,
    where: { id },
  });
};

export const deleteAllergies: MutationResolvers['deleteAllergies'] = ({
  id,
}) => {
  return db.allergies.delete({
    where: { id },
  });
};

export const Allergies: AllergiesRelationResolvers = {
  Patients: (_obj, { root }) => {
    return db.allergies.findUnique({ where: { id: root?.id } }).Patients();
  },
};
