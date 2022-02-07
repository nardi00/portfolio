import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import AboutContainer from "../components/AboutContainer";
import SkillsContainer from "../components/SkillsContainer";

const MainContainer = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 1rem;
  @media (max-width: 650px) {
    padding-left: 12%;
    padding-right: 12%;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 650px) {
    padding: 0;
  }
`;

export default function about() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #222222 0%, black 100%)",
      }}
    >
      <Navbar />
      <MainContainer>
        <About>
          <AboutContainer />
          <SkillsContainer />
        </About>
      </MainContainer>
    </div>
  );
}
