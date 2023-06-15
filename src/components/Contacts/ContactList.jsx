import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Name, Number, Message } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactListSelector } from 'redux/selectors';
import { cotactsReducer } from 'redux/contactsReducer';
import { filterSelector } from 'redux/selectors';

//
const { deleteContact } = cotactsReducer.actions;

//
const ContactList = () => {
  const contactList = useSelector(contactListSelector).contacts;
  const filterList = useSelector(filterSelector);

  const dispatch = useDispatch();

  const filteredContacts = () => {
    if (filterList) {
      const normalizedFilter = filterList.toLowerCase();
      return contactList
        .filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return contactList;
    }
  };

  const removeContact = e => {
    const idx = contactList.findIndex(
      contact => contact.id === e.target.dataset.id
    );
    dispatch(deleteContact(idx));
  };

  return (
    <List>
      {filteredContacts().length !== 0 ? (
        filteredContacts().map(({ id, name, number }) => (
          <Item key={id}>
            <Name>{name}:</Name>
            <Number>{number}</Number>
            <button data-id={id} onClick={removeContact}>
              Delete
            </button>
          </Item>
        ))
      ) : (
        <Message>Your contact list is empty</Message>
      )}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export { ContactList };
