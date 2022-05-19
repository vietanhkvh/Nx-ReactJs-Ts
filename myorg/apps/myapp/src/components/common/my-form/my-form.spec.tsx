import { render } from '@testing-library/react';

import MyForm from './my-form';

describe('MyForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyForm />);
    expect(baseElement).toBeTruthy();
  });
});
