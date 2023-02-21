export const schema = gql`
  type CarePlans {
    id: String!
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    reasonCode: Int
    reasonDescription: String
    Encounters: Encounters
    Patients: Patients
  }

  type Query {
    carePlan: [CarePlans!]! @requireAuth
    carePlans(id: String!): CarePlans @requireAuth
  }

  input CreateCarePlansInput {
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    reasonCode: Int
    reasonDescription: String
  }

  input UpdateCarePlansInput {
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    reasonCode: Int
    reasonDescription: String
  }

  type Mutation {
    createCarePlans(input: CreateCarePlansInput!): CarePlans! @requireAuth
    updateCarePlans(id: String!, input: UpdateCarePlansInput!): CarePlans!
      @requireAuth
    deleteCarePlans(id: String!): CarePlans! @requireAuth
  }
`;
