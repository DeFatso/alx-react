import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import { Header } from './Header'; // Import the unconnected component

describe('<Header />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('Tests that Header renders without crashing', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests that the component renders <img> and <h1> tags', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.exists('img')).toBe(true);
    expect(wrapper.exists('h1')).toBe(true);
  });

  it('Tests that the logoutSection is not created when user is logged out', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: false }} />);
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('Tests that the logoutSection is created when user is logged in', () => {
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: 'test@example.com' }} />);
    expect(wrapper.find('#logoutSection').length).toBe(1);
    expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
  });

  it('Tests that clicking on logout link calls logout function', () => {
    const logout = jest.fn();
    const wrapper = shallow(<Header user={{ isLoggedIn: true, email: 'test@example.com' }} logout={logout} />);
    wrapper.find('#logoutSection a').simulate('click', { preventDefault() {} });
    expect(logout).toHaveBeenCalled();
  });
});