/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';

const ButtonCon = Styled.button`
  display: inline-block;
  cursor: pointer;
  position: relative;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  border-radius: 8px;
  border: 1px solid rgb(34, 34, 34);
  outline: none;
  padding: 13px 23px;
  &:hover {

    background-color:rgba(0, 0, 0, 0.1);
  }

  background-color: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  width: auto;
  margin: 0px;
`;

const Button = ({ reviews, handleClick }) => (
  // eslint-disable-next-line react/jsx-one-expression-per-line
  <ButtonCon onClick={handleClick}>Show all {reviews.length} reviews</ButtonCon>
);

export default Button;
