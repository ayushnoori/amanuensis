// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'



import PatientQuestionsLayout from 'src/layouts/PatientQuestionsLayout/PatientQuestionsLayout'
import WorkflowPromptsLayout from 'src/layouts/WorkflowPromptsLayout/WorkflowPromptsLayout';
import AuthenticationLayout from 'src/layouts/AuthenticationLayout/AuthenticationLayout';
import DoctorDashboardLayout from 'src/layouts/DoctorDashboardLayout/DoctorDashboardLayout';
import PatientDashboardLayout from 'src/layouts/PatientDashboardLayout/PatientDashboardLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={PatientDashboardLayout}>
        <Set wrap={PatientQuestionsLayout} title="Patient Questions" titleTo="Patient Questions" buttonLabel="New Patient Question" buttonTo="New Patient Question">
          <Route path="/patient/questions/new" page={PatientQuestionNewPatientQuestionPage} name="newPatientQuestion" />
          <Route path="/patient/questions/{id}/edit" page={PatientQuestionEditPatientQuestionPage} name="editPatientQuestion" />
          <Route path="/patient/questions/{id}" page={PatientQuestionPatientQuestionPage} name="patientQuestion" />
          <Route path="/patient/questions" page={PatientQuestionPatientQuestionsPage} name="patientQuestions" />
        </Set>
        <Route path="/patients/{userId:String}" page={SpeechTestPage} name="speechTest" />
      </Set>
      <Set wrap={DoctorDashboardLayout}>
        <Route path="/doctor/speech-test" page={SpeechTestPage} name="speechTest" />
        <Route path="/doctor/workflows" page={SpeechTestPage} name="speechTest" />
        <Set wrap={WorkflowPromptsLayout} title="Workflow Prompts" titleTo="Workflow Prompts" buttonLabel="New Workflow Prompt" buttonTo="New Workflow Prompt">
          <Route path="/doctor/workflow-prompts/new" page={WorkflowPromptNewWorkflowPromptPage} name="newWorkflowPrompt" />
          <Route path="/doctor/workflow-prompts/{id}/edit" page={WorkflowPromptEditWorkflowPromptPage} name="editWorkflowPrompt" />
          <Route path="/doctor/workflow-prompts/{id}" page={WorkflowPromptWorkflowPromptPage} name="workflowPrompt" />
          <Route path="/doctor/workflow-prompts" page={WorkflowPromptWorkflowPromptsPage} name="workflowPrompts" />
        </Set>
      </Set>
      <Set wrap={AuthenticationLayout}>
        <Route path="/auth/login" page={LoginPage} name="login" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
