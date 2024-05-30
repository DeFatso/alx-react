import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { id, markAsRead } = this.props;
    if (markAsRead) {
      markAsRead(id);
    }
  }

  render() {
    const { type, value, html } = this.props;
    if (type && value && typeof type === 'string' && typeof value === 'string' && !html) {
      return <li data-notification-type={type} onClick={this.handleClick}>{value}</li>;
    }
    if (!type && html && html.__html) {
      return <li data-notification-type="default" onClick={this.handleClick} dangerouslySetInnerHTML={html}></li>;
    }
    if (type && html && html.__html) {
      return <li data-notification-type={type} onClick={this.handleClick} dangerouslySetInnerHTML={html}></li>;
    }
    return <li data-notification-type="default" onClick={this.handleClick}>NotificationItem: invalid props</li>;
  }
}

NotificationItem.defaultProps = {
  type: 'default',
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

export default NotificationItem;