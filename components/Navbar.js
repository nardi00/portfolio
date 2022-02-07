import React from "react";
import styled from "styled-components";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Navbar() {
  return (
    <Header>
      <Links>
        <a href="https://www.linkedin.com/in/guilherme-nardi-7a3406217/">
          <LinkedInIcon fontSize="medium" />
        </a>
        <a href="https://github.com/nardi00">
          <GitHubIcon fontSize="medium" />
        </a>
      </Links>
      <Link href="/" passHref>
        <Title>/GUILHERME NARDI</Title>
      </Link>
      <Menu>
        <ul>
          <li>
            <Link href="/sobre" passHref>
              sobre
            </Link>
          </li>
          <li>
            <Link href="/projetos" passHref>
              projetos
            </Link>
          </li>
        </ul>
      </Menu>
    </Header>
  );
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
  & > a {
    margin-left: 1em;
    margin-right: 1em;
    cursor: pointer;
    color: white;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

const Menu = styled.div`
  display: flex;
  & > ul {
    display: flex;
    align-items: center;
    & > li a {
      font-size: 20px;
      font-family: DM Sans;
      color: black;
      transition: 0.5s;
      text-decoration: none;
      color: white;
    }
    & > li:not(:first-child) a{
      padding-left: 1rem;
    }
  }
`;

const Title = styled.h1`
  color: white;
  font-family: DM Mono;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 650px) {
    font-size: 18px;
  }
`;
