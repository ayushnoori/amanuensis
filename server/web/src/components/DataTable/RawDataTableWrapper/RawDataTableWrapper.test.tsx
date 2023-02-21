import { render } from '@redwoodjs/testing/web';

import RawDataTableWrapper from './RawDataTableWrapper';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RawDataTableWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RawDataTableWrapper />);
    }).not.toThrow();
  });
});
