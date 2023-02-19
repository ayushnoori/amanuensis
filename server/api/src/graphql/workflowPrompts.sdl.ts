export const schema = gql`
  type WorkflowPrompt {
    id: String!
    name: String!
    prompt: String!
  }

  type Query {
    workflowPrompts: [WorkflowPrompt!]! @requireAuth
    workflowPrompt(id: String!): WorkflowPrompt @requireAuth
  }

  input CreateWorkflowPromptInput {
    name: String!
    prompt: String!
  }

  input UpdateWorkflowPromptInput {
    name: String
    prompt: String
  }

  type Mutation {
    createWorkflowPrompt(input: CreateWorkflowPromptInput!): WorkflowPrompt!
      @requireAuth
    updateWorkflowPrompt(
      id: String!
      input: UpdateWorkflowPromptInput!
    ): WorkflowPrompt! @requireAuth
    deleteWorkflowPrompt(id: String!): WorkflowPrompt! @requireAuth
  }
`;
