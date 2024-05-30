import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">
        <Notifications listNotifications={listNotifications} />
        <Header />
        <div className="App-body">
          {/* Wrap CourseList with BodySectionWithMarginBottom */}
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
          {/* Wrap Login with BodySectionWithMarginBottom */}
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
          {/* Add new block with BodySection */}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper purus nec eros finibus, non consequat ante tincidunt. Duis efficitur consequat sollicitudin. Proin congue massa id nisl laoreet vestibulum. Nulla facilisi.</p>
          </BodySection>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: '60'
  },
  {
    id: 2,
    name: 'Webpack',
    credit: '20'
  },
  {
    id: 3,
    name: 'React',
    credit: '40'
  }
];

const listNotifications = [
  {
    id: 1,
    type: "default",
    value: "New course available"
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    html: {
      __html: getLatestNotification()
    },
    type: "urgent",
  }
];

export default App;