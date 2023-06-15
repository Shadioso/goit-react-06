import { Label, Input } from 'components/PhoneBook/PhoneBook.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from 'redux/selectors';
import { filterReducer } from 'redux/filterReducer';

//
const { handleChangeFilter } = filterReducer.actions;
//
const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(filterSelector);

  const changeFilter = e => {
    dispatch(handleChangeFilter(e.target.value));
  };
  return (
    <>
      <Label htmlFor="1">Find contacts by name</Label>
      <Input
        id="1"
        type="text"
        name="filter"
        title="Use this field to filter contacts by contact's name"
        value={filter}
        onChange={changeFilter}
      />
    </>
  );
};

export { Filter };
