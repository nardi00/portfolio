import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  javascriptLoader,
  reactLoader,
  typescriptLoader,
  htmlLoader,
  cssLoader,
  pythonLoader,
  webpackLoader,
  babelLoader,
  gitLoader,
  figmaLoader,
  npmLoader,
} from "./loader";
import { motion } from "framer-motion";

const SkillsContainer = styled.div`
  max-width: 800px;
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
    width: 600px;
    color: white;
    & > h1 {
      font-size: 20px;
      font-family: Outfit;
      @media(max-width: 430px) {
        font-size: 15px;
      }
    }
    & > div {
      height: 150px;
      display: flex;
      align-items: center;
      a {
        margin-left: 1rem;
        margin-right: 1rem;
      }
    }
    .icons {
      margin-bottom: 2rem;
    }
    @media(max-width: 1000px) {
      width: 400px;
    }
    @media(max-width: 500px) {
      display: inline;
      font-size: 18px;
      width: 350px;
    }
    @media(max-width: 430px) {
      font-size: 15px;
      width: 300px;
    }
  }
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <div className="left-side">Skills</div>
      <div className="right-side">
        <h1>Línguas e frameworks</h1>
        <div className="icons">
          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={htmlLoader}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html"
              width={40}
              height={40}
            />
          </motion.a>

          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={cssLoader}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css"
              width={40}
              height={40}
            />
          </motion.a>

          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={javascriptLoader}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width={40}
              height={40}
            />
          </motion.a>
          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={reactLoader}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width={40}
              height={40}
            />
          </motion.a>
          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={typescriptLoader}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
              alt="typescript"
              width={40}
              height={40}
            />
          </motion.a>
          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={pythonLoader}
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
              alt="python"
              width={40}
              height={40}
            />
          </motion.a>
        </div>
        <h1>Ferramentas de desenvolvimento</h1>
        <div className="icons">
          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={webpackLoader}
              src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg"
              alt="webpack"
              width={60}
              height={60}
            />
          </motion.a>
          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={babelLoader}
              src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
              alt="babel"
              width={40}
              height={40}
            />
          </motion.a>
          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={gitLoader}
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width={40}
              height={40}
            />
          </motion.a>
          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={figmaLoader}
              src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
              alt="figma"
              width={40}
              height={40}
            />
          </motion.a>
          <motion.a whileHover={{scale: 1.1}} >
            <Image
              className="icon"
              loader={npmLoader}
              src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/npm/npm-original-wordmark.svg"
              alt="npm"
              width={40}
              height={40}
            />
          </motion.a>
        </div>
      </div>
    </SkillsContainer>
  );
}
