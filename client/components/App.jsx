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
  background-color: #fff;
  max-width: 1200px;
  margin-left: 90px;
  padding-top: 48px;
  padding-bottom: 48px;
  position: relative;
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
    };
    this.getReviewsById = this.getReviewsById.bind(this);
    this.getRating = this.getRating.bind(this);
    this.handleClick = this.handleClick.bind(this);

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
    });
  }

  render() {
    const fake = {
      total: 0, communication: 0, location: 0, accuracy: 0, value: 0, check: 0, clean: 0,
    };
    const { reviews, rating, clicked } = this.state;
    return (
      <Container>
        <Header reviews={reviews} rating={rating || fake} />
        <Ratings rating={rating} />
        <ReviewList reviews={reviews} />
        <Modal isOpen={clicked} handleClick={this.handleClick} />
        <Button reviews={reviews} handleClick={this.handleClick} />

      </Container>
    );
  }
}

export default App;
