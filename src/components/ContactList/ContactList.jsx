// import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { contactsDeleteAction } from 'Redux/contacts.slice';

export const ContactList = ({ onDelete }) => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const handleDeleteContact = id => {
    dispatch(contactsDeleteAction(id));
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={css.list}>
      {filterContacts.map(({ id, name, number }) => {
        const deleteContact = () => {
          handleDeleteContact(id);
        };
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={deleteContact}
          />
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   // contacts: PropTypes.array.isRequired,
//   // onDelete: PropTypes.func.isRequired,
// };
