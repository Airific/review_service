import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';

import App from '../components/App';

describe('App', () => {
  test('should render', () => {
    const wrapper = shallow(
      <App />
    );

    expect(wrapper.exists()).toBeTruthy();
  });
});

describe('Sample test', () => {
  test('should be equal to 1', () => {
    expect(1).toBe(1)
  })
})

// it('fetches async data', () => {
//   const promise = new Promise((resolve, reject) =>
//     setTimeout(
//       () =>
//         resolve({
//           data: {
//             hits: [
//               { objectID: '1', title: 'a' },
//               { objectID: '2', title: 'b' },
//             ],
//           },
//         }),
//       100,
//     ));
//   axios.get = jest.fn(() => promise);
//   const wrapper = mount(<App />);

//   expect(wrapper.find('li').length).toEqual(0);

//   promise.then(() => {
//     setImmediate(() => {
//       wrapper.update();
//       expect(wrapper.find('li').length).toEqual(2);

//       axios.get.mockClear();
//       // done();
//     });
//   });
// });
