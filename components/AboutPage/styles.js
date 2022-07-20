import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
  font-size: 16px;
  @media screen and (min-width: 500px) {
    font-size: 18px;
  }
  @media screen and (min-width: 750px) {
    font-size: 22px;
  }
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  backdrop-filter: 6px;
  border-radius: 0.5rem;
`;

export const AboutText = styled.p`
  font-size: 1em;
  max-width: 60ch;
  text-shadow: 0px 0px 4px ${({ theme }) => theme.primary};
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;

export const SkillColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.secondary};
  backdrop-filter: 6px;
  border-radius: 0.5rem;
  flex-grow: ${(props) => props.grow || 1};
`;

export const SkillTitle = styled.h4`
  background: ${({ theme }) => theme.secondary};
  width: 100%;
  font-size: 1.25em;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  text-align: center;
  padding: 0.25rem;
  font-weight: 700;
`;

export const SkillRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 0.5rem 1rem;
`;

export const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 50px;
  gap: 0.5rem;
  @media screen and (min-width: 500px) {
    max-width: 80px;
  }
  @media screen and (min-width: 750px) {
    max-width: 100px;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: ${({ theme }) => theme.primary};
`;

export const SkillText = styled.div`
  font-size: 0.75em;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;
