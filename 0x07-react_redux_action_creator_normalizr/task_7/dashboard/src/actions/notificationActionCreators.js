// src/actions/notificationActionCreators.js

import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});

// Bound action creators
export const boundMarkAsRead = (dispatch) => (index) => dispatch(markAsRead(index));
export const boundSetNotificationFilter = (dispatch) => (filter) => dispatch(setNotificationFilter(filter));