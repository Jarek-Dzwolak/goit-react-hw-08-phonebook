import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../../redux/slices/operations';
import ContactItem from '../ContactItem/ContactItem';
import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const filterValue = useSelector(state => state.contacts.filter); // Pobieramy wartość filtru z redux store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Filtrowanie kontaktów na podstawie filterValue
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
