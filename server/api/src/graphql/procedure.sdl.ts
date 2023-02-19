export const schema = gql`
  type Procedures {
    id: String!
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: BigInt
    description: String
    baseCost: Float
    reasonCode: Int
    reasonDescription: String
    Encounters: Encounters
    Patients: Patients
  }

  type Query {
    procedure: [Procedures!]! @requireAuth
    procedures(id: String!): Procedures @requireAuth
  }

  input CreateProceduresInput {
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: BigInt
    description: String
    baseCost: Float
    reasonCode: Int
    reasonDescription: String
  }

  input UpdateProceduresInput {
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: BigInt
    description: String
    baseCost: Float
    reasonCode: Int
    reasonDescription: String
  }

  type Mutation {
    createProcedures(input: CreateProceduresInput!): Procedures! @requireAuth
    updateProcedures(id: String!, input: UpdateProceduresInput!): Procedures!
      @requireAuth
    deleteProcedures(id: String!): Procedures! @requireAuth
  }
`;
