import { Nav, NavA, NavItem, NavList } from 'components/Navigation/Navigation.styled';
import React from 'react';

const AuthNav = () => {
  return (
	<Nav>
	<NavList>
		<NavItem>
			<NavA to="/register">Registration</NavA>
		</NavItem>
		<NavItem>
			<NavA to="/login">Login</NavA>
		</NavItem>
	</NavList>
	
 </Nav>
  );
};

export default AuthNav;
