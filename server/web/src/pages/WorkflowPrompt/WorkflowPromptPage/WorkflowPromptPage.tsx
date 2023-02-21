import WorkflowPromptCell from 'src/components/WorkflowPrompt/WorkflowPromptCell';

type WorkflowPromptPageProps = {
  id: string;
};

export default function WorkflowPromptPage({ id }: WorkflowPromptPageProps) {
  return <WorkflowPromptCell id={id} />;
}
