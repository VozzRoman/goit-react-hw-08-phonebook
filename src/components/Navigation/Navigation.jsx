import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavA, NavItem, NavList } from './Navigation.styled';

const Navigation = () => {
  return (
	 <Nav>
		<NavList>
			<NavItem>
				<NavA to="/">Home</NavA>
			</NavItem>
			<NavItem>
				<NavA to="/contacts">Contacts</NavA>
			</NavItem>
		</NavList>
		
	 </Nav>
  )
}

export default Navigation;
