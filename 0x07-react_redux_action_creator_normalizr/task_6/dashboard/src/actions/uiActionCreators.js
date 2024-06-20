// src/actions/uiActionCreators.js

import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
});

export const logout = () => ({
  type: LOGOUT
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER
});

// Bound action creators
export const boundLogin = (dispatch) => (email, password) => dispatch(login(email, password));
export const boundLogout = (dispatch) => () => dispatch(logout());
export const boundDisplayNotificationDrawer = (dispatch) => () => dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = (dispatch) => () => dispatch(hideNotificationDrawer());
