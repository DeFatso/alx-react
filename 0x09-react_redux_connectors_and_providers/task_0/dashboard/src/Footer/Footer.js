// src/Footer/Footer.js
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer({ user }) {
  return (
    <footer className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
    </footer>
  );
}

const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
});

Footer.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
    email: PropTypes.string,
    password: PropTypes.string,
  }),
};

Footer.defaultProps = {
  user: {
    isLoggedIn: false,
    email: '',
    password: '',
  },
};

export default connect(mapStateToProps)(Footer);