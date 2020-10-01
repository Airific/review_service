/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('App', () => {
  test('should render', () => {
    const wrapper = shallow(
      <App />,
    );

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should have state set properly', () => {
    const wrapper = shallow(
      <App />,
    );

    expect(wrapper.state().clicked).toEqual(false);
  });
});

// it("should change state to true onClick <button>", () => {
//   const wrapper = render(
//     <App />
//   );
//   const wrapper2 = mount(
//     <Button reviews={reviews} />
//   );
//   const container = wrapper2.find("button");
//   container.simulate('click');
//   expect(wrapper.state().clicked).toEqual(true);
// });

// it('should call componentDidMount', () => {
//   const spy = jest.spyOn(App.prototype, 'componentDidMount');
//   const wrapper = shallow(<App />);
//   expect(spy).toHaveBeenCalled();
// });

// const reviews = [
//   {
//     name: 'test',
//     date: 'May',
//     photo: 'https://airific-review-images.s3.us-east-2.amazonaws.com/image20.jpg',
//     text: 'Hello!',
//   },
// ];

// describe("render <button>", () => {
//   const wrapper = shallow(
//     <Button reviews={reviews} />
//   );
//   let container, containerProp;

//   beforeEach(() => {
//     container = wrapper.find("button");
//     containerProp = container.props();
//   });

//   it("should have a <button>", () => {
//     expect(container).toHaveLength(1);
//   });

//   it("should have a <button> with the proper text", () => {
//     let num = wrapper.state().rewiews.length;
//     expect(container.text()).toEqual(`show all ${num} reviews`);
//   });

//   it("should have a <button> without disabled prop", () => {
//     expect(containerProp.disabled).toEqual(undefined);
//   });

//   it("should change state to true onClick <button>", () => {
//     container.simulate('click');
//     expect(wrapper.state().clicked).toEqual(true);
//   });
// });
