import styled from "styled-components";

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  max-width: 500px;
  font-size: 20px;
  @media screen and (min-width: 500px) {
    font-size: 24px;
  }
  @media screen and (min-width: 750px) {
    font-size: 28px;
  }
`;

export const HomeText = styled.p`
  font-size: ${(props) =>
    props.size === "small" ? ".75em" : props.size === "large" ? "3em" : "1em"};
  color: ${({ theme }) => theme.text};
  font-weight: ${(props) => (props.size === "large" ? "700" : "400")};
  line-height: 100%;
  max-width: 30ch;
`;

export const HomeSpan = styled.span`
  color: ${({ theme }) => theme.primary};
`;
