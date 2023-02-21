import { render } from '@redwoodjs/testing/web';

import CrSubmit from './CrSubmit';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrSubmit', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrSubmit>Test</CrSubmit>);
    }).not.toThrow();
  });
});
