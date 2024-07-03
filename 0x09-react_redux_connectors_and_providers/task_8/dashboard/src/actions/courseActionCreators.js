import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "./courseActionTypes.js";

export function selectCourse(index) {
  return { type: SELECT_COURSE, index: index };
}

export function unSelectCourse(index) {
  return { type: UNSELECT_COURSE, index: index };
}

export function fetchCourseSuccess(data) {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: data
  };
}

export function fetchCourses() {
  return (dispatch) => {
    return fetch('/courses.json')
      .then(response => response.json())
      .then(data => dispatch(fetchCourseSuccess(data)))
      .catch(error => console.error('Error fetching courses:', error));
  };
}

export const dispatchselectCourse = (index) => dispatch(selectCourse(index));
export const dispatchUnSelectCourse = (index) => dispatch(unSelectCourse(index));