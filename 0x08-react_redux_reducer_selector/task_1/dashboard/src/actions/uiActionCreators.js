// src/actions/uiActionCreators.test.js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { loginRequest, login, loginSuccess, loginFailure } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN and LOGIN_SUCCESS when fetching login has been done', () => {
    fetchMock.getOnce('/dist/login-success.json', {
      body: { user: 'test' },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_SUCCESS }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN and LOGIN_FAILURE when fetching login fails', () => {
    fetchMock.getOnce('/dist/login-success.json', {
      throws: new Error('Network response was not ok')
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_FAILURE }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});