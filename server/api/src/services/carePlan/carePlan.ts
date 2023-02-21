import type {
  QueryResolvers,
  MutationResolvers,
  CarePlansRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const carePlan: QueryResolvers['carePlan'] = () => {
  return db.carePlans.findMany();
};

export const carePlans: QueryResolvers['carePlans'] = ({ id }) => {
  return db.carePlans.findUnique({
    where: { id },
  });
};

export const createCarePlans: MutationResolvers['createCarePlans'] = ({
  input,
}) => {
  return db.carePlans.create({
    data: input,
  });
};

export const updateCarePlans: MutationResolvers['updateCarePlans'] = ({
  id,
  input,
}) => {
  return db.carePlans.update({
    data: input,
    where: { id },
  });
};

export const deleteCarePlans: MutationResolvers['deleteCarePlans'] = ({
  id,
}) => {
  return db.carePlans.delete({
    where: { id },
  });
};

export const CarePlans: CarePlansRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.carePlans.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.carePlans.findUnique({ where: { id: root?.id } }).Patients();
  },
};
