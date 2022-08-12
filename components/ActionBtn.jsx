import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Action } from "./index";

const ActionBtn = ({ content, page }) => {
  const router = useRouter();

  const handleNavigate = async () => {
    router.push(page);
  };

  return <Action onClick={() => handleNavigate()}>{content}</Action>;
};

export default ActionBtn;

export const ActionBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;
