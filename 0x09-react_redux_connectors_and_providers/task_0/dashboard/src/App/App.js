// src/App/App.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { AppContext, defaultUser } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActions';
import { loginRequest, logout } from '../actions/authActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, html: { __html: getLatestNotification() }, type: "urgent" }
      ]
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownHandler);
  }

  keyDownHandler = (e) => {
    if (e.keyCode === 72 && e.ctrlKey) {
      alert('Logging you out');
      this.props.logout();
    }
  }

  markNotificationAsRead = (id) => {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  }

  render() {
    const { user, listNotifications } = this.state;
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, loginRequest } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: '60' },
      { id: 2, name: 'Webpack', credit: '20' },
      { id: 3, name: 'React', credit: '40' }
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.props.logout }}>
        <div className={css(bodyStyles.App)}>
          <Notifications 
            listNotifications={listNotifications} 
            displayDrawer={displayDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          <div className="App-body">
            {isLoggedIn
              ? 
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
              : 
              <BodySectionWithMarginBottom title="Login in to continue">
                <Login logIn={loginRequest} />
              </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School"><p>Boring random text</p></BodySection>
          </div>
          <div className={css(footerStyles.Footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

const primaryColor = '#E11D3F';

const bodyStyles = StyleSheet.create({
  App: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  }
});

const footerStyles = StyleSheet.create({
  Footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: `3px solid ${primaryColor}`,
    padding: '1rem',
    fontStyle: 'italic',
  }
});

const mapStateToProps = state => ({
  isLoggedIn: state.ui.get('isLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible')
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logout,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  loginRequest: PropTypes.func,
  logout: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  loginRequest: () => {},
  logout: () => {},
};

export { mapStateToProps, mapDispatchToProps };
export default connect(mapStateToProps, mapDispatchToProps)(App);