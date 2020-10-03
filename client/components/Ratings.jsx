/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  width: 1120px;
  display: flex !important;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap !important;
  padding-top: 32px;
  gap: 12px;
`;

const Rating = styled.div`
  width: 480px;
  color: #222222;
  font-weight: 400px;
  font-size: 16px;
  letter-spacing: normal;
  align-self: center;
  align-items: center;
  justify-items: center;
  line-height: 20px;
  height: 22px;
  width: 457px;
  margin-right: 8.6% !important;
`;

const Bar = styled.div`
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  height: 4px;
  position: absolute;
  border-radius: 17%;
`;

const BarCont = styled.div`
  align-self: center;
  position: relative;
  margin-top: 1px;
`;

const Span = styled.div`
 display: grid;
 justify-items: center;
 color: rgb(34, 34, 34);
 font-weight: 600;
 font-size: 12px;
 line-height: 16px;
 padding-top: 3px;
 width: 50px;

 `;

const Wrapper2 = styled.div`
  display: grid;
  grid-template-columns: 5fr 2fr 1fr;
  width: 458px;

`;

const Ratings = ({ rating }) => (

  <Grid>
    <Rating>
      <Wrapper2>
        Cleanliness
        <BarCont>
          <Bar width="125px" color="rgb(211,211,211)" />
          <Bar width={`${(rating.clean / 5) * 125}px`} color="black" />
        </BarCont>
        <Span>{rating.clean}</Span>
      </Wrapper2>
    </Rating>
    <Rating>
      <Wrapper2>
        Accuracy
        <BarCont>
          <Bar width="125px" color="rgb(211,211,211)" />
          <Bar width={`${(rating.accuracy / 5) * 125}px`} color="black" />
        </BarCont>
        <Span>{rating.accuracy}</Span>
      </Wrapper2>
    </Rating>
    <Rating>
      <Wrapper2>
        Communiction
        <BarCont>
          <Bar width="125px" color="rgb(211,211,211)" />
          <Bar width={`${(rating.communication / 5) * 125}px`} color="black" />
        </BarCont>
        <Span>{rating.communication}</Span>
      </Wrapper2>
    </Rating>
    <Rating>
      <Wrapper2>
        Location
        <BarCont>
          <Bar width="125px" color="rgb(211,211,211)" />
          <Bar width={`${(rating.location / 5) * 125}px`} color="black" />
        </BarCont>
        <Span>{rating.location}</Span>
      </Wrapper2>
    </Rating>
    <Rating>
      <Wrapper2>
        Check-in
        <BarCont>
          <Bar width="125px" color="rgb(211,211,211)" />
          <Bar width={`${(rating.check / 5) * 125}px`} color="black" />
        </BarCont>
        <Span>{rating.check}</Span>
      </Wrapper2>
    </Rating>
    <Rating>
      <Wrapper2>
        Value
        <BarCont>
          <Bar width="125px" color="rgb(211,211,211)" />
          <Bar width={`${(rating.value / 5) * 125}px`} color="black" />
        </BarCont>
        <Span>{rating.value}</Span>
      </Wrapper2>
    </Rating>
  </Grid>
);

export default Ratings;
