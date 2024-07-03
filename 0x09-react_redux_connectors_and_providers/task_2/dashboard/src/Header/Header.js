// src/Header/Header.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/logo.jpg';
import { logout } from '../actions/authActions';

class Header extends Component {
  handleLogOut = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { user } = this.props;

    return (
      <header className={css(headerStyles.root, headerStyles.appHeader)}>
        <img src={logo} className={css(headerStyles.appLogo)} alt="logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(headerStyles.logoutSection)}>
            <p>Welcome {user.email} (<a href="#" onClick={this.handleLogOut}>logout</a>)</p>
          </div>
        )}
      </header>
    );
  }
}

const primaryColor = '#E11D3F';

const headerStyles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: `${primaryColor}`,
    borderBottom: `1px solid ${primaryColor}`,
  },

  appLogo: {
    height: '200px',
    width: '200px',
  },

  logoutSection: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
});

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

const mapDispatchToProps = {
  logout,
};

Header.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  logout: PropTypes.func,
};

Header.defaultProps = {
  user: {
    isLoggedIn: false,
    email: '',
    password: '',
  },
  logout: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);