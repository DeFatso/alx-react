// notifications.js

import { normalize, schema } from 'normalizr';
import * as notificationsData from './notifications.json';

// Define a user entity
const user = new schema.Entity('users');

// Define a message entity
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define a notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize the notifications data
const normalizedData = normalize(notificationsData.default, [notification]);

/**
 * Get all notifications for a specific user.
 * @param {string} userId - The user ID to filter notifications by.
 * @return {Array} - A list of notification context objects for the specified user.
 */
export function getAllNotificationsByUser(userId) {
  return normalizedData.result
    .filter(id => normalizedData.entities.notifications[id].author === userId)
    .map(id => normalizedData.entities.notifications[id].context);
}

export { normalizedData };