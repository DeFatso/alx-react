import notificationsReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationsReducer', () => {
  it('should return the initial state', () => {
    expect(notificationsReducer(undefined, {})).toEqual({
      notifications: [],
      filter: 'DEFAULT'
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const notificationsData = [
      {
        id: 1,
        type: 'default',
        value: 'New course available'
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available'
      },
      {
        id: 3,
        type: 'urgent',
        value: 'New data available'
      }
    ];

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notificationsData
    };

    expect(notificationsReducer(undefined, action)).toEqual({
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ],
      filter: 'DEFAULT'
    });
  });

  it('should handle MARK_AS_READ', () => {
    const currentState = {
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ],
      filter: 'DEFAULT'
    };

    const action = {
      type: MARK_AS_READ,
      index: 2
    };

    expect(notificationsReducer(currentState, action)).toEqual({
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ],
      filter: 'DEFAULT'
    });
  });

  it('should handle SET_TYPE_FILTER', () => {
    const currentState = {
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ],
      filter: 'DEFAULT'
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT'
    };

    expect(notificationsReducer(currentState, action)).toEqual({
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available'
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }
      ],
      filter: 'URGENT'
    });
  });
});