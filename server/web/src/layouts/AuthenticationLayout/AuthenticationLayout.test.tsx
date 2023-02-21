import { render } from '@redwoodjs/testing/web';

import AuthenticationLayout from './AuthenticationLayout';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AuthenticationLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthenticationLayout />);
    }).not.toThrow();
  });
});
