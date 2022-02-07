import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Project({
  title,
  number,
  url,
  thumbnail,
  githubURL,
  website,
}) {
  return (
    <ProjectContainer>
      <div className="left-side">{number}</div>
      <div className="right-side">
        <Link href={url} passHref>
          <a>
            <Image
              src={thumbnail}
              alt="thumbnail"
              responsive
              width={1500}
              height={720}
            />
          </a>
        </Link>
        <div>
          <Link href={url} passHref>
            <h1>{title}</h1>
          </Link>
          <Links>
            <a href={githubURL}>
              <GitHubIcon fontSize="medium" />
            </a>
            <a href={website}>
              <LinkIcon fontSize="medium" />
            </a>
          </Links>
        </div>
      </div>
    </ProjectContainer>
  );
}

const Links = styled.div`
  color: white;
  & > a {
    margin-left: 1em;
    margin-right: 1em;
    cursor: pointer;
    color: white;
  }
`;

const ProjectContainer = styled.div`
  max-width: 800px;
  max-height: 100%;
  display: flex;
  margin-bottom: 1rem;
  margin-top: 5rem;
  & > a {
    cursor: pointer;
  }
  .left-side {
    width: 200px;
    height: 100%;
    font-size: 40px;
    font-family: DM Mono;
    font-weight: 500;
    display: flex;
    justify-content: center;
    padding-right: 2rem;
    color: white;
  }
  .right-side {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      height: 75px;
      h1 {
        font-family: Outfit;
        font-size: 30px;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }
`;
