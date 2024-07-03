import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { fetchCourses, selectCourse, unSelectCourse } from '../actions/courseActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

const listCourses = [
  { id: '1', name: 'ES6', credit: 60, isSelected: false },
  { id: '2', name: 'Webpack', credit: 20, isSelected: false },
  { id: '3', name: 'React', credit: 40, isSelected: false }
];

describe('CourseList component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      courses: listCourses
    });
  });

  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('dispatches fetchCourses action when mounted', () => {
    store.dispatch = jest.fn();
    shallow(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalledWith(fetchCourses());
  });

  it('dispatches selectCourse and unSelectCourse actions on row checkbox change', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <CourseList />
      </Provider>
    ).dive().dive();
    
    wrapper.instance().onChangeRow('1', true);
    expect(store.getActions()).toContainEqual(selectCourse('1'));
    
    wrapper.instance().onChangeRow('1', false);
    expect(store.getActions()).toContainEqual(unSelectCourse('1'));
  });
});