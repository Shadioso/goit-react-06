import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';
import { cotactsReducer } from 'redux/contactsReducer';
import { contactListSelector } from 'redux/selectors';

//
const { addContact } = cotactsReducer.actions;

//
const Form = () => {
  const contactList = useSelector(contactListSelector).contacts;

  const dispatch = useDispatch();
  const [name, setName] = useState(``);
  const [number, setNumber] = useState(``);
  const state = {
    name,
    number,
  };

  const onSubmit = data => {
    if (contactList.find(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return contactList;
    }
    dispatch(addContact(data));
  };

  const submitForm = evt => {
    evt.preventDefault();
    onSubmit({ ...state, id: nanoid() });
    setName(``);
    setNumber(``);
  };

  const changeInput = evt => {
    const { name } = evt.target;
    switch (name) {
      case `name`:
        setName(evt.target.value);
        break;
      case `number`:
        setNumber(evt.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <PhoneBook
      SubmitForm={submitForm}
      ChangeInput={changeInput}
      options={state}
    />
  );
};

export { Form };
