import styled from 'styled-components';
import background from '../../img/coverBook.jpg';



export const Cover = styled.div`
  max-width: 540px;
  height: 600px;
  border: red;
  background-image:  linear-gradient(gray, rgb(0, 0, 0, 0.3), #878787), url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px;
  padding: 70px 30px 30px 30px;
  text-align: center;
  box-shadow: 3px 4px 6px #888888;

`;

export const CoverText = styled.h1`
  display: inline-block;
  color: white;
  text-align: center;
  max-width: 400px;
  margin-bottom: 40px;
  padding: 0;
  text-shadow: 3px 2px 4px #101010;
`;

