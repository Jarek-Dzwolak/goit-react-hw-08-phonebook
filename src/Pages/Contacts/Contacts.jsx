import { ContactForm } from '../../components/phonebook/ContactForm/ContactForm';
import { ContactList } from '../../components/phonebook/ContactList/ContactList';
import { Filter } from '../../components/phonebook/Filter/Filter';



const contacts = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default contacts;
