import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.group}>
          <input type="text" name="name" required />
          <span className={css.highlight}></span>
          <span className={css.bar}></span>
          <label>Name</label>
        </div>

        <div className={css.group}>
          <input type="email" name="email" required />
          <span className={css.highlight}></span>
          <span className={css.bar}></span>
          <label>Email</label>
        </div>

        <div className={css.group}>
          <input type="password" name="password" required />
          <span className={css.highlight}></span>
          <span className={css.bar}></span>
          <label>Password</label>
        </div>

        <button type="submit" className={css.button}>
          Register
        </button>
      </form>
    </div>
  );
};
