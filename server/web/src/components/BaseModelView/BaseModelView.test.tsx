import { render } from '@redwoodjs/testing/web';

import BaseModelView from './BaseModelView';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BaseModelView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BaseModelView />);
    }).not.toThrow();
  });
});
