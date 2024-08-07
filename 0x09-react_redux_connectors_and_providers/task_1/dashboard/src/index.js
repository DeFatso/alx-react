import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import App from './App/App';
import rootReducer from './reducers';

// Create the Redux store and apply the redux-thunk middleware
const store = createStore(
  rootReducer,
  fromJS({
    ui: {
      isLoggedIn: false,
      isNotificationDrawerVisible: false,
    },
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);