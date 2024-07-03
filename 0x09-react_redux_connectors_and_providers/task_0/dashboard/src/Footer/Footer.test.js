import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { Footer } from './Footer'; // Import the unconnected component

describe('<Footer />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('Tests that Footer renders without crashing', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Contains the text "Copyright"', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('Does not display the "Contact us" link when user is logged out', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: false }} />);
    expect(wrapper.find('a').length).toBe(0);
  });

  it('Displays the "Contact us" link when user is logged in', () => {
    const wrapper = shallow(<Footer user={{ isLoggedIn: true }} />);
    expect(wrapper.find('a').length).toBe(1);
    expect(wrapper.find('a').text()).toBe('Contact us');
  });
});