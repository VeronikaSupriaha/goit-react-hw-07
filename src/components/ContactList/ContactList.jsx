import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
