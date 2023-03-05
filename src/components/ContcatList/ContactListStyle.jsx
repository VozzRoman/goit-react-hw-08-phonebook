import styled from 'styled-components';

export const ListContacts = styled.ul``;

export const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid white;
`;

export const ButtonContact = styled.button`
  cursor: pointer;
  display: flex;
  height: 30px;
  align-items: center;
  border-radius: 4px;
  color: black;
  font-weight: 600;
  transition: background-color 250ms linear;
  &:hover,
  :focus {
    background-color: #5959ff;
    color: white;
  }
`;

export const DialeName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;
