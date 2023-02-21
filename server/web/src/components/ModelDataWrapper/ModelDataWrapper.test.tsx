import { render } from '@redwoodjs/testing/web';

import ModelDataWrapper from './ModelDataWrapper';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ModelDataWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModelDataWrapper />);
    }).not.toThrow();
  });
});
