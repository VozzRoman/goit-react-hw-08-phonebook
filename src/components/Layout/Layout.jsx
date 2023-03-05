import AppBar from 'components/AppBar/AppBar';
import React from 'react'
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
	<>
	<AppBar/>
	<Outlet/>
	
	</>


  )
}

export default Layout;

