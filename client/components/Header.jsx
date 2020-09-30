/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';

const Star = Styled.span`
  font-size: 21px;
  color: rgb(255, 56, 92);
  width: 20px;
`;

const Grid = Styled.span`
  display: grid;
  grid-template-columns: 1.5fr auto 6fr;
  width: 300px;
  margin-left: 60px;
  align-items: center;
  justify-items: center;
  line-height: 30px;
`;

const Average = Styled.div`
  grid-column-start: 2 / span2;
  font-weight: 500;
  padding-left: 3px;
  color: #222222;
  background-color: #fff;
  letter-spacing: normal;
  font-size: 21px;
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
