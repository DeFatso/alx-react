import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  describe('When isHeader is true', () => {
    it('should render one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" />);
      expect(wrapper.find('th')).toHaveLength(1);
      expect(wrapper.find('th').prop('colSpan')).toEqual('2');
    });

    it('should render two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First Cell" textSecondCell="Second Cell" />);
      expect(wrapper.find('th')).toHaveLength(2);
    });
  });

  describe('When isHeader is false', () => {
    it('should render correctly two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First Cell" textSecondCell="Second Cell" />);
      expect(wrapper.find('tr')).toHaveLength(1);
      expect(wrapper.find('td')).toHaveLength(2);
    });
  });
});