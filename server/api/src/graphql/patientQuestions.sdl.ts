export const schema = gql`
  type PatientQuestion {
    id: String!
    patientId: String!
    patient: Patients!
    question: String!
    answer: String
    askedAt: DateTime!
    answeredAt: DateTime
    pertient: Boolean!
  }

  type Query {
    patientQuestions: [PatientQuestion!]! @requireAuth
    patientQuestion(id: String!): PatientQuestion @requireAuth
    patientQuestionsByPatientId(id: String!): [PatientQuestion!]! @requireAuth
  }

  input CreatePatientQuestionInput {
    patientId: String!
    question: String!
    answer: String
    askedAt: DateTime!
    answeredAt: DateTime!
    pertient: Boolean!
  }

  input UpdatePatientQuestionInput {
    patientId: String
    question: String
    answer: String
    askedAt: DateTime
    answeredAt: DateTime
    pertient: Boolean
  }

  type Mutation {
    createPatientQuestion(input: CreatePatientQuestionInput!): PatientQuestion!
      @requireAuth
    updatePatientQuestion(
      id: String!
      input: UpdatePatientQuestionInput!
    ): PatientQuestion! @requireAuth
    deletePatientQuestion(id: String!): PatientQuestion! @requireAuth
  }
`;
