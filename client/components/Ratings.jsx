/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import avg from '../helpers/avg';

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding-top: 48px;
  padding-bottom: 25px;
`;

const Rating = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 500px;
  color: #222222;
  font-weight: 400px;
  font-size: 16px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  letter-spacing: normal;
  align-self: center;
  align-items: center;
  justify-items: center;
  line-height: 20px;
  height: 35px;
`;

const Text = styled.div`
  padding-left: 20px;
`;

const Bar = styled.div`
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  height: 5px;
  position: absolute;
`;

const BarCont = styled.div`
  align-self: center;
  position: relative;
  margin-top: 1px;
`;

const Span = styled.div`
 align-self: center;
 color: rgb(34, 34, 34);
 font-weight: 600;
 font-size: 12px;
 line-height: 16px;
 padding-top: 3px;
 `;

const Wrapper2 = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  width: 500px;
`;

const Ratings = (props) => {
  const findAvg = (item) => {
    const numbers2 = props.reviews.map((review) => review[item]);
    const avgs2 = avg(numbers2);
    return avgs2.toFixed(1);
  };
  return (

    <Grid>
      <Rating>
        <Wrapper2>
          Cleanliness
          <BarCont>
            <Bar width="150px" color="rgb(211,211,211)" />
            <Bar width={`${(findAvg('cleanliness') / 5) * 175}px`} color="black" />
          </BarCont>
          <Span>{findAvg('cleanliness')}</Span>
        </Wrapper2>
      </Rating>
      <Rating>
        <Wrapper2>
          <Text>Accuracy</Text>
          <BarCont>
            <Bar width="150px" color="rgb(211,211,211)" />
            <Bar width={`${(findAvg('accuracy') / 5) * 150}px`} color="black" />
          </BarCont>
          <Span>{findAvg('accuracy')}</Span>
        </Wrapper2>
      </Rating>
      <Rating>
        <Wrapper2>
          Communiction
          <BarCont>
            <Bar width="150px" color="rgb(211,211,211)" />
            <Bar width={`${(findAvg('communication') / 5) * 150}px`} color="black" />
          </BarCont>
          <Span>{findAvg('communication')}</Span>
        </Wrapper2>
      </Rating>
      <Rating>
        <Wrapper2>
          <Text>Location</Text>
          <BarCont>
            <Bar width="150px" color="rgb(211,211,211)" />
            <Bar width={`${(findAvg('location') / 5) * 150}px`} color="black" />
          </BarCont>
          <Span>{findAvg('location')}</Span>
        </Wrapper2>
      </Rating>
      <Rating>
        <Wrapper2>
          Check-in
          <BarCont>
            <Bar width="150px" color="rgb(211,211,211)" />
            <Bar width={`${(findAvg('check_in') / 5) * 150}px`} color="black" />
          </BarCont>
          <Span>{findAvg('check_in')}</Span>
        </Wrapper2>
      </Rating>
      <Rating>
        <Wrapper2>
          <Text>Value</Text>
          <BarCont>
            <Bar width="150px" color="rgb(211,211,211)" />
            <Bar width={`${(findAvg('value') / 5) * 150}px`} color="black" />
          </BarCont>
          <Span>{findAvg('value')}</Span>
        </Wrapper2>
      </Rating>
    </Grid>
  );
};

export default Ratings;
