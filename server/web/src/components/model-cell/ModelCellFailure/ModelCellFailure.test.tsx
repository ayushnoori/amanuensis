import { render } from '@redwoodjs/testing/web';

import ModelCellFailure from './ModelCellFailure';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ModelCellFailure', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModelCellFailure />);
    }).not.toThrow();
  });
});
