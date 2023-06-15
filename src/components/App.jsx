import { Form } from './Form/Form';
import { Wrapper, Title } from './App.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './Contacts/ContactList';

export const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
