import styled from "styled-components";

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  gap: 1rem;
  padding: 1rem 0;
  @media screen and (min-width: 600px) {
    gap: 2rem;
  }
  @media screen and (min-width: 1500px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const MobileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  height: 100%;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 0;
  @media screen and (min-width: 1400px) {
    height: 300px;
  }
`;

export const MobileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 500px;
  background: transparent;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(2px);
  border-radius: 0.5rem;
  gap: 0.25rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  box-shadow: 0px 10px 10px 2px #001;
`;

export const MobileImg = styled.div`
  height: 100%;
  width: auto;
  max-width: 200px;
`;
