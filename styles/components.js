import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  flex: 1;
  overflow: hidden;
  @media screen and (min-width: 800px) {
    padding-left: 250px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 300px;
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
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
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
      : "transparent"};
  a {
    width: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
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
    font-size: ${(props) => props.fs * 1.5}em;
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

export const Laptop = styled.div`
  background-image: "./laptop.png";
  display: flex;
  background-size: contain;
  width: 200px;
  height: auto;
`;

export const Btn = styled.button`
  inherits: none;
  font-size: 1.15em;
  padding: 0.35em;
  cursor: pointer;
  border-radius: 20px;
  transition-duration: 250ms;
  border-width: 1;
  width: ${(props) => props.width || "100%"};
  color: ${(props) => (props.outline ? props.theme.primary : props.theme.body)};
  background: ${(props) =>
    props.outline ? "transparent" : props.theme.primary};
  border-color: ${({ theme }) => theme.primary};
  :hover {
    background: ${(props) =>
      !props.outline ? "transparent" : props.theme.primary};
    color: ${(props) =>
      !props.outline ? props.theme.primary : props.theme.body};
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
  height: ${(props) => (props.open ? "calc((1em + 12px) * 2.2)" : 0)};
  min-width: 100%;
  background: ${({ theme }) => theme.body};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  /* opacity: ${(props) => (props.open ? 1 : 0)}; */
  /* transform: translateY(${(props) => (props.open ? 0 : "-100%")}); */
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
  flex-direction: column;
  flex: 1;
  justify-content: center;
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
  @media screen and (min-width: 800px) {
    transform: translateX(0);
  }
`;

export const NavBtn = styled.button`
  border-color: transparent;
  border-left: none;
  border-right: none;
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.md};
  background: ${(props) =>
    props.active ? props.theme.primary : "transparent"};
  transition-duration: 250ms;
  color: ${(props) => (props.active ? props.theme.bg : props.theme.text)};
  cursor: pointer;
  padding: 0.25em;
  :hover {
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
  right: -2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.bgTrans};
  color: ${({ theme }) => theme.text};
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  span {
    display: flex;
    min-width: 80%;
    min-height: 2px;
    border-radius: 1rem;
    background: ${({ theme }) => theme.text};
    transition-duration: 250ms;
  }
  :hover {
    span {
      background: ${({ theme }) => theme.primary};
    }
  }
  @media screen and (min-width: 800px) {
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
  backdrop-filter: blur(8px);
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
