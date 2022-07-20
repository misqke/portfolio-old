import styled, { keyframes } from "styled-components";
import Layout from "./Layout";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import MobilePage from "./MobilePage";
import WebPage from "./WebPage";
import AboutPage from "./AboutPage";
import ActionBtn, { ActionBtnBox } from "./ActionBtn";

const BtnAnim = keyframes`
  0% {
    background: radial-gradient(ellipse at center, #045 0, transparent 0% );
    box-shadow: 0px 10px 10px 2px #001;
  }
  10% {
    background: radial-gradient(ellipse at center, #045 0, transparent 10% );
    box-shadow: 0px 9px 9px 2px #001;
  }
  20% {
    background: radial-gradient(ellipse at center, #045 0, transparent 20% );
    box-shadow: 0px 9px 9px 2px #001;
  }
  30% {
    background: radial-gradient(ellipse at center, #045 0, transparent 30% );
    box-shadow: 0px 8px 8px 2px #001;
  }
  40% {
    background: radial-gradient(ellipse at center, #045 0, transparent 40% );
    box-shadow: 0px 7px 7px 2px #001;
  }
  50% {
    background: radial-gradient(ellipse at center, #045 0, transparent 50%);
    box-shadow: 0px 6px 6px 2px #001;
    color: #e5e5e5;
  }
  60% {
    background: radial-gradient(ellipse at center, #045 0, transparent 60%);
    box-shadow: 0px 5px 5px 2px #001;
    color: #e5e5e5;
  }
  70% {
    background: radial-gradient(ellipse at center, #045 0, transparent 70%);
    box-shadow: 0px 4px 4px 2px #001;
    color: #e5e5e5;
  }
  80% {
    background: radial-gradient(ellipse at center, #045 0, transparent 80%);
    box-shadow: 0px 3px 3px 2px #001;
    color: #e5e5e5;
  }
  90% {
    background: radial-gradient(ellipse at center, #045 0, transparent 90%);
    box-shadow: 0px 2px 2px 2px #001;
    color: #e5e5e5;
  }
  100% {
    background: radial-gradient(ellipse at center, #045 0, #045 100%);
    box-shadow: 0px 1px 1px 2px #001;
    color: #e5e5e5;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  transition-duration: 250ms;
  opacity: ${(props) => Number(props.opacity)};
  transform: scaleX(${(props) => props.scale}%)
    scaleY(${(props) => props.scale}%);
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.glass + " " + theme.primary};
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.glass};
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 2rem;
  }
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100%;
  font-size: 1em;
  padding: 0.25rem;
  border: 1px solid
    ${(props) =>
      props.color === "secondary"
        ? props.theme.secondary
        : props.color === "white"
        ? props.theme.text
        : props.theme.primary};
  color: ${(props) =>
    props.color === "secondary"
      ? props.theme.secondary
      : props.color === "white"
      ? props.theme.text
      : props.theme.primary};
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0px 10px 10px 2px #001;
  &:hover {
    animation-name: ${BtnAnim};
    animation-duration: 200ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`;

const Action = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(3px);
  width: 250px;
  font-size: 1em;
  padding: 0.55rem;
  border: 1px solid
    ${(props) =>
      props.color === "secondary"
        ? props.theme.secondary
        : props.color === "white"
        ? props.theme.text
        : props.theme.primary};
  color: ${(props) =>
    props.color === "secondary"
      ? props.theme.secondary
      : props.color === "white"
      ? props.theme.text
      : props.theme.primary};
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0px 10px 10px 2px #001;
  &:hover {
    animation-name: ${BtnAnim};
    animation-duration: 200ms;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
`;

export {
  Layout,
  GlobalStyles,
  Container,
  Btn,
  HomePage,
  AboutPage,
  WebPage,
  MobilePage,
  ContactPage,
  ActionBtn,
  ActionBtnBox,
  BtnAnim,
  Action,
};
