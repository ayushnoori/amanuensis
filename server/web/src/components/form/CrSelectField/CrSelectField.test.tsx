import { render } from '@redwoodjs/testing/web';

import CrSelectField from './CrSelectField';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrSelectField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrSelectField name="test" />);
    }).not.toThrow();
  });
});
