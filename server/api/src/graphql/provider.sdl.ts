export const schema = gql`
  type Providers {
    id: String!
    organization: String
    name: String
    gender: String
    speciality: String
    address: String
    city: String
    state: String
    zip: Int
    lat: Float
    lon: Float
    encounters: Int
    procedures: Int
    Claims_Claims_providerToProviders: [Claims]!
    Claims_Claims_referringProviderIdToProviders: [Claims]!
    Claims_Claims_supervisingProviderIdToProviders: [Claims]!
    ClaimsTransactions_ClaimsTransactions_providerToProviders: [ClaimsTransactions]!
    ClaimsTransactions_ClaimsTransactions_supervisingProviderIdToProviders: [ClaimsTransactions]!
    Encounters: [Encounters]!
    Organizations: Organizations
  }

  type Query {
    provider: [Providers!]! @requireAuth
    providers(id: String!): Providers @requireAuth
  }

  input CreateProvidersInput {
    organization: String
    name: String
    gender: String
    speciality: String
    address: String
    city: String
    state: String
    zip: Int
    lat: Float
    lon: Float
    encounters: Int
    procedures: Int
  }

  input UpdateProvidersInput {
    organization: String
    name: String
    gender: String
    speciality: String
    address: String
    city: String
    state: String
    zip: Int
    lat: Float
    lon: Float
    encounters: Int
    procedures: Int
  }

  type Mutation {
    createProviders(input: CreateProvidersInput!): Providers! @requireAuth
    updateProviders(id: String!, input: UpdateProvidersInput!): Providers!
      @requireAuth
    deleteProviders(id: String!): Providers! @requireAuth
  }
`;
