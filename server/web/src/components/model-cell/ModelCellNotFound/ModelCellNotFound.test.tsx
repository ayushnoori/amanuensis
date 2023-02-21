import { render } from '@redwoodjs/testing/web';

import ModelCellNotFound from './ModelCellNotFound';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ModelCellNotFound', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModelCellNotFound />);
    }).not.toThrow();
  });
});
