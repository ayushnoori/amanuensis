export const schema = gql`
  type Organizations {
    id: String!
    name: String
    address: String
    city: String
    state: String
    zip: Int
    lat: Float
    lon: Float
    phone: String
    revenue: Float
    utilization: Int
    ClaimsTransactions: [ClaimsTransactions]!
    Encounters: [Encounters]!
    Providers: [Providers]!
  }

  type Query {
    organization: [Organizations!]! @requireAuth
    organizations(id: String!): Organizations @requireAuth
  }

  input CreateOrganizationsInput {
    name: String
    address: String
    city: String
    state: String
    zip: Int
    lat: Float
    lon: Float
    phone: String
    revenue: Float
    utilization: Int
  }

  input UpdateOrganizationsInput {
    name: String
    address: String
    city: String
    state: String
    zip: Int
    lat: Float
    lon: Float
    phone: String
    revenue: Float
    utilization: Int
  }

  type Mutation {
    createOrganizations(input: CreateOrganizationsInput!): Organizations!
      @requireAuth
    updateOrganizations(
      id: String!
      input: UpdateOrganizationsInput!
    ): Organizations! @requireAuth
    deleteOrganizations(id: String!): Organizations! @requireAuth
  }
`;
