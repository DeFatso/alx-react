// src/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { uiReducer } from './reducers/uiReducer';
import { notificationReducer } from './reducers/notificationReducer';
import { courseReducer } from './reducers/courseReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  notifications: notificationReducer,
  courses: courseReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;