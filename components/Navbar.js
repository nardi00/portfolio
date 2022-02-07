import React from 'react';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <Header>
        <Links>icons</Links>
        <Title>/GUILHERME NARDI</Title>
        <Contact>Contato</Contact>
    </Header>
  )
}

const Header = styled.div`
  min-width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 5rem;
  align-items: center;
`;
const Links = styled.div`
  color: white;
  @media (max-width: 650px) {
    display: none;
  }  
`;

const Contact = styled.button`
  cursor: pointer;
  background-color: #111111;
  border: 1px solid white;
  border-radius: 5px;
  font-family: DM Sans;
  font-size: 18px;
  color: white;
  padding: 0.5rem;
  transition: 0.5s;
  background: none;
  &:hover {
    color: red;
  }
  @media (max-width: 650px) {
    font-size: 15px;
  }
`;

const Title = styled.h1`
  color: white;
  font-family: DM Mono;
  font-size: 20px;
  font-weight: 600;
  @media (max-width: 650px) {
    font-size: 18px;
  }  
`
