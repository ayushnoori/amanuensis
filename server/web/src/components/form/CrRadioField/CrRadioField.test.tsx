import { render } from '@redwoodjs/testing/web';

import CrRadioField from './CrRadioField';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrRadioField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrRadioField />);
    }).not.toThrow();
  });
});
