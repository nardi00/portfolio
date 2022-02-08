import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import AboutContainer from "../components/AboutContainer";
import SkillsContainer from "../components/SkillsContainer";
import { motion } from "framer-motion";

const MainContainer = styled(motion.main)`
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

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };


export default function about() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #222222 0%, black 100%)",
      }}
    >
      <Navbar />
      <MainContainer initial={{opacity: 0, x: -200, y: 0}} animate={{opacity: 1, x: 0, y: 0}} exit={{opacity: 0, x: 0, y: -100}} transition={transition} >
        <About>
          <AboutContainer />
          <SkillsContainer />
        </About>
      </MainContainer>
    </div>
  );
}
