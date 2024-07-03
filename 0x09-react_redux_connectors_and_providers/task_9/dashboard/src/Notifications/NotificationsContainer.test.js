import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';
import { fetchNotifications } from '../actions/notificationActionCreators';

jest.mock('../actions/notificationActionCreators');

describe('NotificationsContainer Component', () => {
  it('fetches notifications on mount', () => {
    const fetchNotificationsMock = jest.fn();
    shallow(<NotificationsContainer fetchNotifications={fetchNotificationsMock} />);
    expect(fetchNotificationsMock).toHaveBeenCalled();
  });
});