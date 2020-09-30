/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';

const Star = Styled.span`
  font-size: 22px;
  color: rgb(255, 56, 92);
  width: 20px;
`;

const Grid = Styled.span`
  display: grid;
  grid-template-columns: 1.5fr auto 6fr;
  width: 300px;
  margin-left: 60px;
  border: 1px solid black;
  justify-items: center;
  align-items: center;
  line-height: 30px;
`;

const Average = Styled.div`
  grid-column-start: 2 / span2;
  padding-left: 2px;
  font-weight: 500;
  color: #222222;
  background-color: #fff;
  letter-spacing: normal;
  font-size: 20px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
`;

const Header = ({ rating, reviews }) => (
  <Grid>
    <Star>&#9733;</Star>
    <Average>
      {`${rating.total} (${reviews.length} reviews)`}
    </Average>
  </Grid>
);

export default Header;
