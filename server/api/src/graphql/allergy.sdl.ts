export const schema = gql`
  type Allergies {
    id: String!
    start: DateTime
    stop: Boolean
    patient: String
    encounter: String
    code: Int
    system: String
    description: String
    type: String
    category: String
    reaction1: Int
    description1: String
    severity1: String
    reaction2: Int
    description2: String
    severity2: String
    Patients: Patients
  }

  type Query {
    allergy: [Allergies!]! @requireAuth
    allergies(id: String!): Allergies @requireAuth
  }

  input CreateAllergiesInput {
    start: DateTime
    stop: Boolean
    patient: String
    encounter: String
    code: Int
    system: String
    description: String
    type: String
    category: String
    reaction1: Int
    description1: String
    severity1: String
    reaction2: Int
    description2: String
    severity2: String
  }

  input UpdateAllergiesInput {
    start: DateTime
    stop: Boolean
    patient: String
    encounter: String
    code: Int
    system: String
    description: String
    type: String
    category: String
    reaction1: Int
    description1: String
    severity1: String
    reaction2: Int
    description2: String
    severity2: String
  }

  type Mutation {
    createAllergies(input: CreateAllergiesInput!): Allergies! @requireAuth
    updateAllergies(id: String!, input: UpdateAllergiesInput!): Allergies!
      @requireAuth
    deleteAllergies(id: String!): Allergies! @requireAuth
  }
`;
