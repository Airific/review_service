/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import Review from './Review.jsx';

const ReviewList = ({ reviews }) => {
  const list = reviews.map((review) => <Review review={review} key={review._id} />);
  return (
    <ul>
      {list}
    </ul>
  );
};

export default ReviewList;
