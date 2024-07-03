import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { App } from './App'; // Import the unconnected component

describe('<App />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that CourseList is rendered when user is logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={false} />);
    expect(wrapper.find('CourseList').length).toBe(1);
  });

  it('Tests that Login is rendered when user is not logged in', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
    expect(wrapper.find('Login').length).toBe(1);
  });
});