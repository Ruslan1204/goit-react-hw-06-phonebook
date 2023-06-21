import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Filter = ({ onChange }) => {
  const filter = useSelector(state => state.filter);
  return (
    <label>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  // filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
