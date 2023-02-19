import type {
  QueryResolvers,
  MutationResolvers,
  ProceduresRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const procedure: QueryResolvers['procedure'] = () => {
  return db.procedures.findMany();
};

export const procedures: QueryResolvers['procedures'] = ({ id }) => {
  return db.procedures.findUnique({
    where: { id },
  });
};

export const createProcedures: MutationResolvers['createProcedures'] = ({
  input,
}) => {
  return db.procedures.create({
    data: input,
  });
};

export const updateProcedures: MutationResolvers['updateProcedures'] = ({
  id,
  input,
}) => {
  return db.procedures.update({
    data: input,
    where: { id },
  });
};

export const deleteProcedures: MutationResolvers['deleteProcedures'] = ({
  id,
}) => {
  return db.procedures.delete({
    where: { id },
  });
};

export const Procedures: ProceduresRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.procedures.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.procedures.findUnique({ where: { id: root?.id } }).Patients();
  },
};
