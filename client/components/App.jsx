/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

// eslint-disable-next-line import/extensions
import ReviewList from './ReviewList.jsx';
import Ratings from './Ratings.jsx';

const Container = Styled.div`
  dislay: flex;
  background-color: #fff;
  max-width: 1200px;
  margin-left: 50px;
  padding-top: 48px;
  padding-bottom: 48px;

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getReviewsById = this.getReviewsById.bind(this);
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
      })
      .catch(console.log);
  }

  render() {
    const { reviews } = this.state;
    return (
      <Container>
        <Ratings reviews={reviews} />
        <ReviewList reviews={reviews} />
      </Container>
    );
  }
}

export default App;
