/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';

const Star = Styled.span`
  font-size: ${(props) => (props.isOpen ? '27px' : '21px')};
  color: rgb(255, 56, 92);
  width: 20px;
  margin-right: ${(props) => (props.isOpen ? '10px' : '0px')};
`;

const Grid = Styled.span`
  display: grid;
  grid-template-columns: 1.5fr auto 6fr;
  width: 300px;
  align-items: center;
  line-height: 30px;
`;

const Average = Styled.div`
  font-weight: 500;
  padding-left: 3px;
  font-size: ${(props) => (props.isOpen ? '32px' : '21px')};
  color: #222222;
  background-color: #fff;
  letter-spacing: normal;
`;

const Header = ({ rating, reviews, isOpen }) => (
  <Grid>
    <Star isOpen={isOpen}>&#9733;</Star>
    <Average isOpen={isOpen}>
      {`${rating.total} (${reviews.length} reviews)`}
    </Average>
  </Grid>
);

export default Header;
