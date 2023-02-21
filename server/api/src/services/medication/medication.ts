import type {
  QueryResolvers,
  MutationResolvers,
  MedicationsRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const medication: QueryResolvers['medication'] = () => {
  return db.medications.findMany();
};

export const medications: QueryResolvers['medications'] = ({ id }) => {
  return db.medications.findUnique({
    where: { id },
  });
};

export const createMedications: MutationResolvers['createMedications'] = ({
  input,
}) => {
  return db.medications.create({
    data: input,
  });
};

export const updateMedications: MutationResolvers['updateMedications'] = ({
  id,
  input,
}) => {
  return db.medications.update({
    data: input,
    where: { id },
  });
};

export const deleteMedications: MutationResolvers['deleteMedications'] = ({
  id,
}) => {
  return db.medications.delete({
    where: { id },
  });
};

export const Medications: MedicationsRelationResolvers = {
  Encounters: (_obj, { root }) => {
    return db.medications.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Patients: (_obj, { root }) => {
    return db.medications.findUnique({ where: { id: root?.id } }).Patients();
  },
  Payers: (_obj, { root }) => {
    return db.medications.findUnique({ where: { id: root?.id } }).Payers();
  },
};
