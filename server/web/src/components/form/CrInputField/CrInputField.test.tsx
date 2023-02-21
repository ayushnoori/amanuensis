import { render } from '@redwoodjs/testing/web';

import CrInputField from './CrInputField';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrInputField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrInputField />);
    }).not.toThrow();
  });
});
