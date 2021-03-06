/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Review from './Review.jsx';

const ListGrid = Styled.div`
  padding-top: 48px;
    padding-bottom: 20px;
    margin-left: -8px !important;
    margin-right: -8px !important;
    width: calc(100% + 16px) !important;
    display: flex !important;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-start !important;
    flex-wrap: wrap !important;

`;

const Nested = Styled.div`
  width: 457px;
  margin-bottom: 30px;
  margin-right: 8.33333% !important;
  padding-left: 8px !important;
  padding-right: 8px !important;
`;

const ReviewList = ({ reviews = [] }) => {
  const list = reviews.slice(0, 6).map(
    (review) => (
      <Nested>
        <Review review={review} />
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
