import { db } from 'src/lib/db';

export const generateTextFromPatient = async (
  userId: string,
): Promise<string> => {
  const patient = await db.patients.findUnique({
    where: { id: userId },
    select: {
      // Personal Data
      id: true,
      prefix: true,
      first: true,
      last: true,
      birthDate: true,
      gender: true,
      race: true,
      ethnicity: true,
      // Encounter Data
      Encounters: {
        select: {
          id: true,
          reasonDescription: true,
          start: true,
          Organizations: {
            select: {
              name: true,
            },
          },
          Providers: {
            select: {
              name: true,
            },
          },
          encounterClass: true,
          Conditions: {
            select: {
              description: true,
            },
          },
          description: true,
          CarePlans: {
            select: {
              description: true,
              reasonDescription: true,
            },
          },
        },
      },
    },
  });

  let patientText = '';
  patientText += `Name: ${patient.prefix} ${patient.first} ${patient.last}\n`;
  patientText += `Birth Date: ${patient.birthDate}\n`;
  patientText += `Gender: ${patient.gender}\n`;
  patientText += `Race: ${patient.race}\n`;
  patientText += `Ethnicity: ${patient.ethnicity}\n\n`;

  patientText += `MEDICAL ENCOUNTERS\n`;
  for (let i = 0; i < patient.Encounters.length; i++) {
    const encounter = patient.Encounters[i];
    patientText += `Encounter Date: ${encounter.start}\n`;
    patientText += `Provider: ${encounter.Providers.name}\n`;
    patientText += `Visit Type: ${encounter.encounterClass}\n`;
    patientText += `Condition: ${encounter.Conditions.map(
      ({ description }) => description,
    ).join(',')}\n`;
    patientText += `Description: ${encounter.description} ${
      encounter.reasonDescription ? 'for ' : ''
    }${encounter.reasonDescription}\n`;
    patientText += `Care Plan: ${encounter.CarePlans.map(
      (cp) => `${cp.description} due to ${cp.reasonDescription}`,
    ).join(',')}\n\n`;
  }

  console.log(patientText);
  return `
    Patient Name: John Doe
    Date of Visit: March 1, 2023
    Chief Complaint: Memory problems
    History of Present Illness:
    John Doe is a 65-year-old male who presents to the memory clinic with complaints of memory problems. He reports that he has been having difficulty remembering recent events, such as where he put his keys or what he had for breakfast. He also states that he has been having trouble concentrating and feels easily distracted.
    Past Medical History:
    John Doe has a history of hypertension, hyperlipidemia, and type 2 diabetes mellitus. He takes medications for these conditions, including lisinopril, atorvastatin, and metformin.
    Family History:
    John Doe's father had Alzheimer's disease.
    Social History:
    John Doe is retired and lives with his wife. He does not smoke or drink alcohol.
    Physical Examination:
    Vital signs are within normal limits. The patient appears alert and oriented to person, place, and time. The neurological examination is unremarkable.
    Assessment and Plan:
    Based on the patient's complaints and family history, we suspect that John Doe may have mild cognitive impairment or early-stage Alzheimer's disease. We plan to order further testing, including cognitive testing and brain imaging, to help confirm the diagnosis. We will also provide John Doe with education about the disease process, support for him and his family, and referrals to community resources for additional assistance. We will schedule a follow-up appointment to review the test results and discuss further management options.
  `;
};
