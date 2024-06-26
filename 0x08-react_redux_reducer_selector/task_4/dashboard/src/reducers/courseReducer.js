// reducers/courseReducer.js

import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  coursesById: {},
  selectedCourseIds: []
});

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeIn(['coursesById'], normalizedData.entities.courses);
    case SELECT_COURSE:
      return state.update('selectedCourseIds', selectedCourseIds =>
        selectedCourseIds.includes(action.index) ? selectedCourseIds : selectedCourseIds.push(action.index)
      );
    case UNSELECT_COURSE:
      return state.update('selectedCourseIds', selectedCourseIds =>
        selectedCourseIds.filter(id => id !== action.index)
      );
    default:
      return state;
  }
}