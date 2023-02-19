import { render } from '@redwoodjs/testing/web';

import BaseModelNavigationLayout from './BaseModelNavigationLayout';

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BaseModelNavigationLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BaseModelNavigationLayout />);
    }).not.toThrow();
  });
});
