import { render } from '@redwoodjs/testing/web';

import CrCheckboxField from './CrCheckboxField';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrCheckboxField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrCheckboxField />);
    }).not.toThrow();
  });
});
