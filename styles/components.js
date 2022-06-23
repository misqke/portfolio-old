import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.justify || undefined};
  height: 100vh;

  @media screen and (min-width: 800px) {
    padding-left: 250px;
  }
`;

export const NavBar = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  width: ${(props) => props.size}px;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  transform: translateX(${(props) => props.pos}px);
  transition-duration: 750ms;

  @media screen and (min-width: 800px) {
    transform: translateX(0);
  }
`;

export const NavBtn = styled.button`
  border: none;
  width: 100%;
  font-size: ${({ theme }) => theme.sizes.md};
  background: ${({ theme }) => theme.bg};
`;

export const NavToggle = styled.button`
  position: absolute;
  top: 0;
  right: -2.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.bg};
  border: none;
  @media screen and (min-width: 800px) {
    display: none;
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
  align-items: ${(props) => props.align || undefined};
  justify-content: ${(props) => props.justify || undefined};
  gap: ${(props) => props.gap || "1rem"};
`;
