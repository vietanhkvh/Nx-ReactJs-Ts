import { render } from '@testing-library/react';

import MyListComponent from './my-list-component';

describe('MyListComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyListComponent />);
    expect(baseElement).toBeTruthy();
  });
});
