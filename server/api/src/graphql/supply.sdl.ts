export const schema = gql`
  type Supplies {
    id: String!
    date: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    quantity: Int
    Encounters: Encounters
    Patients: Patients
  }

  type Query {
    supply: [Supplies!]! @requireAuth
    supplies(id: String!): Supplies @requireAuth
  }

  input CreateSuppliesInput {
    date: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    quantity: Int
  }

  input UpdateSuppliesInput {
    date: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    quantity: Int
  }

  type Mutation {
    createSupplies(input: CreateSuppliesInput!): Supplies! @requireAuth
    updateSupplies(id: String!, input: UpdateSuppliesInput!): Supplies!
      @requireAuth
    deleteSupplies(id: String!): Supplies! @requireAuth
  }
`;
