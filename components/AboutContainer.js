import React from "react";
import styled from "styled-components";
const AboutContainer = styled.div`
  max-width: 900px;
  max-height: 100%;
  display: flex;
  margin-bottom: 1rem;
  margin-top: 5rem;
  .left-side {
    max-width: 200px;
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
    @media(max-width: 1300px) {
      display: none;
    }
  }
  .right-side {
    font-size: 30px;
    font-family: DM Sans;
    font-weight: 600;
    color: white;
    width: 600px;
    @media(max-width: 1000px) {
      width: 400px;
      font-size: 22px;
    }
    @media(max-width: 500px) {
      font-size: 18px;
      width: 350px;
    }
    @media(max-width: 430px) {
      font-size: 15px;
      width: 250px;
    }
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <div className="left-side">Sobre</div>
      <div className="right-side">
        <p>
          Sou um desenvolvedor Front-end, moro em São Paulo e sou apaixonado
          pelo processo criativo de desenvolver interfaces visualmente
          atrativas. Atualmente procuro oportunidades de aprender novos
          conceitos, tecnologias e ferramentas a fim de criar a melhor
          experiência possível. " "}
        </p>
      </div>
    </AboutContainer>
  );
}
