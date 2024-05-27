import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItemShape from './NotificationItemShape';

describe('Notifications Component', () => {
  it('renders No new notification for now when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toEqual('No new notification for now');
  });

  it('renders correct number of NotificationItem when listNotifications is not empty', () => {
    const listNotifications = [
      { id: 1, html: { __html: 'New course available' }, type: 'default', value: 'New course available' },
      { id: 2, html: { __html: 'New resume available' }, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItemShape)).toHaveLength(listNotifications.length);
  });

  it('does not render Here is the list of notifications when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).not.toEqual('Here is the list of notifications');
  });
});