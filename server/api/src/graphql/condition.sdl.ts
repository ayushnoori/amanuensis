export const schema = gql`
  type Conditions {
    id: String!
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: BigInt
    description: String
    Encounters: Encounters
    Patients: Patients
  }

  type Query {
    condition: [Conditions!]! @requireAuth
    conditions(id: String!): Conditions @requireAuth
  }

  input CreateConditionsInput {
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: BigInt
    description: String
  }

  input UpdateConditionsInput {
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: BigInt
    description: String
  }

  type Mutation {
    createConditions(input: CreateConditionsInput!): Conditions! @requireAuth
    updateConditions(id: String!, input: UpdateConditionsInput!): Conditions!
      @requireAuth
    deleteConditions(id: String!): Conditions! @requireAuth
  }
`;
