import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import thumb from '../../public/timer.png'
import Image from "next/image";


export default function paletter() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #222222 0%, black 100%)",
      }}
    >
      <Head>
        <title>Timer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <MainContainer>
        <Title>Timer widget</Title>
        <Image src={thumb} alt="thumbnail paletter"/>
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
  font-family: DM Mono;
  font-weight: 600;
  color: white;
  margin-bottom: 3rem;
`;
