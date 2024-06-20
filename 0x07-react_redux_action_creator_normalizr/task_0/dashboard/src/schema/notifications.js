// notifications.js

import * as notificationsData from './notifications.json';

/**
 * Get all notifications for a specific user.
 * @param {string} userId - The user ID to filter notifications by.
 * @return {Array} - A list of notification context objects for the specified user.
 */
export function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter(notification => notification.author.id === userId).map(notification => notification.context);
}