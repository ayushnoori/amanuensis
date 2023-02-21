import type {
  QueryResolvers,
  MutationResolvers,
  PayerTransitionsRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const payerTransition: QueryResolvers['payerTransition'] = () => {
  return db.payerTransitions.findMany();
};

export const payerTransitions: QueryResolvers['payerTransitions'] = ({
  id,
}) => {
  return db.payerTransitions.findUnique({
    where: { id },
  });
};

export const createPayerTransitions: MutationResolvers['createPayerTransitions'] =
  ({ input }) => {
    return db.payerTransitions.create({
      data: input,
    });
  };

export const updatePayerTransitions: MutationResolvers['updatePayerTransitions'] =
  ({ id, input }) => {
    return db.payerTransitions.update({
      data: input,
      where: { id },
    });
  };

export const deletePayerTransitions: MutationResolvers['deletePayerTransitions'] =
  ({ id }) => {
    return db.payerTransitions.delete({
      where: { id },
    });
  };

export const PayerTransitions: PayerTransitionsRelationResolvers = {
  Patients: (_obj, { root }) => {
    return db.payerTransitions
      .findUnique({ where: { id: root?.id } })
      .Patients();
  },
  Payers_PayerTransitions_payerToPayers: (_obj, { root }) => {
    return db.payerTransitions
      .findUnique({ where: { id: root?.id } })
      .Payers_PayerTransitions_payerToPayers();
  },
  Payers_PayerTransitions_secondaryPayerToPayers: (_obj, { root }) => {
    return db.payerTransitions
      .findUnique({ where: { id: root?.id } })
      .Payers_PayerTransitions_secondaryPayerToPayers();
  },
};
