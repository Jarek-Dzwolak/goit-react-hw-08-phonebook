import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink className={css.link} to="/register">
        Register
      </NavLink>

      <NavLink clas sName={css.link} to="/login">
        Log in
      </NavLink>
    </div>
  );
};
