/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

// eslint-disable-next-line import/extensions
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';
import Header from './Header.jsx';
import avg from '../helpers/avg';
import Button from './Button.jsx';
import Modal from './Modal.jsx';

const Container = Styled.div`
  max-width: 1220px;
  height: 100% !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100% !important;
  background-color: #fff;
 `;

const Content = Styled.div`
  padding-top: 25px;
  width: 100%;
  margin-left: 0px !important;
  margin-right: 0px;
  color: #222222 !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-weight: 400 !important;
  font-size: 16px !important;
  line-height: 20px !important;

  @media screen and (min-width: 1128px) {
    padding-left: 80px !important;
    padding-right: 80px !important;
  }
  @media screen and (min-width: 950px) {
    padding-left: 40px !important;
    padding-right: 40px !important;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      rating: {
        communication: '',
        location: '',
        clean: '',
        accuracy: '',
        value: '',
        check: '',
        total: '',
      },
      clicked: false,
      isModalClicked: false,
    };

    this.getReviewsById = this.getReviewsById.bind(this);
    this.getRating = this.getRating.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOverlay = this.handleOverlayClick.bind(this);
  }

  componentDidMount() {
    const locId = Math.floor(Math.random() * 100);
    this.getReviewsById(locId);
  }

  getReviewsById(id) {
    axios.get(`/listings/reviews/${id}`)
      .then((res) => {
        const reviews = res.data;
        this.setState({
          reviews,
        });
        this.getRating();
      })
      .catch(console.log);
  }

  getRating() {
    const { reviews } = this.state;
    const findAvg = (item) => {
      const numbers2 = reviews.map((review) => review[item]);
      console.log('numbers', numbers2);
      const avgs2 = avg(numbers2);
      const ratings = avgs2.toFixed(1);
      console.log('rating', ratings);
      return ratings;
    };

    const communication = findAvg('communication');
    const location = findAvg('location');
    const clean = findAvg('cleanliness');
    const accuracy = findAvg('accuracy');
    const value = findAvg('value');
    const check = findAvg('check_in');
    const totalNum = (Number(communication) + Number(location) + Number(clean)
     + Number(accuracy) + Number(value) + Number(check)) / 6;
    const total = totalNum.toFixed(2);
    this.setState({
      rating: {
        communication,
        location,
        clean,
        accuracy,
        value,
        check,
        total,
      },
    });
  }

  handleClick(e) {
    e.preventDefault();
    const { clicked } = this.state;
    console.log('state', clicked);
    this.setState({
      clicked: !clicked,
      isModalClicked: true,
    });
  }

  handleOverlayClick() {
    const { clicked } = this.state;
    console.log('is clicked');
    this.setState({
      clicked: !clicked,
    });
  }

  render() {
    const fake = {
      total: 0, communication: 0, location: 0, accuracy: 0, value: 0, check: 0, clean: 0,
    };
    const {
      reviews, rating, clicked, isModalClicked,
    } = this.state;
    return (

      <Container>
        <Content>
          <Header
            reviews={reviews}
            rating={rating || fake}
            isClicked={clicked}
          />
          <Ratings rating={rating} />
          <ReviewList reviews={reviews} />
          <Modal
            isOpen={clicked}
            handleClick={this.handleClick}
            rating={rating}
            reviews={reviews}
            isModalClicked={isModalClicked}
            handleOverlay={this.handleOverlay}
          />
          <Button
            reviews={reviews}
            handleClick={this.handleClick}
          />
        </Content>
      </Container>

    );
  }
}

export default App;
