import styled, { keyframes } from "styled-components";
import Layout from "./Layout";
import GlobalStyles from "./GlobalStyles";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import MobilePage from "./MobilePage";
import WebPage from "./WebPage";
import AboutPage from "./AboutPage";
import ActionBtn, { ActionBtnBox } from "./ActionBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  transition-duration: 250ms;
  opacity: ${(props) => Number(props.opacity)};
  transform: scaleX(${(props) => props.scale}%)
    scaleY(${(props) => props.scale}%);
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
  transition-duration: 300ms;
  &:hover {
    background: ${({ theme }) => theme.secondary};
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
};
