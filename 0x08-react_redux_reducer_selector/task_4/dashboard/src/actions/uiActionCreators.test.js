// src/actions/uiActionCreators.test.js

import { login, logout, displayNotificationDrawer, hideNotificationDrawer, boundLogin, boundLogout, boundDisplayNotificationDrawer, boundHideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('uiActionCreators', () => {
  it('login should create an action to log in a user', () => {
    const email = 'user@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout should create an action to log out a user', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer should create an action to display the notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer should create an action to hide the notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });

  it('boundLogin should dispatch login action', () => {
    const dispatch = jest.fn();
    const boundAction = boundLogin(dispatch);
    const email = 'user@example.com';
    const password = 'password123';
    boundAction(email, password);
    expect(dispatch).toHaveBeenCalledWith(login(email, password));
  });

  it('boundLogout should dispatch logout action', () => {
    const dispatch = jest.fn();
    const boundAction = boundLogout(dispatch);
    boundAction();
    expect(dispatch).toHaveBeenCalledWith(logout());
  });

  it('boundDisplayNotificationDrawer should dispatch displayNotificationDrawer action', () => {
    const dispatch = jest.fn();
    const boundAction = boundDisplayNotificationDrawer(dispatch);
    boundAction();
    expect(dispatch).toHaveBeenCalledWith(displayNotificationDrawer());
  });

  it('boundHideNotificationDrawer should dispatch hideNotificationDrawer action', () => {
    const dispatch = jest.fn();
    const boundAction = boundHideNotificationDrawer(dispatch);
    boundAction();
    expect(dispatch).toHaveBeenCalledWith(hideNotificationDrawer());
  });
});
