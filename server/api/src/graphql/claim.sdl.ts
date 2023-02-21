export const schema = gql`
  type Claims {
    id: String!
    patient: String
    provider: String
    primaryPatientInsuranceId: String
    secondaryPatientInsuranceId: String
    departmentId: Int
    patientDepartmentId: Int
    diagnosis1: BigInt
    diagnosis2: BigInt
    diagnosis3: BigInt
    diagnosis4: BigInt
    diagnosis5: Boolean
    diagnosis6: Boolean
    diagnosis7: Boolean
    diagnosis8: Boolean
    referringProviderId: String
    appointmentId: String
    currentIllnessDate: DateTime
    serviceDate: DateTime
    supervisingProviderId: String
    status1: String
    status2: String
    statusp: String
    outstanding1: Int
    outstanding2: Int
    outstandingP: Int
    lastBilledDate1: DateTime
    lastBilledDate2: DateTime
    lastBilledDateP: DateTime
    healthcareClaimTypeId1: Int
    healthcareClaimTypeId2: Int
    Encounters: Encounters
    Patients: Patients
    Payers_Claims_primaryPatientInsuranceIdToPayers: Payers
    Providers_Claims_providerToProviders: Providers
    Providers_Claims_referringProviderIdToProviders: Providers
    Payers_Claims_secondaryPatientInsuranceIdToPayers: Payers
    Providers_Claims_supervisingProviderIdToProviders: Providers
    ClaimsTransactions: [ClaimsTransactions]!
  }

  type Query {
    claim: [Claims!]! @requireAuth
    claims(id: String!): Claims @requireAuth
  }

  input CreateClaimsInput {
    patient: String
    provider: String
    primaryPatientInsuranceId: String
    secondaryPatientInsuranceId: String
    departmentId: Int
    patientDepartmentId: Int
    diagnosis1: BigInt
    diagnosis2: BigInt
    diagnosis3: BigInt
    diagnosis4: BigInt
    diagnosis5: Boolean
    diagnosis6: Boolean
    diagnosis7: Boolean
    diagnosis8: Boolean
    referringProviderId: String
    appointmentId: String
    currentIllnessDate: DateTime
    serviceDate: DateTime
    supervisingProviderId: String
    status1: String
    status2: String
    statusp: String
    outstanding1: Int
    outstanding2: Int
    outstandingP: Int
    lastBilledDate1: DateTime
    lastBilledDate2: DateTime
    lastBilledDateP: DateTime
    healthcareClaimTypeId1: Int
    healthcareClaimTypeId2: Int
  }

  input UpdateClaimsInput {
    patient: String
    provider: String
    primaryPatientInsuranceId: String
    secondaryPatientInsuranceId: String
    departmentId: Int
    patientDepartmentId: Int
    diagnosis1: BigInt
    diagnosis2: BigInt
    diagnosis3: BigInt
    diagnosis4: BigInt
    diagnosis5: Boolean
    diagnosis6: Boolean
    diagnosis7: Boolean
    diagnosis8: Boolean
    referringProviderId: String
    appointmentId: String
    currentIllnessDate: DateTime
    serviceDate: DateTime
    supervisingProviderId: String
    status1: String
    status2: String
    statusp: String
    outstanding1: Int
    outstanding2: Int
    outstandingP: Int
    lastBilledDate1: DateTime
    lastBilledDate2: DateTime
    lastBilledDateP: DateTime
    healthcareClaimTypeId1: Int
    healthcareClaimTypeId2: Int
  }

  type Mutation {
    createClaims(input: CreateClaimsInput!): Claims! @requireAuth
    updateClaims(id: String!, input: UpdateClaimsInput!): Claims! @requireAuth
    deleteClaims(id: String!): Claims! @requireAuth
  }
`;
