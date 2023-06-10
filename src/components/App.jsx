import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Wrapper, Title } from './App.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { contactListSelector } from 'redux/selectors';
import { filterSelector } from 'redux/selectors';
import { cotactsReducer } from 'redux/contactsReducer';
import { filterReducer } from 'redux/filterReducer';
//
const { addContact, deleteContact } = cotactsReducer.actions;
const { handleChangeFilter } = filterReducer.actions;
//
export const App = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(contactListSelector);
  const filterList = useSelector(filterSelector);
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem(`contacts`)) ?? []
  // );

  // useEffect(() => {
  //   localStorage.setItem(`contacts`, JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   const contactList = localStorage.getItem(`contacts`);
  //   const parsedList = JSON.parse(contactList);
  //   if (parsedList) {
  //     setContacts(parsedList);
  //   }
  // }, []);
  //
  const ChangeFilter = e => {
    dispatch(handleChangeFilter(e.target.value));
  };

  const onSubmit = data => {
    if (contactList.find(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return contactList;
    }
    dispatch(addContact(data));
  };

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
    <Wrapper>
      <Title>Phonebook</Title>
      <Form onSubmit={onSubmit} />
      <Title>Contacts</Title>
      <Filter onChange={ChangeFilter} />
      <ContactList contacts={filteredContacts()} onRemove={removeContact} />
    </Wrapper>
  );
};
