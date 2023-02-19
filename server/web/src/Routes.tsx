// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router';

import DoctorDashboardLayout from './layouts/DoctorDashboardLayout/DoctorDashboardLayout';
import PatientDashboardLayout from './layouts/PatientDashboardLayout/PatientDashboardLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={PatientDashboardLayout}>
        <Route path="/patients/{id:String}" page={SpeechTestPage} name="speechTest" />
      </Set>
      <Set wrap={DoctorDashboardLayout}>
        <Route path="/doctor/speech-test" page={SpeechTestPage} name="speechTest" />
        <Route path="/doctor/workflows" page={SpeechTestPage} name="speechTest" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
