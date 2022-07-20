import styled from "styled-components";

export const Screen = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.body};
  overflow: hidden;
  position: relative;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding-top: 60px;
  position: absolute;
  inset: 0;
`;
