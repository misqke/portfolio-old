import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #012;
  overflow: hidden;
  position: relative;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  position: absolute;
  padding-top: 60px;
  inset: 0;
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
