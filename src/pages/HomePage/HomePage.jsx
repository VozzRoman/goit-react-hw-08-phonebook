import { Box } from 'components/Container/Box';
import React from 'react';
import { Cover, CoverText } from './HomePage.styled';
import {BsPhone} from 'react-icons/bs';



const HomePage = () => {
  return (
    <div>
      <Box m="0 auto" maxWidth="500px" p='10px'>
        <Cover>
          <CoverText>Welcome to the Phone Book</CoverText>
			 <BsPhone size={380} color={'#d8d8d8'}/>
        </Cover>
      </Box>
    </div>
  );
};

export default HomePage;
