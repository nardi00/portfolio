import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Head from "next/head";
import ProjectContainer from "../components/ProjectContainer";
import thumbPaletter from "../public/paletter.png";
import thumbEcommerce from '../public/ecommerce.png'
import thumbNews from '../public/news.png'
import thumbTimer from '../public/timer.png'
import thumbWeather from '../public/weather.png'

export default function projects() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #222222 0%, black 100%)",
      }}
    >
      <Head>
        <title>Projetos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainContainer>
        <Title>Projetos</Title>
        <Projects>
          <ProjectContainer
            number={"01"}
            title={"Paletter"}
            url={"/projetos/paletter"}
            thumbnail={thumbPaletter}
          />
          <ProjectContainer
            number={"02"}
            title={"Ecommerce"}
            url={"/projetos/ecommerce"}
            thumbnail={thumbEcommerce}
          />
          <ProjectContainer
            number={"03"}
            title={"News"}
            url={"/projetos/news"}
            thumbnail={thumbNews}
          />
          <ProjectContainer
            number={"04"}
            title={"Timer widget"}
            url={"/projetos/timer"}
            thumbnail={thumbTimer}
          />
          <ProjectContainer
            number={"05"}
            title={"Weather"}
            url={"/projetos/weather"}
            thumbnail={thumbWeather}
          />
        </Projects>
      </MainContainer>
    </div>
  );
}

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

const Title = styled.h1`
  font-size: 45px;
  font-family: DM Sans;
  font-weight: 600;
  color: white;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 650px) {
    padding: 0;
  }
`;
