export const filterTypeSelected = state => state.getIn(['notifications', 'filter']);

export const getNotifications = state => state.getIn(['notifications', 'notificationsById']);

export const getUnreadNotifications = state => {
  const notifications = state.getIn(['notifications', 'notificationsById']);
  return notifications.filter(notification => !notification.get('isRead'));
};