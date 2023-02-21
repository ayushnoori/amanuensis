import { render } from '@redwoodjs/testing/web';

import RawDataTable from './RawDataTable';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RawDataTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RawDataTable />);
    }).not.toThrow();
  });
});
