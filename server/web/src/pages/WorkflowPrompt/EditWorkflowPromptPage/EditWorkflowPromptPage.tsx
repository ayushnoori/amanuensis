import EditWorkflowPromptCell from 'src/components/WorkflowPrompt/EditWorkflowPromptCell';

type WorkflowPromptPageProps = {
  id: string;
};

export default function EditWorkflowPromptPage({ id }: WorkflowPromptPageProps) {
  return <EditWorkflowPromptCell id={id} />;
}
