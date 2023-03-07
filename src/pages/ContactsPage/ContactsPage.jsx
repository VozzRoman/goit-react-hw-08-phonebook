import { ContactForm } from 'components/ContactForm/ContactForm';
import { Box } from 'components/Container/Box';
import { ContactList } from 'components/ContcatList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations/operations';
import { selectError, selectIsLoading } from 'redux/selectors/selectors';
const ContactsPage = () => {

	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);

	useEffect(()=> {
		dispatch(fetchContacts());
	}, [dispatch]);
  return (
	<div style={{padding: '10px'}}>
	<Box
	m="0 auto"
	maxWidth="500px"
	background="rgb(255, 165, 0, 0.8)"
	borderRadius="12px"
	p="20px"
	boxShadow="3px 4px 6px #888888">

	<ContactForm /> 
	  <Filter />
	  {isLoading && <Loader/>}
	  {error && <p>{error}</p>}
	  <ContactList />

	</Box>
	</div>
  )
}

export default ContactsPage
