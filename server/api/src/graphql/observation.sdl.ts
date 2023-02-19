export const schema = gql`
  type Observations {
    id: String!
    date: DateTime
    patient: String
    encounter: String
    category: String
    code: String
    description: String
    value: String
    units: String
    type: String
    Encounters: Encounters
    Patients: Patients
  }

  type Query {
    observation: [Observations!]! @requireAuth
    observations(id: String!): Observations @requireAuth
  }

  input CreateObservationsInput {
    date: DateTime
    patient: String
    encounter: String
    category: String
    code: String
    description: String
    value: String
    units: String
    type: String
  }

  input UpdateObservationsInput {
    date: DateTime
    patient: String
    encounter: String
    category: String
    code: String
    description: String
    value: String
    units: String
    type: String
  }

  type Mutation {
    createObservations(input: CreateObservationsInput!): Observations!
      @requireAuth
    updateObservations(
      id: String!
      input: UpdateObservationsInput!
    ): Observations! @requireAuth
    deleteObservations(id: String!): Observations! @requireAuth
  }
`;
