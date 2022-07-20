import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    max-width: 1200px;
  }
`;

export const ContactTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ContactText = styled.p`
  font-size: ${(props) => (props.large ? "1.5em" : "1.25em")};
  font-weight: ${(props) => (props.large ? "700" : "400")};
  text-shadow: 0px 0px 4px ${({ theme }) => theme.primary};
  @media screen and (min-width: 600px) {
    font-size: 2em;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(3px);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0px 10px 10px 2px #001;
  border: 1px solid
    ${(props) => (props.active ? props.theme.primary : props.theme.text)};
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  & > label {
    position: absolute;
    left: 1rem;
    top: ${(props) => (props.active ? 0 : "50%")};
    transform: translateY(-50%);
    transition-duration: 250ms;
    font-size: ${(props) => (props.active ? ".75em" : "1em")};
    padding: 0.25rem;
    background: ${({ theme }) => theme.bg};
    cursor: pointer;
  }
  & > input,
  textarea {
    background: transparent;
    border: none;
    font-size: 1em;
    padding: 0.75rem;
    width: 100%;
    outline: none;
    border: 1px solid ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    border-radius: 0.5rem;
  }
  & > input:auto-complete,
  textarea {
  }
  & > input:valid + label,
  textarea:valid + label {
    color: ${({ theme }) => theme.primary};
  }
  & > input:valid,
  textarea:valid {
    border: 1px solid ${({ theme }) => theme.primary};
  }
  & > input:focus + label,
  textarea:focus + label {
    top: 0;
    font-size: 0.75em;
  }
`;

export const FormInput = styled.input`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.text};
  width: 100%;
  font-size: 1em;
  padding: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  outline: none;
`;

export const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100%;
  font-size: 1em;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0px 10px 10px 2px #001;
  transition-duration: 300ms;
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
  &:disabled {
    border: 1px solid ${({ theme }) => theme.gray};
    color: ${({ theme }) => theme.gray};
  }
`;
