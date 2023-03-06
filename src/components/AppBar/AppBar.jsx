import AuthNav from 'components/AuthNav/AuthNav';
import { Box } from 'components/Container/Box';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import React from 'react';

import { Header } from './AppBar.styled';

const AppBar = () => {
	const {isLoggedIn} = useAuth();
	  return (
    <Header>
      <Box m="0 auto" width="800px" p='0 10px' display='flex' justifyContent='space-between' alignItems= 'center'>
        <Navigation />
		  {isLoggedIn ? <UserMenu/> : <AuthNav />}
		  
      </Box>
    </Header>
  );
};

export default AppBar;
