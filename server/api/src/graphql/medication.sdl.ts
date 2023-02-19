export const schema = gql`
  type Medications {
    id: String!
    start: DateTime
    stop: DateTime
    patient: String
    payer: String
    encounter: String
    code: Int
    description: String
    baseCost: Float
    payerCoverage: Float
    dispenses: Int
    totalCost: Float
    reasonCode: Int
    reasonDescription: String
    Encounters: Encounters
    Patients: Patients
    Payers: Payers
  }

  type Query {
    medication: [Medications!]! @requireAuth
    medications(id: String!): Medications @requireAuth
  }

  input CreateMedicationsInput {
    start: DateTime
    stop: DateTime
    patient: String
    payer: String
    encounter: String
    code: Int
    description: String
    baseCost: Float
    payerCoverage: Float
    dispenses: Int
    totalCost: Float
    reasonCode: Int
    reasonDescription: String
  }

  input UpdateMedicationsInput {
    start: DateTime
    stop: DateTime
    patient: String
    payer: String
    encounter: String
    code: Int
    description: String
    baseCost: Float
    payerCoverage: Float
    dispenses: Int
    totalCost: Float
    reasonCode: Int
    reasonDescription: String
  }

  type Mutation {
    createMedications(input: CreateMedicationsInput!): Medications! @requireAuth
    updateMedications(
      id: String!
      input: UpdateMedicationsInput!
    ): Medications! @requireAuth
    deleteMedications(id: String!): Medications! @requireAuth
  }
`;
