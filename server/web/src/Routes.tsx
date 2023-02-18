// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router';

import AdminDashboardLayout from 'src/layouts/AdminDashboardLayout/AdminDashboardLayout';

const Routes = () => {
  return (
    <Router>
      <Set wrap={AdminDashboardLayout}>
        <Route path="/speech-test" page={SpeechTestPage} name="speechTest" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  );
};

export default Routes;
