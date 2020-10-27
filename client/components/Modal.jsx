/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Styled from 'styled-components';
import Review from './Review.jsx';
import Header from './Header.jsx';
import Search from './Search.jsx';

const ModalCon = Styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 15px;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  padding-left: 24px;
  color: #484848;
  z-index: 1;
  @media (max-width: 1220px) {
    width: calc(100% - 80px);
  }
  @media (max-width: 730px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }


`;

const Window = Styled.div`
  position: fixed;
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

const Overlay = Styled.div`
  background-color: #333;
  height: 100vh;
  opacity: .6;
  width: 100%;
`;
const CloseDiv = Styled.div`
  flex: 0 0 65px !important;
  text-align: left !important;
  z-index: 1;
  top: 0;
  background-color: #fff;
  border-top-right-radius: 15px;
`;

export const CloseButton = Styled.button`
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
position: sticky;
  height: 12px;
  width: 12px;
  display: block;
  fill: currentcolor;
`;

const Content = Styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 500px;
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
        <Review review={review} key={review._id} search={props.search} />
      </Nested>
    ),
  );
  return (
    <ListGrid>
      {list}
    </ListGrid>
  );
};

const SearchCon = Styled.div`
  margin-bottom: 30px;
  width: 90%;
`;

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleSearch(input) {
    this.setState({
      searchTerm: input,
    });
  }

  clearSearch() {
    this.setState({
      searchTerm: '',
    });
  }

  render() {
    let fade = '';
    if (this.props.isOpen) {
      fade = 'slideIn';
    } else {
      fade = 'slideOut';
    }
    const { searchTerm } = this.state;
    const { reviews } = this.props;

    let searchFiltered = reviews;
    if (searchTerm) {
      searchFiltered = [];

      for (let i = 0; i < reviews.length; i += 1) {
        const review = reviews[i];
        if (review.text.toLowerCase().includes(searchTerm.toLowerCase())) {
          searchFiltered.push(review);
        }
      }
    }

    return (
      <div>
        {this.props.isOpen ? (
          <Window className={fade} isOpen={this.props.isOpen}>
            <ModalCon>
              <CloseDiv>
                <CloseButton type="button" onClick={this.props.handleClick}>
                  <CloseSvg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false">
                    <path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd" />
                  </CloseSvg>
                </CloseButton>
              </CloseDiv>

              <Content>
                <Header
                  isOpen={this.props.isOpen}
                  rating={this.props.rating}
                  reviews={this.props.reviews}
                />
                <Ratings rating={this.props.rating} />
                <Container3>
                  <SearchCon>
                    <Search
                      handleSearch={(input) => { this.handleSearch(input); }}
                      clearSearch={this.clearSearch}
                    />
                  </SearchCon>

                  <Reviews
                    reviews={searchFiltered}
                    search={searchTerm}
                  />

                </Container3>
              </Content>
            </ModalCon>
            <Overlay onClick={() => { this.props.handleOverlay(); }} />
          </Window>
        )
          : null}
      </div>
    );
  }
}

export default Modal;
