import { Nav, NavA, NavItem, NavList } from 'components/Navigation/Navigation.styled';
import React from 'react';

const AuthNav = () => {
  return (
	<Nav>
	<NavList>
		<NavItem>
			<NavA to="/register">Sign up</NavA>
		</NavItem>
		<NavItem>
			<NavA to="/login">Log in</NavA>
		</NavItem>
	</NavList>
	
 </Nav>
  );
};

export default AuthNav;
