import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelectors';

const NotificationsContainer = ({ fetchNotifications, ...props }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications {...props} />;
};

const mapStateToProps = (state) => ({
  messages: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);