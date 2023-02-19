export const schema = gql`
  type ClaimsTransactions {
    id: String!
    claimId: String
    chargeId: Int
    patient: String
    type: String
    amount: Float
    method: String
    fromDate: DateTime
    toDate: DateTime
    placeOfService: String
    procedureCode: BigInt
    modifier1: Boolean
    modifier2: Boolean
    diagnosisRef1: Int
    diagnosisRef2: Int
    diagnosisRef3: Int
    diagnosisRef4: Int
    units: Int
    departmentId: Int
    notes: String
    unitAmount: Float
    transferOutId: Int
    transferType: String
    payments: Float
    adjustments: Float
    transfers: Float
    outstanding: Float
    appointmentId: String
    lineNote: Boolean
    patientInsuranceId: String
    feeScheduleId: Int
    provider: String
    supervisingProviderId: String
    Encounters: Encounters
    Claims: Claims
    Patients: Patients
    Organizations: Organizations
    Providers_ClaimsTransactions_providerToProviders: Providers
    Providers_ClaimsTransactions_supervisingProviderIdToProviders: Providers
  }

  type Query {
    claimsTransaction: [ClaimsTransactions!]! @requireAuth
    claimsTransactions(id: String!): ClaimsTransactions @requireAuth
  }

  input CreateClaimsTransactionsInput {
    claimId: String
    chargeId: Int
    patient: String
    type: String
    amount: Float
    method: String
    fromDate: DateTime
    toDate: DateTime
    placeOfService: String
    procedureCode: BigInt
    modifier1: Boolean
    modifier2: Boolean
    diagnosisRef1: Int
    diagnosisRef2: Int
    diagnosisRef3: Int
    diagnosisRef4: Int
    units: Int
    departmentId: Int
    notes: String
    unitAmount: Float
    transferOutId: Int
    transferType: String
    payments: Float
    adjustments: Float
    transfers: Float
    outstanding: Float
    appointmentId: String
    lineNote: Boolean
    patientInsuranceId: String
    feeScheduleId: Int
    provider: String
    supervisingProviderId: String
  }

  input UpdateClaimsTransactionsInput {
    claimId: String
    chargeId: Int
    patient: String
    type: String
    amount: Float
    method: String
    fromDate: DateTime
    toDate: DateTime
    placeOfService: String
    procedureCode: BigInt
    modifier1: Boolean
    modifier2: Boolean
    diagnosisRef1: Int
    diagnosisRef2: Int
    diagnosisRef3: Int
    diagnosisRef4: Int
    units: Int
    departmentId: Int
    notes: String
    unitAmount: Float
    transferOutId: Int
    transferType: String
    payments: Float
    adjustments: Float
    transfers: Float
    outstanding: Float
    appointmentId: String
    lineNote: Boolean
    patientInsuranceId: String
    feeScheduleId: Int
    provider: String
    supervisingProviderId: String
  }

  type Mutation {
    createClaimsTransactions(
      input: CreateClaimsTransactionsInput!
    ): ClaimsTransactions! @requireAuth
    updateClaimsTransactions(
      id: String!
      input: UpdateClaimsTransactionsInput!
    ): ClaimsTransactions! @requireAuth
    deleteClaimsTransactions(id: String!): ClaimsTransactions! @requireAuth
  }
`;
