import styled from 'styled-components';

export const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 2%;
  border-top: solid #dfdbdb 1.5px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #f9f5f5;
  box-shadow: 0px 8px 6px -6px #aeaaaa;
  width: 100%;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const NavDescription = styled.div`
  padding-top: 3px;
`;
