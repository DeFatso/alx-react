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

  it('should handle LOGIN_SUCCESS action', () => {
    const currentState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });

    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({ email: 'test@example.com' })
    });

    const action = {
      type: LOGIN_SUCCESS,
      user: { email: 'test@example.com' }
    };

    expect(uiReducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle LOGOUT action', () => {
    const currentState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: Map({ email: 'test@example.com' })
    });

    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map({})
    });

    expect(uiReducer(currentState, { type: LOGOUT })).toEqual(expectedState);
  });
});