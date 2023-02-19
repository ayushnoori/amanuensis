import { render } from '@redwoodjs/testing/web';

import CrOpeningHoursField from './CrOpeningHoursField';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CrOpeningHoursField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CrOpeningHoursField />);
    }).not.toThrow();
  });
});
