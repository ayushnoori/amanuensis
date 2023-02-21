import { render } from '@redwoodjs/testing/web';

import DataTable from './DataTable';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DataTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DataTable />);
    }).not.toThrow();
  });
});
