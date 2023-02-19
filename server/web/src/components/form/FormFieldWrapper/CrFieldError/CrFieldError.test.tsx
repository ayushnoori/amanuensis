import { render } from '@redwoodjs/testing/web';

import CrFieldError from './CrFieldError';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrFieldError', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrFieldError name="test" />);
    }).not.toThrow();
  });
});
