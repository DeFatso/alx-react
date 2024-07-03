import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const initialState = fromJS({
    notifications: {
      filter: 'DEFAULT',
      notificationsById: {
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      }
    }
  });

  it('filterTypeSelected selector should return the filter type', () => {
    const result = filterTypeSelected(initialState);
    expect(result).toEqual('DEFAULT');
  });

  it('getNotifications selector should return a Map of notifications by id', () => {
    const expectedNotifications = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    });
    const result = getNotifications(initialState);
    expect(result).toEqual(expectedNotifications);
  });

  it('getUnreadNotifications selector should return a Map of unread notifications by id', () => {
    const expectedUnreadNotifications = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
    });
    const result = getUnreadNotifications(initialState);
    expect(result).toEqual(expectedUnreadNotifications);
  });
});