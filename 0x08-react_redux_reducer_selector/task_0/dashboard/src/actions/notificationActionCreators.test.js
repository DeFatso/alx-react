// src/actions/notificationActionCreators.test.js

import { markAsRead, setNotificationFilter, boundMarkAsRead, boundSetNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notificationActionCreators', () => {
  it('markAsRead should create an action to mark a notification as read', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it('setNotificationFilter should create an action to set the notification filter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });

  it('boundMarkAsRead should dispatch markAsRead action', () => {
    const dispatch = jest.fn();
    const boundAction = boundMarkAsRead(dispatch);
    const index = 1;
    boundAction(index);
    expect(dispatch).toHaveBeenCalledWith(markAsRead(index));
  });

  it('boundSetNotificationFilter should dispatch setNotificationFilter action', () => {
    const dispatch = jest.fn();
    const boundAction = boundSetNotificationFilter(dispatch);
    const filter = NotificationTypeFilters.DEFAULT;
    boundAction(filter);
    expect(dispatch).toHaveBeenCalledWith(setNotificationFilter(filter));
  });
});
