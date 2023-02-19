import { routes } from '@redwoodjs/router';

import BaseModelNavigationLayout from 'src/layouts/BaseModelNavigationLayout/BaseModelNavigationLayout';

type WorkflowPromptLayoutProps = {
  children: React.ReactNode
};

export default function WorkflowPromptsLayout({ children }: WorkflowPromptLayoutProps) {
  return (
    <BaseModelNavigationLayout
      headingText="WorkflowPrompts"
      newButtonText="WorkflowPrompt"
      subheadingText="WorkflowPrompt information"
      headingRoute={routes.workflowPrompts()}
      newModelRoute={routes.newWorkflowPrompt()}
    >
      {children}
    </BaseModelNavigationLayout>
  );
}
