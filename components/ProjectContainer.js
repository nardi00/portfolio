import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Links = styled.div`
  color: white;
  & > a {
    margin-left: 1em;
    margin-right: 1em;
    cursor: pointer;
    color: white;
  }
`;

const ProjectContainer = styled(motion.div)`
  max-width: 800px;
  max-height: 100%;
  display: flex;
  margin-bottom: 2.5rem;
  margin-top: 2.5rem;
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
      cursor: pointer;
      h1 {
        font-family: Outfit;
        font-size: 30px;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }
`;

const transition = { duration: 0.8, ease: [0.6, 0.01, -0.05, 0.9] };

export default function Project({
  title,
  number,
  url,
  thumbnail,
  githubURL,
  website,
}) {
  return (
    <ProjectContainer initial={{opacity: 0, x: -200, y: 0}} animate={{opacity: 1, x: 0, y: 0 }} transition={transition} >
      <div className="left-side">{number}</div>
      <div className="right-side">
        <Link href={url} passHref scroll={false}>
          <motion.div whileHover={{ scale: 1.05 }} transition={transition}>
            <a>
              <Image
                src={thumbnail}
                alt="thumbnail"
                responsive
                width={1500}
                height={720}
              />
            </a>
          </motion.div>
        </Link>
        <motion.div exit={{opacity: 0}} transition={transition} >
          <Link href={url} passHref scroll={false} >
            <h1>{title}</h1>
          </Link>
          <Links scroll={false} >
            <a href={githubURL}>
              <GitHubIcon fontSize="medium" />
            </a>
            <a href={website}>
              <LinkIcon fontSize="medium" />
            </a>
          </Links>
        </motion.div>
      </div>
    </ProjectContainer>
  );
}
