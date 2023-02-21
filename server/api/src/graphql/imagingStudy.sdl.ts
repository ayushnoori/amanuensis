export const schema = gql`
  type ImagingStudies {
    id: String!
    date: DateTime
    patient: String
    encounter: String
    seriesUid: String
    bodySiteCode: Int
    bodySiteDescription: String
    modalityCode: String
    modalityDescription: String
    instanceUid: String
    sopCode: String
    sopDescription: String
    procedureCode: Int
    Encounters: Encounters
    Patients: Patients
  }

  type Query {
    imagingStudy: [ImagingStudies!]! @requireAuth
    imagingStudies(id: String!): ImagingStudies @requireAuth
  }

  input CreateImagingStudiesInput {
    date: DateTime
    patient: String
    encounter: String
    seriesUid: String
    bodySiteCode: Int
    bodySiteDescription: String
    modalityCode: String
    modalityDescription: String
    instanceUid: String
    sopCode: String
    sopDescription: String
    procedureCode: Int
  }

  input UpdateImagingStudiesInput {
    date: DateTime
    patient: String
    encounter: String
    seriesUid: String
    bodySiteCode: Int
    bodySiteDescription: String
    modalityCode: String
    modalityDescription: String
    instanceUid: String
    sopCode: String
    sopDescription: String
    procedureCode: Int
  }

  type Mutation {
    createImagingStudies(input: CreateImagingStudiesInput!): ImagingStudies!
      @requireAuth
    updateImagingStudies(
      id: String!
      input: UpdateImagingStudiesInput!
    ): ImagingStudies! @requireAuth
    deleteImagingStudies(id: String!): ImagingStudies! @requireAuth
  }
`;
