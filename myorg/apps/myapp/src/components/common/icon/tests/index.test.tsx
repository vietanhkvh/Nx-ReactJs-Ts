import React from 'react';
jest.mock('../../../../app/init-react-app', () => ({
  store: { getState: jest.fn() }
}));

import { reduxRender } from '../../../../utils/test-utils';
import Icon from '..';

describe('Icon', () => {
  test(`Reders`, () => {
    expect(() => {
      reduxRender(
        <Icon {...{
          name: 'logo',
          className: ''
        }} />, { initialState: {} })
    }).not.toThrow();
  });
});
