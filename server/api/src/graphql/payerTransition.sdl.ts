export const schema = gql`
  type PayerTransitions {
    id: String!
    patient: String
    memberId: String
    startDate: DateTime
    endDate: DateTime
    payer: String
    secondaryPayer: String
    planOwnership: String
    ownerName: String
    Patients: Patients
    Payers_PayerTransitions_payerToPayers: Payers
    Payers_PayerTransitions_secondaryPayerToPayers: Payers
  }

  type Query {
    payerTransition: [PayerTransitions!]! @requireAuth
    payerTransitions(id: String!): PayerTransitions @requireAuth
  }

  input CreatePayerTransitionsInput {
    patient: String
    memberId: String
    startDate: DateTime
    endDate: DateTime
    payer: String
    secondaryPayer: String
    planOwnership: String
    ownerName: String
  }

  input UpdatePayerTransitionsInput {
    patient: String
    memberId: String
    startDate: DateTime
    endDate: DateTime
    payer: String
    secondaryPayer: String
    planOwnership: String
    ownerName: String
  }

  type Mutation {
    createPayerTransitions(
      input: CreatePayerTransitionsInput!
    ): PayerTransitions! @requireAuth
    updatePayerTransitions(
      id: String!
      input: UpdatePayerTransitionsInput!
    ): PayerTransitions! @requireAuth
    deletePayerTransitions(id: String!): PayerTransitions! @requireAuth
  }
`;
