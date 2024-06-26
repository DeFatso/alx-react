import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { name: 'Test User' }
    };

    expect(uiReducer(currentState, { type: 'SELECT_COURSE' })).toEqual(currentState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const currentState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };

    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    };

    expect(uiReducer(currentState, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual(expectedState);
  });
});
