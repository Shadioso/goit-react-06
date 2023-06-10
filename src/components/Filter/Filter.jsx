import PropTypes from 'prop-types';
import { Label, Input } from 'components/PhoneBook/PhoneBook.styled';
import { useSelector } from 'react-redux';
import { filterSelector } from 'redux/selectors';

const Filter = ({ onChange }) => {
  const filter = useSelector(filterSelector);
  return (
    <>
      <Label htmlFor="1">Find contacts by name</Label>
      <Input
        id="1"
        type="text"
        name="filter"
        title="Use this field to filter contacts by contact's name"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export { Filter };
