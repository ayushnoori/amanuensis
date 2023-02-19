import { Configuration, OpenAIApi } from 'openai';
import { generateTextFromPatient } from './generate-text-from-patient';

const OPENAI_API_KEY = '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';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const queryGpt = async (prompt: string) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 1000,
    top_p: 0.2,
  });
  return response?.data?.choices[0]?.text ?? null;
};

export const generateQuestions = async (userId: string): Promise<string[]> => {
  const textProfile = generateTextFromPatient(userId); // TODO load real data
  const prompt = 'Given the above medical history of this patient, generate a list of questions that a physician should ask to the patientt to learn more about their medical condition and symptom progression:'; // TODO fill out prompt
  const stringResponse = await queryGpt(textProfile + '\n\n' + prompt);
  const arrayOfQuestions: string[] = stringResponse
    .replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, '') // Removes all unnecessary whitesapce
    .split('\n'); // Splits string into multiple objects
  return arrayOfQuestions;
};

export const generateSummary = async (userId: string) => {
  const textProfile = generateTextFromPatient(userId); // TODO load r
  const prompt = 'Generate a concise summary of the above medical history of this patient:';
  const rawSummary = await queryGpt(textProfile + '\n\n' + prompt);
  return rawSummary
    .replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, '') // Removes all unnecessary whitesapce
    .split('\n'); // Splits string into multiple objects
};
