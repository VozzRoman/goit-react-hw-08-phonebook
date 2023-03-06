import styled from 'styled-components';
import background from '../../img/coverBook.jpg';



export const Cover = styled.div`
  max-width: 500px;
  height: 400px;
  background-image:  linear-gradient(gray, rgb(0, 0, 0, 0.3), #878787), url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px;
  padding: 30px;
  text-align: center;
 
`;

export const CoverText = styled.h1`
  display: inline-block;
  color: white;
  text-align: center;
  max-width: 400px;
  margin: 0;
  padding: 0;
`;

