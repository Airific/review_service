import React, { Component } from 'react';
import axios from 'axios';

import ReviewList from './ReviewList.jsx';

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
      <div>
        <p>{reviews.length}</p>
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default App;
