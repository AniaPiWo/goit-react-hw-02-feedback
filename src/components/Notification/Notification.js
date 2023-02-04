import React from 'react';
import css from './Notification.module.css';

export function Notification({ message }) {
  return <span className={css.notification}>{message}</span>;
}

export default Notification;
