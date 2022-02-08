import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";

const Links = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid white;
  .text {
    font-size: 20px;
    font-family: DM Sans;
    color: white;
    font-weight: 600;
    @media(max-width: 500px) {
      display: none;
    }
  }
  & > a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    margin-left: 1rem;
    & > p {
      font-family: Outfit;
      font-weight: 500;
      @media(max-width: 500px) {
      font-size: 13px;
    }
    }
  }
`;

export default function Footer() {
  return (
    <Links>
      <p className="text">Você pode me achar em: </p>
      <a href="https://www.linkedin.com/in/guilherme-nardi-7a3406217/">
        <LinkedInIcon fontSize="large" />
      </a>
      <a href="https://github.com/nardi00">
        <GitHubIcon fontSize="large" />
      </a>
      <a href="mailto:guilhermenardi3@outlook.com">
        <p>guilhermenardi3@outlook.com</p>
      </a>
    </Links>
  );
}
