import {
  ButtonContact,
  DialeName,
} from 'components/ContcatList/ContactListStyle';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations/operations';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  //   console.log(id);
  return (
    <>
      <DialeName>
        {name} : <span>{number}</span>
      </DialeName>
      <ButtonContact onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ButtonContact>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
