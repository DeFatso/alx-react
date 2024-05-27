import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const Notifications = ({ listNotifications }) => {
  return (
    <div className="Notifications">
      <p>{listNotifications.length === 0 ? 'No new notification for now' : 'Here is the list of notifications'}</p>
      {listNotifications.length > 0 && (
        <ul>
          {listNotifications.map(notification => (
            <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
          ))}
        </ul>
      )}
      <button
        type="button"
        aria-label="Close"
        onClick={() => console.log('Close button has been clicked')}
        style={{
          display: 'inline-block',
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 0,
          border: 0,
          outline: 'none',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        <img
          src={close_icon}
          alt=""
          style={{ width: '8px', height: '8px' }}
        />
      </button>
    </div>
  );
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
