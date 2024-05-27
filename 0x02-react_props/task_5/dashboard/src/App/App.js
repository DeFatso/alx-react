import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

function App() {
  const listNotifications = [
    { id: 1, html: { __html: 'New course available' }, type: 'default', value: 'New course available' },
    { id: 2, html: { __html: 'New resume available' }, type: 'urgent', value: 'New resume available' },
  ];

  return (
    <>
      <Header />
      <Notifications listNotifications={listNotifications} />
      <Footer />
    </>
  );
}

export default App;
