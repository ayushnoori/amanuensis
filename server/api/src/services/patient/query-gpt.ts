import { Configuration, OpenAIApi } from 'openai';
import { db } from 'src/lib/db';
import { generateTextFromPatient } from './generate-text-from-patient';

const OPENAI_API_KEY = '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';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const queryGpt = async (prompt: string) => {
  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 1000,
      top_p: 0.2,
    });
    console.log(response);
    return response?.data?.choices[0]?.text ?? null;
  } catch (err) {
    console.error(err);
  }
};

const removeWhiteSpace = (str: string): string => {
  return str.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, ''); // Removes all unnecessary whitespace
};

export const generateQuestions = async (userId: string): Promise<string[]> => {
  const textProfile = await generateTextFromPatient(userId);
  const prompt =
    'Given the above medical history of this patient, generate a list of questions that a physician should ask to the patientt to learn more about their medical condition and symptom progression:'; // TODO fill out prompt
  console.log(textProfile + '\n\n' + prompt);
  const stringResponse = await queryGpt(textProfile + '\n\n' + prompt);
  console.log(stringResponse);
  const arrayOfQuestions: string[] = removeWhiteSpace(stringResponse)
    .split('\n'); // Splits string into multiple objects
  return arrayOfQuestions;
};

export const generateSummary = async (userId: string) => {
  const textProfile = generateTextFromPatient(userId);
  const questions = await db.patientQuestion.findMany({
    where: {
      patientId: userId,
      pertient: true,
    },
    select: {
      question: true,
      answer: true,
      answeredAt: true,
    },
  });
  const filteredQuestions = questions.filter((q) => !!q.answer);
  const questionsSection =
    'The following questions where asked to the patient before their visit and these where the answers:\n' +
    filteredQuestions.map((q) => `${q.question}\n${q.answer}\n`);
  const prompt =
    'Generate a concise summary of the above medical history of this patient:';
  const rawSummary = await queryGpt(
    textProfile + '\n\n' + questionsSection + prompt,
  );
  return removeWhiteSpace(rawSummary); // Splits string into multiple objects
};
