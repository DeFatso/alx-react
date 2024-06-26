// reducers/uiReducer.test.js

import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    }));
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const currentState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({ name: 'Test User' })
    });

    expect(uiReducer(currentState, { type: 'SELECT_COURSE' })).toEqual(currentState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const currentState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });

    const expectedState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: Map({})
    });

    expect(uiReducer(currentState, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual(expectedState);
  });
});