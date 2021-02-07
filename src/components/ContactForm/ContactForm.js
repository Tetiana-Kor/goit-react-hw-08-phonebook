import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = (name, number) =>
    dispatch(operations.addContact(name, number));

  const newContact = () => {
    const includeName = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const includeNumber = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (name === '' || number === '') {
      alert('Please enter all fields!');
      return true;
    }

    if (includeName.includes(name)) {
      alert(`${name} is already in contacts`);
      return true;
    } else if (includeNumber.includes(number)) {
      alert(`${number} is already in contacts`);
      return true;
    }
  };

  const handleChangeName = event => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    resetName();
    resetNumber();

    if (newContact()) {
      return;
    }

    onSubmit(name, number);
  };

  const resetName = () => {
    setName('');
  };
  const resetNumber = () => {
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          value={name}
          placeholder="Eden Clements"
          onChange={handleChangeName}
        />
      </label>

      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          value={number}
          placeholder="000-00-00"
          onChange={handleChangeNumber}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
