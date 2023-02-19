import { render } from '@redwoodjs/testing/web';

import GoogleIcon from './GoogleIcon';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GoogleIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GoogleIcon />);
    }).not.toThrow();
  });
});
