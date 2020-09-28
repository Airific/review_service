/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';

const ImageContainer = Styled.img`
  width: 56px;
  height: 56px;

  border-radius: 50%;

`;

const ReviewStyle = Styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
`;
const Top = Styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr  auto;

`;

const ReviewName = Styled.p`
  align-self: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  font-weight: 600;
  color: rgb(34, 34, 34);
  font-size: 16px;
  line-height: 20px;
  margin-left: 12px;


`;

const ReviewText = Styled.p`
  align-self: center;
  justify-content: center;
  flex-wrap: wrap;
  word-break: break-word;
  color: rgb(34, 34, 34);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  flex-direction: row;
  margin-top: 0px;


`;
const Date = Styled.div`
color: rgb(113, 113, 113);
font-weight: 400;
font-size: 14px;
line-height: 20px;

`;

const Review = ({ review }) => (
  <ReviewStyle>
    <Top>
      <ImageContainer src={`${review.photo}`} alt="" />
      <ReviewName>
        {review.name}
        <Date>
          {`${review.date} 2020`}
        </Date>
      </ReviewName>
    </Top>
    <ReviewText>{review.text}</ReviewText>
  </ReviewStyle>
);

export default Review;
