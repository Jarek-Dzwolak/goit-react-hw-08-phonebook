import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link to="/register" className={styles.link}>
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/contacts" className={styles.link}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
