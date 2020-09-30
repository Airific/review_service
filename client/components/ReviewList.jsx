/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Review from './Review.jsx';

const ListGrid = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: start;

`;

const Nested = Styled.div`
  width: 450px;
  margin-bottom: 15px;

`;

const ReviewList = ({ reviews = [] }) => {
  const list = reviews.slice(0, 6).map(
    (review) => (
      <Nested>
        <Review review={review} key={review._id} />
      </Nested>
    ),
  );
  return (
    <ListGrid>
      {list}
    </ListGrid>
  );
};

export default ReviewList;
