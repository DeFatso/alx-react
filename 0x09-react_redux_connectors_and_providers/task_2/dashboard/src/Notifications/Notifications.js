// src/Notifications/Notifications.js
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
  render() {
    const { listNotifications, displayDrawer, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

    return (
      <>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button className={css(styles.closeButton)} onClick={handleHideDrawer}>X</button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && <li>No new notification for now</li>}
              {listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  {...notification}
                  markAsRead={() => markNotificationAsRead(notification.id)}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
      __html: PropTypes.string,
    })
  })).isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {}
};

const styles = StyleSheet.create({
  menuItem: {
    cursor: 'pointer',
  },
  notifications: {
    border: '1px solid black',
    padding: '1rem',
    position: 'absolute',
    right: '1rem',
    top: '2rem',
    backgroundColor: 'white',
    zIndex: 100,
  },
  closeButton: {
    float: 'right',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  }
});

export default Notifications;