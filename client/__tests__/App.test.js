/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('App', () => {
  test('should render', () => {
    const wrapper = shallow(
      <App />,
    );

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have state set properly', () => {
    const wrapper = shallow(
      <App />,
    );

    expect(wrapper.state().clicked).toEqual(false);
  });
});
