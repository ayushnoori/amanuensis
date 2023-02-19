import { render } from '@redwoodjs/testing/web';

import ModelCellEmpty from './ModelCellEmpty';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ModelCellEmpty', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModelCellEmpty />);
    }).not.toThrow();
  });
});
