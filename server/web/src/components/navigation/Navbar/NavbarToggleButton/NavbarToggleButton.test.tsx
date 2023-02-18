import { render } from '@redwoodjs/testing/web';

import NavbarToggleButton from './NavbarToggleButton';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavbarToggleButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavbarToggleButton />);
    }).not.toThrow();
  });
});
