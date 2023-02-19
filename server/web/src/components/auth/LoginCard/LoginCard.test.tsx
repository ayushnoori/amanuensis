import { render } from '@redwoodjs/testing/web';

import AuthenticationCard from './LoginCard';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthenticationCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthenticationCard />);
    }).not.toThrow();
  });
});
