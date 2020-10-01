/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { mount } from 'enzyme';
import Button from '../components/Button';

const reviews = [
  {
    name: 'test',
    date: 'May',
    photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
    text: 'Hello!',
  },
  {
    name: 'test',
    date: 'May',
    photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
    text: 'Hello!',
  },
  {
    name: 'test',
    date: 'May',
    photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
    text: 'Hello!',
  },
];

describe('render <button>', () => {
  const wrapper = mount(
    <Button reviews={reviews} />,
  );
  let container;
  let containerProp;

  beforeEach(() => {
    container = wrapper.find('button');
    containerProp = container.props();
  });

  it('should have a <button>', () => {
    expect(container).toHaveLength(1);
  });

  it('should have a <button> with the proper text', () => {
    expect(container.text()).toEqual('Show all 3 reviews');
  });

  it('should have a <button> without disabled prop', () => {
    expect(containerProp.disabled).toEqual(undefined);
  });
});
