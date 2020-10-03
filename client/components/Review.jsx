/* eslint-disable prefer-template */
/* eslint-disable react/destructuring-assignment */
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

const ReadMore = Styled.div`
display: flex;
font-size: 16px;
font-weight: 600;
line-height: 24px;
text-decoration: underline;
justify-content: flex-start;
cursor: pointer;
`;

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: props.review.text.length > 180,
    };
    this.handleRead = this.handleRead.bind(this);
  }

  handleRead() {
    this.setState({
      readMore: false,
    });
  }

  render() {
    return (
      <ReviewStyle>
        <Top>
          <ImageContainer src={`${this.props.review.photo}`} alt="" />
          <ReviewName>
            {this.props.review.name}
            <Date>
              {`${this.props.review.date} 2020`}
            </Date>
          </ReviewName>
        </Top>
        <ReviewText>
          <span>
            {this.state.readMore
              ? this.props.review.text.substring(0, 180) + '...'
              : this.props.review.text}
          </span>
          {this.state.readMore ? (
            <ReadMore
              onClick={() => {
                this.handleRead();
              }}
            >
              Read more
            </ReadMore>
          ) : null}
        </ReviewText>

      </ReviewStyle>
    );
  }
}

export default Review;
