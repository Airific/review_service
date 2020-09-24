import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.getReviewsById = this.getReviewsById.bind(this);
    this.randomId = this.randomId.bind(this);
  }

  componentDidMount() {
    const locId = this.randomId();
    this.getReviewsById(locId);
  }

  getReviewsById(id) {
    axios.get(`/listings/reviews/${id}`)
      .then((res) => {
        this.setState({
          reviews: res.data
        });
      })
      .catch(console.log);
  }

  randomId() {
    const id = Math.floor(Math.random() * 100);
    console.log(id, "2");
    return id;
  }

  render() {
    // something
    return (
    <div>Hello React is working!{this.state.reviews.length}</div>
    );
  }
}

export default App;
