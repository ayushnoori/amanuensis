export const schema = gql`
  type Devices {
    id: String!
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    udi: String
    Encounters: Encounters
    Patients: Patients
  }

  type Query {
    device: [Devices!]! @requireAuth
    devices(id: String!): Devices @requireAuth
  }

  input CreateDevicesInput {
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    udi: String
  }

  input UpdateDevicesInput {
    start: DateTime
    stop: DateTime
    patient: String
    encounter: String
    code: Int
    description: String
    udi: String
  }

  type Mutation {
    createDevices(input: CreateDevicesInput!): Devices! @requireAuth
    updateDevices(id: String!, input: UpdateDevicesInput!): Devices!
      @requireAuth
    deleteDevices(id: String!): Devices! @requireAuth
  }
`;
