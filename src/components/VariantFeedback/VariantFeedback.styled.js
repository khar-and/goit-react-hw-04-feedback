import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  padding: 12px;
  border-radius: 4px;
  /* background-color: rgba(0, 0, 0, 0.6); */
  border: 3px solid blue;
  list-style: none;
`;

export const Item = styled.li`
  background-color: #ffffff;
  /* border: 3px solid blue; */
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  /* padding: 4px 8px; */
  font: inherit;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid blue;
  font-weight: 700;
  &:hover {
    color: red;
    scale: 1.1;
  }
`;
