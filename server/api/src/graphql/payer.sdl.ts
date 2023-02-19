export const schema = gql`
  type Payers {
    id: String!
    name: String
    ownership: String
    address: Boolean
    city: Boolean
    stateHeadquartered: Boolean
    zip: Boolean
    phone: Boolean
    amountCovered: Float
    amountUncovered: Float
    revenue: Float
    coveredEncounters: Int
    uncoveredEncounters: Int
    coveredMedications: Int
    uncoveredMedications: Int
    coveredProcedures: Int
    uncoveredProcedures: Int
    coveredImmunizations: Int
    uncoveredImmunizations: Int
    uniqueCustomers: Int
    qolsAvg: Float
    memberMonths: Int
    Claims_Claims_primaryPatientInsuranceIdToPayers: [Claims]!
    Claims_Claims_secondaryPatientInsuranceIdToPayers: [Claims]!
    Encounters: [Encounters]!
    Medications: [Medications]!
    PayerTransitions_PayerTransitions_payerToPayers: [PayerTransitions]!
    PayerTransitions_PayerTransitions_secondaryPayerToPayers: [PayerTransitions]!
  }

  type Query {
    payer: [Payers!]! @requireAuth
    payers(id: String!): Payers @requireAuth
  }

  input CreatePayersInput {
    name: String
    ownership: String
    address: Boolean
    city: Boolean
    stateHeadquartered: Boolean
    zip: Boolean
    phone: Boolean
    amountCovered: Float
    amountUncovered: Float
    revenue: Float
    coveredEncounters: Int
    uncoveredEncounters: Int
    coveredMedications: Int
    uncoveredMedications: Int
    coveredProcedures: Int
    uncoveredProcedures: Int
    coveredImmunizations: Int
    uncoveredImmunizations: Int
    uniqueCustomers: Int
    qolsAvg: Float
    memberMonths: Int
  }

  input UpdatePayersInput {
    name: String
    ownership: String
    address: Boolean
    city: Boolean
    stateHeadquartered: Boolean
    zip: Boolean
    phone: Boolean
    amountCovered: Float
    amountUncovered: Float
    revenue: Float
    coveredEncounters: Int
    uncoveredEncounters: Int
    coveredMedications: Int
    uncoveredMedications: Int
    coveredProcedures: Int
    uncoveredProcedures: Int
    coveredImmunizations: Int
    uncoveredImmunizations: Int
    uniqueCustomers: Int
    qolsAvg: Float
    memberMonths: Int
  }

  type Mutation {
    createPayers(input: CreatePayersInput!): Payers! @requireAuth
    updatePayers(id: String!, input: UpdatePayersInput!): Payers! @requireAuth
    deletePayers(id: String!): Payers! @requireAuth
  }
`;
