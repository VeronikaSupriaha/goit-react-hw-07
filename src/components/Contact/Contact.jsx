import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { IoIosPerson } from 'react-icons/io';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import css from './Contact.module.css';

export default function Contact({ data }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(data.id));
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactTextContainer}>
        <div className={css.contactWrapper}>
          <IoIosPerson className={css.icon} />
          <p className={css.contactText}>{data.name}</p>
        </div>
        <div className={css.contactWrapper}>
          <MdOutlinePhoneIphone className={css.icon} />
          <p className={css.contactText}>{data.number}</p>
        </div>
      </div>
      <button className={css.contactBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
