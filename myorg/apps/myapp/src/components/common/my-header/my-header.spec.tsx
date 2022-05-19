import { render } from '@testing-library/react';

import MyHeader from './my-header';

describe('MyHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyHeader />);
    expect(baseElement).toBeTruthy();
  });
});
