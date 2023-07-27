import React from 'react';
import { ContactForm } from '../../components/phonebook/ContactForm/ContactForm';
import { ContactList } from '../../components/phonebook/ContactList/ContactList';
import { Filter } from '../../components/phonebook/Filter/Filter';
import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={css.container}>
      <div className={css.contactsSection}>
        <div className={css.formSection}>
          <ContactForm />
        </div>
        <div className={css.formSection}>
          <Filter />
        </div>
        <div className={css.listSection}>
          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
