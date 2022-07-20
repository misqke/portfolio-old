import styled from "styled-components";

export const WebContainer = styled.div`
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
`;

export const WebCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 800px;
  background: transparent;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(2px);
  border-radius: 0.5rem;
  gap: 0.25rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  box-shadow: 0px 10px 10px 2px #001;
`;

export const WebBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  gap: 0.5rem;
  @media screen and (min-width: 600px) {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    padding: 1rem;
    gap: 1rem;
  }
`;

export const WebTitle = styled.h4`
  background: ${({ theme }) => theme.secondary};
  width: 100%;
  font-size: 1.25em;
  padding: 0.25rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  text-align: center;
  font-weight: 700;
`;

export const WebTech = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  @media screen and (min-width: 600px) {
    gap: 1rem;
  }
`;

export const WebTechTag = styled.p`
  font-size: 0.75em;
  color: ${({ theme }) => theme.primary};
  @media screen and (min-width: 600px) {
    font-size: 1em;
  }
`;

export const WebImg = styled.div`
  width: 100%;
  height: auto;
`;

export const WebDesc = styled.i`
  font-size: 1em;
  width: 90%;
  text-align: center;
  text-shadow: 2px 1px 2px #000;
`;

export const WebBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
