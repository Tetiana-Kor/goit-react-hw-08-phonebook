import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';
import { fetchContacts } from './redux/operations';
import { getLoading } from './redux/selectors';
import './App.css';

export default function App() {
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
