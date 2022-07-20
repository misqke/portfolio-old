import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;

  z-index: 10;
  @media screen and (min-width: 750px) {
    flex-direction: row;
    background-color: #0009;
    backdrop-filter: blur(3px);
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 0.5rem;
  max-width: 1400px;
  z-index: 5;
  background-color: #000;
  backdrop-filter: blur(3px);
  @media screen and (min-width: 750px) {
    padding: 0px 1rem;
    background-color: transparent;
    backdrop-filter: unset;
  }
`;

export const Title = styled.button`
  color: ${({ theme }) => theme.text};
  transition-duration: 250ms;
  cursor: pointer;
  border: none;
  background: transparent;
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
  &:disabled {
    color: ${({ theme }) => theme.primary};
  }
  @media screen and (min-width: 750px) {
    font-size: 1.5rem;
  }
`;

export const TitleText = styled.h1`
  font-size: 1.25rem;
`;

export const Toggle = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  & > span {
    display: flex;
    width: 90%;
    height: 2px;
    background: #ddd;
    border-radius: 2rem;
    position: absolute;
    left: 5%;
    transform-origin: center;
  }

  & > span:first-child {
    top: 25%;
    transition-duration: ${(props) => (props.open ? "250ms" : "500ms")};
    transform: ${(props) =>
      props.open ? "translateY(-20px)" : "translateY(-50%)"};
  }

  & > span:nth-child(2) {
    top: 50%;
    transition-duration: 450ms;
    transform: ${(props) =>
      props.open ? "translateY(-50%) rotateZ(225deg)" : "translateY(-50%)"};
  }
  & > span:nth-child(3) {
    top: 50%;
    transition-duration: 450ms;
    transform: ${(props) =>
      props.open ? "translateY(-50%) rotateZ(-225deg)" : "translateY(-50%)"};
  }

  & > span:last-child {
    top: 75%;
    transition-duration: ${(props) => (props.open ? "250ms" : "500ms")};
    transform: ${(props) =>
      props.open ? "translateY(20px)" : "translateY(-50%)"};
  }

  @media screen and (min-width: 750px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 4;
  transition-duration: 450ms;
  transform: translateY(${(props) => (props.open ? "0%" : "-125%")});
  background-color: #0009;
  backdrop-filter: blur(3px);
  @media screen and (min-width: 750px) {
    flex-direction: row;
    display: flex;
    transform: unset;
    background-color: transparent;
    backdrop-filter: unset;
  }
`;

export const NavBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition-duration: 250ms;
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
  &:disabled {
    color: ${({ theme }) => theme.primary};
    background: transparent;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
  @media screen and (min-width: 750px) {
    width: max-content;
    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
