/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line import/extensions
// webpack gave error without the use of .jsx
import App from './components/App.jsx';

ReactDOM.render(<App />, document.getElementById('reviews'));
