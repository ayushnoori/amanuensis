import { render } from '@redwoodjs/testing/web';

import ModelCellLoading from './ModelCellLoading';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ModelCellLoading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModelCellLoading />);
    }).not.toThrow();
  });
});
