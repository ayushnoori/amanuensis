import { render } from '@redwoodjs/testing/web';

import CrLabel from './CrLabel';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrLabel', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrLabel name="test">Test</CrLabel>);
    }).not.toThrow();
  });
});
