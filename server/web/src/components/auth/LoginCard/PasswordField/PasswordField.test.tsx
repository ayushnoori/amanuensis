import { render } from '@redwoodjs/testing/web';

import PasswordField from './PasswordField';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordField />);
    }).not.toThrow();
  });
});
