import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { activate } from "../redux/transitionSlice";
import { useRouter } from "next/router";

const ActionBtn = ({ content, page }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleNavigate = async () => {
    await router.push(page);
    dispatch(activate());
  };

  return <Action onClick={() => handleNavigate()}>{content}</Action>;
};

export default ActionBtn;

const Action = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(3px);
  width: 250px;
  font-size: 1em;
  padding: 0.55rem;
  border: 1px solid
    ${(props) =>
      props.color === "secondary"
        ? props.theme.secondary
        : props.color === "white"
        ? props.theme.text
        : props.theme.primary};
  color: ${(props) =>
    props.color === "secondary"
      ? props.theme.secondary
      : props.color === "white"
      ? props.theme.text
      : props.theme.primary};
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0px 10px 10px 2px #001;
  transition-duration: 300ms;
  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

export const ActionBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;
