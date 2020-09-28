/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Review from './Review.jsx';

const ListGrid = Styled.div`
  display: flex;
  flex-flow: row wrap;

  justify-content: space-around;

`;

const Nested = Styled.div`
  width: 470px;
  margin-bottom: 20px;

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
