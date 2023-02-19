import { render } from '@redwoodjs/testing/web';

import CrTextAreaField from './CrTextAreaField';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrTextAreaField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrTextAreaField />);
    }).not.toThrow();
  });
});
