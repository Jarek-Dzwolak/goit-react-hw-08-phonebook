import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../../redux/slices/operations';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // Sprawdzamy, czy pola nie są puste
    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    // Wywołujemy akcję `addContact`
    dispatch(addContact({ name, number }));

    // Resetujemy formularz po dodaniu kontaktu
    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            pattern="^[a-zA-Z]+(\s[a-zA-Z]+)?$"
            required
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label>Name</label>
        </div>

        <div className={styles.group}>
          <input
            className={styles.input}
            type="text"
            name="number"
            value={number}
            onChange={event => setNumber(event.target.value)}
            pattern="^\d{3}-\d{3}-\d{3}$"
            required
          />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label>Phone Number</label>
        </div>

        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
