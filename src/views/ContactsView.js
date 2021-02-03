import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import Container from '../components/Container';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import { getLoading } from '../redux/contacts/contacts-selectors';
// import './App.css';

export default function ContactsView() {
  const loadingContacts = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1 className="phonebook">Phonebook</h1>
      <ContactForm />

      {loadingContacts && <p>Loading...</p>}
      <h2 className="contacts">Contacts</h2>
      <Filter />

      <ContactList />
    </Container>
  );
}
