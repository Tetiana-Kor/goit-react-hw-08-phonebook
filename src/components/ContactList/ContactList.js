import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    contacts.length > 0 && (
      <ul className={s.list}>
        {contacts.map(({ name, number, id }) => (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              className={s.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
}
