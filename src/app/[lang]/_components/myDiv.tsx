'use client';
import styled from 'styled-components';

const MyDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.colorName1};
  border: 1 px solid ${({ theme }) => theme.colors.colorName2};
  border-radius: 4px;
  width: 100px;
  height: 100px;
`;

function MyDivComponent() {
  return <MyDiv />;
}

export default MyDivComponent;
