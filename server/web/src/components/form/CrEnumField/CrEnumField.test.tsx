import { render } from '@redwoodjs/testing/web';

import CrEnumField from './CrEnumField';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrEnumField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrEnumField />);
    }).not.toThrow();
  });
});
