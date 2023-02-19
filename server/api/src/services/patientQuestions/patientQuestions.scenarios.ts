import type { Prisma, PatientQuestion } from '@prisma/client';
import type { ScenarioData } from '@redwoodjs/testing/api';

export const standard = defineScenario<Prisma.PatientQuestionCreateArgs>({
  patientQuestion: {
    one: {
      data: {
        question: 'String',
        askedAt: '2023-02-19T13:58:39.214Z',
        answeredAt: '2023-02-19T13:58:39.214Z',
        pertient: true,
        patient: { create: { id: 'String' } },
      },
    },
    two: {
      data: {
        question: 'String',
        askedAt: '2023-02-19T13:58:39.215Z',
        answeredAt: '2023-02-19T13:58:39.215Z',
        pertient: true,
        patient: { create: { id: 'String' } },
      },
    },
  },
});

export type StandardScenario = ScenarioData<PatientQuestion, 'patientQuestion'>;
