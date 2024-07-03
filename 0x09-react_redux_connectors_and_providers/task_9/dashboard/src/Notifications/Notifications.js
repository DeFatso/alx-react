import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import closebtn from '../assets/close-btn.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const bounceKeyFrames = {
  "0%": {
    transform: "translateY(-4px)",
  },
  "100%": {
    transform: "translateY(2px)"
  }
};

const opacityKeyFrames = {
  "0%": {
    opacity: "0.5",
  },
  "100%": {
    opacity: "1"
  }
};

const styles = StyleSheet.create({
  Notifications: {
    background: "white",
    border: "2px dashed red",
    padding: 5,
    width: "60%",
    position: "absolute",
    right: 0,
    top: "5%",
    marginRight: 10,
    '@media (max-width: 900px)': {
      border: "none",
      top: 0,
      height: "200%",
      padding: 0,
      fontSize: 20,
      width: "97%",
      background: "white",
      zIndex: "9999"
    }
  },

  p: {
    marginTop: 0,
    width: "100%"
  },

  ul: {
    margin: 1,
    '@media (max-width: 900px)': {
      padding: 0,
    }
  },

  menuList: {
    margin: 1
  },

  menuItem: {
    position: "fixed",
    right: 0,
    paddingRight: 10,
    marginBottom: 6,
    ":hover": {
      animationName: [bounceKeyFrames, opacityKeyFrames],
      animationDuration: "0.5s, 1s",
      animationIterationCount: 3,
      cursor: "pointer"
    }
  },

  hideMenuItem: {
    display: "none"
  }
});

const Notifications = ({ messages, displayDrawer, hideDrawer, showDrawer, setNotificationFilter, markAsRead }) => {
  const loadNotifs = () => {
    if (messages.length === 0) {
      return <p>No new notification for now</p>;
    }

    return (
      <>
        <p className={css(styles.p)}>Here is the list of notifications:</p>
        <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
        <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
        <ul className={css(styles.ul)}>
          {messages.map((notif) => (
            <NotificationItem
              key={notif.guid}
              id={notif.guid}
              type={notif.type}
              value={notif.value}
              markNotificationAsRead={markAsRead}
            />
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div onClick={showDrawer} className={css(displayDrawer ? styles.hideMenuItem : styles.menuItem)}>Your notifications</div>
      {displayDrawer && (
        <div className={css(styles.Notifications)}>
          <button style={{ float: 'right', background: 'none', border: 'none' }}
            id="close-btn"
            aria-label="Close"
            onClick={hideDrawer}>
            <img src={closebtn} alt="close-btn" />
          </button>
          {loadNotifs()}
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
  fetchNotifications: PropTypes.func,
  markAsRead: PropTypes.func,
  displayDrawer: PropTypes.bool,
  hideDrawer: PropTypes.func,
  showDrawer: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

Notifications.defaultProps = {
  messages: [],
  fetchNotifications: () => { },
  markAsRead: () => { },
  displayDrawer: false,
  hideDrawer: () => { },
  showDrawer: () => { },
  setNotificationFilter: () => { },
};

export default Notifications;