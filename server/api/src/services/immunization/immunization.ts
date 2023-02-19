import type {
  QueryResolvers,
  MutationResolvers,
  ImmunizationsRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const immunization: QueryResolvers['immunization'] = () => {
  return db.immunizations.findMany();
};

export const immunizations: QueryResolvers['immunizations'] = ({ id }) => {
  return db.immunizations.findUnique({
    where: { id },
  });
};

export const createImmunizations: MutationResolvers['createImmunizations'] = ({
  input,
}) => {
  return db.immunizations.create({
    data: input,
  });
};

export const updateImmunizations: MutationResolvers['updateImmunizations'] = ({
  id,
  input,
}) => {
  return db.immunizations.update({
    data: input,
    where: { id },
  });
};

export const deleteImmunizations: MutationResolvers['deleteImmunizations'] = ({
  id,
}) => {
  return db.immunizations.delete({
    where: { id },
  });
};

export const Immunizations: ImmunizationsRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.immunizations
      .findUnique({ where: { id: root?.id } })
      .Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.immunizations.findUnique({ where: { id: root?.id } }).Patients();
  },
};
