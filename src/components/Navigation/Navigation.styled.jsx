import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
`;
export const NavItem = styled.li`
  display: block;
  display: flex;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavA = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 15px;
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 16px;
  transition: color 250ms linear;

  &.active {
    color: #ffaf1b;
    border: 2px solid #ffba3b;
    border-radius: 10px;
  }
  &:hover {
    color: #ff911b;
  }
`;

export const Nav = styled.nav``;
