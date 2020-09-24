import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
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
        this.setState({
          reviews: res.data,
        });
      })
      .catch(console.log);
  }

  render() {
    // something
    return (
      <div>
        <h1>Hello React is working!</h1>
        <p>{this.state.reviews.length}</p>
      </div>
    );
  }
}

export default App;
