import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
	display: flex;



`
export const NavItem = styled.li`
display: block;

		&:not(:last-child){
		margin-right: 10px;
	}

`;

export const NavA = styled(NavLink)`
	text-decoration: none;
	color: black;
	font-weight: 600;
font-size: 19px;

&.active {
	color: orange;
}
&:hover{
	color: #ffaf1b;
}

`;

export const Nav = styled.nav`


`