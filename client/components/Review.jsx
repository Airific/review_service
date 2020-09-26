/* eslint-disable react/prop-types */
import React from 'react';

const Review = (({ review }) => (
  <li>
    <span>{review.name}</span><br/>
    <span>{review.date}  2020</span><br/>
    <img src={review.photo} alt="" /><br/>
    <span>{review.text}</span>
  </li>
  )
);

export default Review;
