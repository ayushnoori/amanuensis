import { render } from '@redwoodjs/testing/web';

import OAuthButtonGroup from './OAuthButtonGroup';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OAuthButtonGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OAuthButtonGroup loginWithProvider={() => {}} />);
    }).not.toThrow();
  });
});
