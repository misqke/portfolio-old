import styled from "styled-components";
import { fadeIn, fadeUp, slideDown, slideUp } from "./animations";

export const Page = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  width: "100vw";
  flex: 1;
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    padding-left: 250px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 300px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100vh;
  width: "100%";
  padding: 1rem;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.bg + " " + theme.primary};
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.bg};
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
    border-radius: 2rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: ${(props) => props.height || undefined};
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.max || undefined};
  min-width: ${(props) => props.min || undefined};
  justify-content: ${(props) => props.justify || undefined};
  align-items: ${(props) => props.align || "center"};
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  gap: ${(props) => props.gap || "1rem"};
  padding: ${(props) => props.padding || ".5rem"};
  border-radius: ${(props) => props.radius || "8px"};
  text-align: ${(props) => props.textAlign || undefined};
  flex: ${(props) => props.flex || 0};
  background: ${(props) =>
    props.bg === "trans"
      ? props.theme.bgTrans
      : props.bg === "solid"
      ? props.theme.bg
      : "transparent"};
  animation-duration: ${(props) => props.dur + "ms" || undefined};
  animation-delay: ${(props) => props.delay + "ms" || undefined};
  animation-fill-mode: forwards;
  animation-timing-function: ${(props) => props.timing || "ease-in-and-out"};
  animation-name: ${(props) =>
    props.animation === "fadeIn"
      ? fadeIn
      : props.animation === "fadeUp"
      ? fadeUp
      : props.animation === "slideDown"
      ? slideDown
      : props.animation === "slideUp"
      ? slideUp
      : undefined};
`;

export const Col = styled.div`
  animation-duration: ${(props) => props.dur + "ms" || undefined};
  animation-delay: ${(props) => props.delay + "ms" || undefined};
  animation-fill-mode: forwards;
  animation-timing-function: ${(props) => props.timing || "ease-in-and-out"};
  animation-name: ${(props) =>
    props.animation === "fadeIn"
      ? fadeIn
      : props.animation === "fadeUp"
      ? fadeUp
      : props.animation === "slideDown"
      ? slideDown
      : props.animation === "slideUp"
      ? slideUp
      : undefined};
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: ${(props) => props.textAlign || undefined};
  padding: ${(props) => props.padding || "1rem"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || undefined};
  gap: ${(props) => props.gap || 0};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || undefined};
  max-width: ${(props) => props.max || undefined};
  min-width: ${(props) => props.min || undefined};
  flex: ${(props) => (props.flex ? 1 : 0)};
  border-radius: ${(props) => props.radius || "8px"};
  overflow-y: ${(props) => props.overflow || undefined};
  background: ${(props) =>
    props.bg === "trans"
      ? props.theme.bgTrans
      : props.bg === "solid"
      ? props.theme.bg
      : props.bg === "body"
      ? props.theme.body
      : "transparent"};

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  width: ${(props) => props.width || "200"}px;
  height: ${(props) => props.height || "200"}px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
  overflow: hidden;
  position: relative;
`;

export const Text = styled.p`
  color: ${(props) =>
    props.color === "primary"
      ? props.theme.primary
      : props.color === "secondary"
      ? props.theme.body
      : props.theme.text};
  text-align: "center";
  font-size: ${(props) => props.fs || "1.15"}em;
  max-width: 50ch;
  font-weight: ${(props) => props.weight || undefined};
  background: ${(props) => (props.bg ? props.theme.body : undefined)};
  @media screen and (min-width: 800px) {
    font-size: ${(props) => props.fs * 1.2}em;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.color || props.theme.primary};
  font-weight: ${(props) => props.weight || undefined};
  font-size: ${(props) => props.fs || "1.15"}em;
`;

export const HoverSpan = styled.button`
  border: none;
  background: none;
  height: 1.5em;
  cursor: pointer;
  color: ${(props) => props.color || props.theme.text};
  font-weight: ${(props) => props.weight || undefined};
  font-size: ${(props) => props.fs || "1.15"}em;
  transition-duration: 250ms;
  transform: rotateZ(${(props) => (props.open ? 180 : 0)}deg);
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const WebProj = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  justify-content: space-evenly;
  gap: 0.5rem;
  max-width: 450px;
  background: ${({ theme }) => theme.bgTrans};
  @media screen and (min-width: 600px) {
    width: 46%;
    height: 275px;
    justify-content: space-between;
  }
  @media screen and (min-width: 800px) {
    height: 300px;
  }
  @media screen and (min-width: 1200px) {
    height: 350px;
  }
`;

export const MobileProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.bgTrans};
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 1rem;
  max-width: 450px;
  @media screen and (min-width: 700px) {
    width: 45%;
  }
  @media screen and (min-width: 900px) {
    height: 450px;
  }
`;

export const MobileImage = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: 100px;
  @media screen and (min-width: 700px) {
    width: 125px;
  }
  @media screen and (min-width: 900px) {
    width: 150px;
  }
`;

export const Switch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: ${(props) => props.flex || 0};
  flex: 1;
  /* height: 100%; */
  font-size: 1.25em;
  @media screen and (min-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0.5rem;
  }
  @media screen and (min-width: 800px) {
    padding: 1rem;
  }
`;

export const ReverseSwitch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: ${(props) => props.flex || 0};
  font-size: 1.25em;
  flex: 1;
  justify-content: space-between;
  @media screen and (min-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Btn = styled.button`
  inherits: none;
  font-size: ${(props) => props.fs || "1em"};
  padding: ${(props) => props.padding || ".25em"};
  cursor: pointer;
  border-radius: 20px;
  transition-duration: 250ms;
  border-width: 1;
  width: ${(props) => props.width || "100%"};
  color: ${(props) => (props.outline ? props.theme.primary : props.theme.bg)};
  background: ${(props) =>
    props.outline ? "transparent" : props.theme.primary};
  border-color: ${(props) =>
    props.outline ? props.theme.primary : props.theme.bg};
  &:hover {
    background: ${(props) =>
      !props.outline ? "transparent" : props.theme.primary};
    color: ${(props) =>
      !props.outline ? props.theme.primary : props.theme.bg};
    border-color: ${(props) =>
      !props.outline ? props.theme.primary : props.theme.bg};
  }
`;

export const SelectBar = styled.div`
  background: ${({ theme }) => theme.body};
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 0.5em;
  border-radius: 0.5rem;
  position: relative;
  overflow: ${(props) => (props.open ? "visible" : "hidden")};
  border-bottom-left-radius: ${(props) => (props.open ? 0 : ".5rem")};
  border-bottom-right-radius: ${(props) => (props.open ? 0 : ".5rem")};
  z-index: 2;
`;

export const SelectionMenu = styled.div`
  flex-direction: column;
  display: flex;
  transition: 250ms;
  height: ${(props) => (props.open ? "80px" : 0)};
  min-width: 100%;
  background: ${({ theme }) => theme.body};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow-y: scroll;
  /* overflow: hidden; */
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

export const SelectionBtn = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 6px;
  flex: 1;
  cursor: pointer;
  transition-duration: 250ms;
  font-size: 1em;
  &:hover {
    background: ${({ theme }) => theme.bgTrans};
    color: ${({ theme }) => theme.primary};
  }
`;

export const NavBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding: 0.5rem 0px;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.size}px;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  transform: translateX(${(props) => props.pos}px);
  transition-duration: 750ms;
  gap: 1rem;
  z-index: 10;
  border-right: 1px solid ${({ theme }) => theme.primary};
  box-shadow: 0px 5px 20px 5px ${({ theme }) => theme.bgTrans};
  @media screen and (min-width: 1000px) {
    transform: translateX(0);
  }
`;

export const NavBtn = styled.button`
  border-color: transparent;
  border-left: none;
  border-right: none;
  width: 100%;
  position: relative;
  font-size: 1.5em;
  background: ${(props) =>
    props.active ? props.theme.primary : "transparent"};
  transition-duration: 250ms;
  color: ${(props) => (props.active ? props.theme.bg : props.theme.text)};
  cursor: pointer;
  padding: 0.25em;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    border-style: solid;
    border-top-width: 1;
    border-bottom-width: 1;
    border-left: none;
    border-right: none;
  }
`;

export const NavToggle = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  z-index: 10;
  border-radius: 0.5rem;
  cursor: pointer;
  span {
    display: flex;
    min-width: 80%;
    min-height: 2px;
    border-radius: 1rem;
    background: ${({ theme }) => theme.text};
    transition-duration: 250ms;
  }
  &:hover {
    span {
      background: ${({ theme }) => theme.primary};
    }
  }
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const ToggleBtn = styled.button`
  height: 1.25em;
  width: 4.5em;
  border: none;
  position: relative;
  border-radius: 2em;
  padding: 2;
  background: ${({ theme }) => theme.body};
  cursor: pointer;

  ::before {
    content: "";
    width: 2.25em;
    position: absolute;
    background: ${({ theme }) => theme.primary};
    top: 0;
    bottom: 0;
    left: 0;
    transform: translateX(${(props) => props.mode});
    border-radius: 2em;
    transition-duration: 250ms;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const Form = styled.form`
  background: ${({ theme }) => theme.bgTrans};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.5rem;
  label {
    color: ${({ theme }) => theme.text};
    font-size: 1.15em;
  }
  input,
  textarea {
    inherits: false;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    background: transparent;
    font-size: 1.25rem;
    padding: 0.25em 0.5em;
    transition-duration: 250ms;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
    border-radius: 8px;
  }
`;

export const ColorTrack = styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.text};
  cursor: pointer;
`;

export const ColorBlock = styled.span`
  display: flex;
  width: 5px;
  height: 100%;
  flex: 1;
`;

export const LinkA = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "100%"};
  flex: ${(props) => (props.flex ? 1 : undefined)};
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition-duration: 250ms;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const SettingsBox = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  transition-duration: 250ms;
  cursor: pointer;
  z-index: 12;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const SettingsMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 10;
  gap: 0.5rem;
  min-height: ${(props) => props.size - 90}px;
  padding: 0.5rem;
  border-radius: 8px;
  width: ${(props) => props.size - 50}px;
  background-color: ${({ theme }) => theme.bg};
  transition-duration: 500ms;
  transform: translateY(${(props) => (props.open ? 0 : "-100%")});
`;
