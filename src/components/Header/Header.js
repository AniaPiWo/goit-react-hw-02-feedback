import React from 'react';
import css from './Header.module.css';

export function Header({ message }) {
  return <h1 className={css.header}>{message}</h1>;
}

export default Header;
