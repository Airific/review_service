/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../components/Modal';

describe('Render Modal', () => {
  const props = {
    reviews: [
      {
        name: 'test',
        date: 'May',
        photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
        text: 'Hello!',
      },
      {
        name: 'alissa',
        date: 'June',
        photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
        text: 'test!',
      },
      {
        name: 'hack reactor',
        date: 'October',
        photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
        text: 'Learn to code!',
      },

    ],
    rating: {
      communication: '5',
      location: '3',
      clean: '2',
      accuracy: '1',
      value: '4',
      check: '3',
      total: '3.45',
    },
  };

  it('renders without crashing', () => {
    const wrapper = render(<Modal reviews={props.reviews} rating={props.rating} />);
    expect(wrapper).toBeDefined();
  });
});
