import { render } from '@redwoodjs/testing/web';

import FormFieldWrapper from './FormFieldWrapper';

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormFieldWrapper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormFieldWrapper />);
    }).not.toThrow();
  });
});
