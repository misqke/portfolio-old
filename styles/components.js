import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: ${(props) => props.flex || 0};
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
  justify-content: ${(props) => props.justify || undefined};
  align-items: center;
  gap: ${(props) => props.gap || "1rem"};
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || undefined};
  gap: ${(props) => props.gap || 0};
  width: ${(props) => props.width || "100%"};
  a {
    width: 100%;
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
  top: 0;
  right: -2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  border: none;
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
