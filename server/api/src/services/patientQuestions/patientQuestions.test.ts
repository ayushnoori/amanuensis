import type { PatientQuestion } from '@prisma/client';

import {
  patientQuestions,
  patientQuestion,
  createPatientQuestion,
  updatePatientQuestion,
  deletePatientQuestion,
} from './patientQuestions';
import type { StandardScenario } from './patientQuestions.scenarios';

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('patientQuestions', () => {
  scenario(
    'returns all patientQuestions',
    async (scenario: StandardScenario) => {
      const result = await patientQuestions();

      expect(result.length).toEqual(
        Object.keys(scenario.patientQuestion).length,
      );
    },
  );

  scenario(
    'returns a single patientQuestion',
    async (scenario: StandardScenario) => {
      const result = await patientQuestion({
        id: scenario.patientQuestion.one.id,
      });

      expect(result).toEqual(scenario.patientQuestion.one);
    },
  );

  scenario('creates a patientQuestion', async (scenario: StandardScenario) => {
    const result = await createPatientQuestion({
      input: {
        patientId: scenario.patientQuestion.two.patientId,
        question: 'String',
        askedAt: '2023-02-19T13:58:39.206Z',
        answeredAt: '2023-02-19T13:58:39.206Z',
        pertient: true,
      },
    });

    expect(result.patientId).toEqual(scenario.patientQuestion.two.patientId);
    expect(result.question).toEqual('String');
    expect(result.askedAt).toEqual(new Date('2023-02-19T13:58:39.206Z'));
    expect(result.answeredAt).toEqual(new Date('2023-02-19T13:58:39.206Z'));
    expect(result.pertient).toEqual(true);
  });

  scenario('updates a patientQuestion', async (scenario: StandardScenario) => {
    const original = (await patientQuestion({
      id: scenario.patientQuestion.one.id,
    })) as PatientQuestion;
    const result = await updatePatientQuestion({
      id: original.id,
      input: { question: 'String2' },
    });

    expect(result.question).toEqual('String2');
  });

  scenario('deletes a patientQuestion', async (scenario: StandardScenario) => {
    const original = (await deletePatientQuestion({
      id: scenario.patientQuestion.one.id,
    })) as PatientQuestion;
    const result = await patientQuestion({ id: original.id });

    expect(result).toEqual(null);
  });
});
