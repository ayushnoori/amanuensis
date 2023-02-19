import type {
  QueryResolvers,
  MutationResolvers,
  PayersRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const payer: QueryResolvers['payer'] = () => {
  return db.payers.findMany();
};

export const payers: QueryResolvers['payers'] = ({ id }) => {
  return db.payers.findUnique({
    where: { id },
  });
};

export const createPayers: MutationResolvers['createPayers'] = ({ input }) => {
  return db.payers.create({
    data: input,
  });
};

export const updatePayers: MutationResolvers['updatePayers'] = ({
  id,
  input,
}) => {
  return db.payers.update({
    data: input,
    where: { id },
  });
};

export const deletePayers: MutationResolvers['deletePayers'] = ({ id }) => {
  return db.payers.delete({
    where: { id },
  });
};

export const Payers: PayersRelationResolvers = {
  Claims_Claims_primaryPatientInsuranceIdToPayers: (_obj, { root }) => {
    return db.payers
      .findUnique({ where: { id: root?.id } })
      .Claims_Claims_primaryPatientInsuranceIdToPayers();
  },
  Claims_Claims_secondaryPatientInsuranceIdToPayers: (_obj, { root }) => {
    return db.payers
      .findUnique({ where: { id: root?.id } })
      .Claims_Claims_secondaryPatientInsuranceIdToPayers();
  },
  Encounters: (_obj, { root }) => {
    return db.payers.findUnique({ where: { id: root?.id } }).Encounters();
  },
  Medications: (_obj, { root }) => {
    return db.payers.findUnique({ where: { id: root?.id } }).Medications();
  },
  PayerTransitions_PayerTransitions_payerToPayers: (_obj, { root }) => {
    return db.payers
      .findUnique({ where: { id: root?.id } })
      .PayerTransitions_PayerTransitions_payerToPayers();
  },
  PayerTransitions_PayerTransitions_secondaryPayerToPayers: (
    _obj,
    { root },
  ) => {
    return db.payers
      .findUnique({ where: { id: root?.id } })
      .PayerTransitions_PayerTransitions_secondaryPayerToPayers();
  },
};
