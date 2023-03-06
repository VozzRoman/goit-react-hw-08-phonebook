import { Box } from 'components/Container/Box';
import React from 'react';
import { Cover, CoverText } from './HomePage.styled';

const HomePage = () => {
  return (
    <div>
      <Box m="0 auto" maxWidth="500px" p='10px'>
        <Cover>
          <CoverText>Welcome to the Phone Book</CoverText>
        </Cover>
      </Box>
    </div>
  );
};

export default HomePage;
