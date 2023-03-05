import AuthNav from 'components/AuthNav/AuthNav';
import { Box } from 'components/Container/Box';
import Navigation from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router';
import { Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <Box m="0 auto" width="800px" p='0 10px' display='flex' justifyContent='space-between'>
        <Navigation />
		  <AuthNav />
      </Box>
    </Header>
  );
};

export default AppBar;
