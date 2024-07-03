// reducers/courseReducer.test.js

import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  it('should return the initial state', () => {
    expect(courseReducer(undefined, {})).toEqual(fromJS({
      coursesById: {},
      selectedCourseIds: []
    }));
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const coursesData = [
      {
        id: 1,
        name: 'ES6',
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20
      }
    ];

    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: coursesData
    };

    const normalizedData = coursesNormalizer(coursesData);
    const expectedState = fromJS({
      coursesById: normalizedData.entities.courses,
      selectedCourseIds: []
    });

    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const currentState = fromJS({
      coursesById: {
        1: { id: 1, name: 'ES6', isSelected: false, credit: 60 },
        2: { id: 2, name: 'Webpack', isSelected: false, credit: 20 }
      },
      selectedCourseIds: []
    });

    const action = {
      type: SELECT_COURSE,
      index: 2
    };

    const expectedState = currentState.setIn(['coursesById', '2', 'isSelected'], true)
                                      .update('selectedCourseIds', selectedCourseIds => selectedCourseIds.push(2));

    expect(courseReducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const currentState = fromJS({
      coursesById: {
        1: { id: 1, name: 'ES6', isSelected: false, credit: 60 },
        2: { id: 2, name: 'Webpack', isSelected: true, credit: 20 }
      },
      selectedCourseIds: [2]
    });

    const action = {
      type: UNSELECT_COURSE,
      index: 2
    };

    const expectedState = currentState.setIn(['coursesById', '2', 'isSelected'], false)
                                      .update('selectedCourseIds', selectedCourseIds => selectedCourseIds.filter(id => id !== 2));

    expect(courseReducer(currentState, action)).toEqual(expectedState);
  });
});