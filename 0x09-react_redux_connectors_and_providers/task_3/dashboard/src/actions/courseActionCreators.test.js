// src/actions/courseActionCreators.test.js

import { selectCourse, unSelectCourse, boundSelectCourse, boundUnSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
  it('selectCourse should create an action to select a course', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index
    };
    expect(selectCourse(index)).toEqual(expectedAction);
  });

  it('unSelectCourse should create an action to unselect a course', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index
    };
    expect(unSelectCourse(index)).toEqual(expectedAction);
  });

  it('boundSelectCourse should dispatch selectCourse action', () => {
    const dispatch = jest.fn();
    const boundAction = boundSelectCourse(dispatch);
    const index = 1;
    boundAction(index);
    expect(dispatch).toHaveBeenCalledWith(selectCourse(index));
  });

  it('boundUnSelectCourse should dispatch unSelectCourse action', () => {
    const dispatch = jest.fn();
    const boundAction = boundUnSelectCourse(dispatch);
    const index = 1;
    boundAction(index);
    expect(dispatch).toHaveBeenCalledWith(unSelectCourse(index));
  });
});