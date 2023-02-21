import { render } from '@redwoodjs/testing/web';

import BaseModelTable from './BaseModelTable';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BaseModelTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BaseModelTable />);
    }).not.toThrow();
  });
});
