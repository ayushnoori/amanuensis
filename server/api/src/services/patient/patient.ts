import type {
  QueryResolvers,
  MutationResolvers,
  PatientsRelationResolvers,
} from 'types/graphql';

import { db } from 'src/lib/db';
import { generateQuestions, generateSummary } from './query-gpt';

export const patient: QueryResolvers['patient'] = () => {
  return db.patients.findMany();
};

export const patients: QueryResolvers['patients'] = ({ id }) => {
  return db.patients.findUnique({
    where: { id },
  });
};

export const patientSummary: QueryResolvers['patientSummary'] = async ({
  id,
}): Promise<string> => {
  const summary = await generateSummary(id);
  return;
};

export const createPatients: MutationResolvers['createPatients'] = ({
  input,
}) => {
  return db.patients.create({
    data: input,
  });
};

export const updatePatients: MutationResolvers['updatePatients'] = ({
  id,
  input,
}) => {
  return db.patients.update({
    data: input,
    where: { id },
  });
};

export const scheduleAppointment: MutationResolvers['scheduleAppointment'] =
  async ({ userId }: { userId: string}) => {
    const questionList: string[] = await generateQuestions(userId);
    const processedQuestionList = questionList.map((q) => ({
      patientId: userId,
      question: q,
      pertient: true,
    }));
    const questions = await db.patientQuestion.createMany({
      data: processedQuestionList,
    });
    console.log(questions);
    return '';
  };

export const deletePatients: MutationResolvers['deletePatients'] = ({ id }) => {
  return db.patients.delete({
    where: { id },
  });
};

export const Patients: PatientsRelationResolvers = {
  Allergies: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Allergies();
  },
  CarePlans: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).CarePlans();
  },
  Claims: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Claims();
  },
  ClaimsTransactions: (_obj, { root }) => {
    return db.patients
      .findUnique({ where: { id: root?.id } })
      .ClaimsTransactions();
  },
  Conditions: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Conditions();
  },
  Devices: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Devices();
  },
  Encounters: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Encounters();
  },
  ImagingStudies: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).ImagingStudies();
  },
  Immunizations: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Immunizations();
  },
  Medications: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Medications();
  },
  Observations: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Observations();
  },
  PayerTransitions: (_obj, { root }) => {
    return db.patients
      .findUnique({ where: { id: root?.id } })
      .PayerTransitions();
  },
  Procedures: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Procedures();
  },
  Supplies: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).Supplies();
  },
  questions: (_obj, { root }) => {
    return db.patients.findUnique({ where: { id: root?.id } }).questions();
  },
};
