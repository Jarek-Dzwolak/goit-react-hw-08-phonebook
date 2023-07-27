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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        name="number"
        placeholder="Phone number"
        value={number}
        onChange={event => setNumber(event.target.value)}
      />
      <button className={styles.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
