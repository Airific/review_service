/* eslint-disable react/prop-types */
import React from 'react';
import Styled, { keyframes } from 'styled-components';
//import Ratings from './Ratings.jsx';
import ReviewList from './ReviewList.jsx';
import Review from './Review.jsx';
import Header from './Header.jsx';

const ModalCon = Styled.div`
max-width: 1000px;
font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 15px;
  position: fixed;
  top: 28%;
  left: 0;
  right: 0;
  padding-left: 24px;
  color: #484848;
  z-index: 1;
`;

const Window = Styled.div`
  position: absolute;
  width: 100%;
  z-index: 2000;
  top: 0;
  left: 0;
  opacity: 0;
  animation-duration: 0.5s;
  transform: translateY(700px);
  &.slideIn {
    animation-name: slideIn;
    opacity: 1;
    transform: translateY(0);
  }
  &.slideOut {
    animation-name: slideOut;
    opacity: 0;
    transform: translateY(700px);
  }
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slideOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;

export const Overlay = Styled.div`
  background-color: #333;
  height: 175vh;
   opacity: .6;
  width: 100%;
`;

const CloseDiv = Styled.div`
  flex: 0 0 65px !important;
  position: sticky !important;
  text-align: left !important;
  z-index: 1;
  top: 0;
  background-color: #fff;
  border-top-right-radius: 15px;
`;

const CloseButton = Styled.button`
  background-color: #fff;
  font-size: 13px;
  font-weight: 450px;
  display: flex;
  margin-top: 12px;
  align-items: center;
  height: 27px;
  width: 27px;
  border: hidden;
  border-radius: 50%;
  outline: none;
  :hover {
    background-color: #F0F0F0;
    cursor: pointer;
  }
`;

const CloseSvg = Styled.svg`
  height: 12px;
  width: 12px;
  display: block;
  fill: currentcolor;
`;

const Content = Styled.div`
  display: flex;
  flex-direction: columns;
  flex-wrap: wrap;
  width: 100%;
  height: 480px;
 `;

const Grid = Styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 24px;
`;

const Rating = Styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
  width: 480px;
  color: #222222;
  font-weight: 300px;
  font-size: 14px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  letter-spacing: normal;
  word-break: break-word;
  line-height: 16px;

`;

const Bar = Styled.div`
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  height: 4px;
  position: absolute;
  border-radius: 17%;
`;

const BarCont = Styled.div`
  align-self: center;
  position: relative;
  margin-top: 1px;
`;

const Span = Styled.div`
 display: grid;
 justify-items: center;
 color: rgb(34, 34, 34);
 font-weight: 600;
 font-size: 12px;
 line-height: 16px;
 padding-top: 3px;
 width: 50px;

 `;

const Wrapper2 = Styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  width: 350px;
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

const Container3 = Styled.div`
  overflow: auto;
  height: 100%;
`;

const ListGrid = Styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

`;

const Nested = Styled.div`
  width: 540px;
  margin-bottom: 15px;

`;

const Reviews = (props) => {
  const list = props.reviews.map(
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

const Modal = (props) => {
  let fade = '';
  if (props.isOpen) {
    fade = 'slideIn';
  } else {
    fade = 'slideOut';
  }
 return (
  <div>
    {props.isOpen ? (
      <Window className={fade} isOpen={props.isOpen}>

         <ModalCon>
          <CloseDiv>
            <CloseButton type="button" onClick={props.handleClick}>

              <CloseSvg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false">
                <path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd">
                </path>
              </CloseSvg>
            </CloseButton>
          </CloseDiv>
           <Header isOpen={props.isOpen} rating={props.rating} reviews={props.reviews}/>
           <Content>

          <Ratings rating={props.rating} />
          <Container3>
          <Reviews reviews={props.reviews} />
          </Container3>
          </Content>
          </ModalCon>
          <Overlay onClick={() => { props.handleOverlay(); }} />
      </Window>
    )
      : null}
  </div>

)
}

export default Modal;
