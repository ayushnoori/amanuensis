import { render } from '@redwoodjs/testing/web';

import CrFormError from './CrFormError';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrFormError', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrFormError />);
    }).not.toThrow();
  });
});
