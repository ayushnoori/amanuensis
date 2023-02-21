export const schema = gql`
  type Immunizations {
    id: String!
    date: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    baseCost: Float
    Encounters: Encounters
    Patients: Patients
  }

  type Query {
    immunization: [Immunizations!]! @requireAuth
    immunizations(id: String!): Immunizations @requireAuth
  }

  input CreateImmunizationsInput {
    date: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    baseCost: Float
  }

  input UpdateImmunizationsInput {
    date: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    baseCost: Float
  }

  type Mutation {
    createImmunizations(input: CreateImmunizationsInput!): Immunizations!
      @requireAuth
    updateImmunizations(
      id: String!
      input: UpdateImmunizationsInput!
    ): Immunizations! @requireAuth
    deleteImmunizations(id: String!): Immunizations! @requireAuth
  }
`;
