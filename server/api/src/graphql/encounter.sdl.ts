export const schema = gql`
  type Encounters {
    id: String!
    start: DateTime
    stop: DateTime
    patient: String
    organization: String
    provider: String
    payer: String
    encounterClass: String
    code: BigInt
    description: String
    baseEncounterCost: Float
    totalClaimCost: Float
    payerCoverage: Float
    reasonCode: BigInt
    reasonDescription: String
    CarePlans: [CarePlans]!
    Claims: [Claims]!
    ClaimsTransactions: [ClaimsTransactions]!
    Conditions: [Conditions]!
    Devices: [Devices]!
    Organizations: Organizations
    Patients: Patients
    Payers: Payers
    Providers: Providers
    ImagingStudies: [ImagingStudies]!
    Immunizations: [Immunizations]!
    Medications: [Medications]!
    Observations: [Observations]!
    Procedures: [Procedures]!
    Supplies: [Supplies]!
  }

  type Query {
    encounter: [Encounters!]! @requireAuth
    encounters(id: String!): Encounters @requireAuth
  }

  input CreateEncountersInput {
    start: DateTime
    stop: DateTime
    patient: String
    organization: String
    provider: String
    payer: String
    encounterClass: String
    code: BigInt
    description: String
    baseEncounterCost: Float
    totalClaimCost: Float
    payerCoverage: Float
    reasonCode: BigInt
    reasonDescription: String
  }

  input UpdateEncountersInput {
    start: DateTime
    stop: DateTime
    patient: String
    organization: String
    provider: String
    payer: String
    encounterClass: String
    code: BigInt
    description: String
    baseEncounterCost: Float
    totalClaimCost: Float
    payerCoverage: Float
    reasonCode: BigInt
    reasonDescription: String
  }

  type Mutation {
    createEncounters(input: CreateEncountersInput!): Encounters! @requireAuth
    updateEncounters(id: String!, input: UpdateEncountersInput!): Encounters!
      @requireAuth
    deleteEncounters(id: String!): Encounters! @requireAuth
  }
`;
