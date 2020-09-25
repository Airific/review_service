const mongoose = require('mongoose');
const faker = require('faker');
const { images } = require('./images.js');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error'));

db.once('open', () => {
  console.log('Successfully connected to MongoDB!');
});

db.dropCollection('reviews', (err) => {
  if (err) {
    console.log('error dropping collection ', err);
  } else {
    console.log('collection dropped');
  }
});

const reviewSchema = new mongoose.Schema({
  loc_id: Number,
  name: String,
  photo: String,
  date: String,
  text: String,
  cleanliness: Number,
  communication: Number,
  check_in: Number,
  accuracy: Number,
  location: Number,
  value: Number,
});

const Review = mongoose.model('Review', reviewSchema);

const reviews = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 1500; i++) {
  const fakeReview = new Review({
    loc_id: faker.random.number({ min: 1, max: 100 }),
    name: faker.name.firstName(),
    photo: faker.random.arrayElement(images),
    date: faker.date.month(),
    text: faker.lorem.sentences(faker.random.number({ min: 2, max: 4 })),
    cleanliness: faker.random.number({ min: 1, max: 5 }),
    communication: faker.random.number({ min: 1, max: 5 }),
    check_in: faker.random.number({ min: 1, max: 5 }),
    accuracy: faker.random.number({ min: 1, max: 5 }),
    location: faker.random.number({ min: 1, max: 5 }),
    value: faker.random.number({ min: 1, max: 5 }),

  });
  reviews.push(fakeReview);
}

Review.insertMany(reviews)
  .then(() => {
    console.log('Data inserted');
  })
  .catch((err) => {
    console.log('error inserting data: ', err);
  });

const getReviewsById = (id, callback) => {
  Review.find({ loc_id: id }, callback);
};

module.exports = {
  getReviewsById,
};
