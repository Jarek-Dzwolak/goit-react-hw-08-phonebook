import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
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
          Log in
        </button>
      </form>
    </div>
  );
};
