import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  it('should render a table element with id CourseList', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('table#CourseList')).toHaveLength(1);
  });

  it('should contain a thead element with two CourseListRow components for header rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('thead')).toHaveLength(1);
    expect(wrapper.find('thead').find(CourseListRow)).toHaveLength(2);
  });

  it('should contain a tbody element with three CourseListRow components for course rows', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('tbody')).toHaveLength(1);
    expect(wrapper.find('tbody').find(CourseListRow)).toHaveLength(3);
  });
});