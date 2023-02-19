import type {
  QueryResolvers,
  MutationResolvers,
  SuppliesRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const supply: QueryResolvers['supply'] = () => {
  return db.supplies.findMany();
};

export const supplies: QueryResolvers['supplies'] = ({ id }) => {
  return db.supplies.findUnique({
    where: { id },
  });
};

export const createSupplies: MutationResolvers['createSupplies'] = ({
  input,
}) => {
  return db.supplies.create({
    data: input,
  });
};

export const updateSupplies: MutationResolvers['updateSupplies'] = ({
  id,
  input,
}) => {
  return db.supplies.update({
    data: input,
    where: { id },
  });
};

export const deleteSupplies: MutationResolvers['deleteSupplies'] = ({ id }) => {
  return db.supplies.delete({
    where: { id },
  });
};

export const Supplies: SuppliesRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.supplies.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.supplies.findUnique({ where: { id: root?.id } }).Patients();
  },
};
