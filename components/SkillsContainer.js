import React from "react";
import styled from "styled-components";

export default function Skills() {
  return (
    <SkillsContainer>
      <div className="left-side">Skills</div>
      <div className="right-side">
        <h1>Línguas e frameworks</h1>
        <div className="icons" ></div>
        <h1>Ferramentas</h1>
        <div className="icons" ></div>
      </div>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
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
    width: 600px;
    color: white;
    & > h1 {
      font-size: 20px;
      font-family: Outfit;
    }
    & > div {
      height: 150px;
      display: flex;
      background-color: white;
    }
    .icons {
      margin-bottom: 2rem;
    }
  }
`;
