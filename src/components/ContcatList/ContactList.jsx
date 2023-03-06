import { ItemList, ListContacts } from './ContactListStyle';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors/selectors';


export const ContactList = () => {

  const contactsList = useSelector(selectFilteredContacts);
//   console.log(contactsList);

  return (
    <>
      <ListContacts>
        {contactsList.map(({ id, name, number }) => (
          <ItemList key={id}>
            <ContactItem name={name} number={number} id={id} />
          </ItemList>
        ))}
      </ListContacts>
    </>
  );
};
