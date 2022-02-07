import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <AboutContainer>
          <div className="left-side">Sobre</div>
          <div className="right-side">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, interdum fames praesent ullamcorper condimentum quis at morbi mauris. Scelerisque a sed arcu pharetra non velit. A sed aenean mauris amet diam. Amet, sed facilisi ut dignissim volutpat commodo sed.</p>
          </div>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  max-width: 800px;
  max-height: 100%;
  display: flex;
  margin-bottom: 1rem;
  margin-top: 5rem;
  .left-side {
    width: 200px;
    height: 100%;
    font-size: 40px;
    font-family: DM Sans;
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
    margin-right: 2rem;
    padding-right: 2rem;
    color: white;
    border-right: 1px solid white;
  }
  .right-side {
    font-size: 30px;
    font-family: DM Sans;
    font-weight: 600;
    color: white;
    width: 600px;
  }
`;
