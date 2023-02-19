import type {
  QueryResolvers,
  MutationResolvers,
  PatientQuestionRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';

export const patientQuestions: QueryResolvers['patientQuestions'] = () => {
  return db.patientQuestion.findMany();
};

export const patientQuestion: QueryResolvers['patientQuestion'] = ({ id }) => {
  return db.patientQuestion.findUnique({
    where: { id },
  });
};

export const createPatientQuestion: MutationResolvers['createPatientQuestion'] =
  ({ input }) => {
    return db.patientQuestion.create({
      data: input,
    });
  };

export const updatePatientQuestion: MutationResolvers['updatePatientQuestion'] =
  ({ id, input }) => {
    return db.patientQuestion.update({
      data: input,
      where: { id },
    });
  };

export const deletePatientQuestion: MutationResolvers['deletePatientQuestion'] =
  ({ id }) => {
    return db.patientQuestion.delete({
      where: { id },
    });
  };

export const PatientQuestion: PatientQuestionRelationResolvers = {
  patient: (_obj, { root }) => {
    return db.patientQuestion.findUnique({ where: { id: root?.id } }).patient();
  },
};
