import { selectCourse, unSelectCourse, fetchCourseSuccess, fetchCourses } from './courseActionCreators';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Course Action Creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  test('selectCourse func returns the right object', () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: "SELECT_COURSE", index: 1 });
  });

  test('unselectCourse func returns the right object', () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: "UNSELECT_COURSE", index: 1 });
  });

  test('fetchCourses dispatches FETCH_COURSE_SUCCESS action', () => {
    const courses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 }
    ];

    fetchMock.getOnce('/courses.json', {
      body: courses,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: FETCH_COURSE_SUCCESS, data: courses }
    ];

    const store = mockStore({});

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});