import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
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
    let itemStyle = styles.default;
    if (type === 'urgent') {
      itemStyle = styles.urgent;
    }

    if (type && value && typeof type === 'string' && typeof value === 'string' && !html) {
      return <li className={css(itemStyle)} data-notification-type={type} onClick={this.handleClick}>{value}</li>;
    }
    if (!type && html && html.__html) {
      return <li className={css(itemStyle)} data-notification-type="default" onClick={this.handleClick} dangerouslySetInnerHTML={html}></li>;
    }
    if (type && html && html.__html) {
      return <li className={css(itemStyle)} data-notification-type={type} onClick={this.handleClick} dangerouslySetInnerHTML={html}></li>;
    }
    return <li className={css(itemStyle)} data-notification-type="default" onClick={this.handleClick}>NotificationItem: invalid props</li>;
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

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

export default NotificationItem;