export const schema = gql`
  type Patients {
    id: String!
    birthDate: DateTime
    deathDate: Boolean
    ssn: String
    drivers: String
    passport: String
    prefix: String
    first: String
    last: String
    suffix: Boolean
    maiden: String
    marital: String
    race: String
    ethnicity: String
    gender: String
    birthPlace: String
    address: String
    city: String
    state: String
    county: String
    fips: Int
    zip: Int
    lat: Float
    lon: Float
    healthcareExpenses: Float
    healthcareCoverage: Float
    income: Int
    Allergies: [Allergies]!
    CarePlans: [CarePlans]!
    Claims: [Claims]!
    ClaimsTransactions: [ClaimsTransactions]!
    Conditions: [Conditions]!
    Devices: [Devices]!
    Encounters: [Encounters]!
    ImagingStudies: [ImagingStudies]!
    Immunizations: [Immunizations]!
    Medications: [Medications]!
    Observations: [Observations]!
    PayerTransitions: [PayerTransitions]!
    Procedures: [Procedures]!
    Supplies: [Supplies]!
    questions: [PatientQuestion]!
  }

  type Query {
    patient: [Patients!]! @requireAuth
    patients(id: String!): Patients @requireAuth
    patientSummary(id: String!): String @requireAuth
  }

  input CreatePatientsInput {
    birthDate: DateTime
    deathDate: Boolean
    ssn: String
    drivers: String
    passport: String
    prefix: String
    first: String
    last: String
    suffix: Boolean
    maiden: String
    marital: String
    race: String
    ethnicity: String
    gender: String
    birthPlace: String
    address: String
    city: String
    state: String
    county: String
    fips: Int
    zip: Int
    lat: Float
    lon: Float
    healthcareExpenses: Float
    healthcareCoverage: Float
    income: Int
  }

  input UpdatePatientsInput {
    birthDate: DateTime
    deathDate: Boolean
    ssn: String
    drivers: String
    passport: String
    prefix: String
    first: String
    last: String
    suffix: Boolean
    maiden: String
    marital: String
    race: String
    ethnicity: String
    gender: String
    birthPlace: String
    address: String
    city: String
    state: String
    county: String
    fips: Int
    zip: Int
    lat: Float
    lon: Float
    healthcareExpenses: Float
    healthcareCoverage: Float
    income: Int
  }

  type Mutation {
    createPatients(input: CreatePatientsInput!): Patients! @requireAuth
    updatePatients(id: String!, input: UpdatePatientsInput!): Patients!
      @requireAuth
    scheduleAppointment(userId: String!): String! @requireAuth
    deletePatients(id: String!): Patients! @requireAuth
  }
`;
