import React, { useState } from "react";
import {
  Row,
  Text,
  SelectBar,
  HoverSpan,
  SelectionMenu,
  SelectionBtn,
} from "../styles/components";
import { FaCaretDown } from "react-icons/fa";

const BgSelector = ({ mode, changeMode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Row justify={"center"}>
      <SelectBar open={open}>
        <Text color={"primary"} bg>
          {mode}
        </Text>
        <HoverSpan
          onClick={() => setOpen((prev) => !prev)}
          fs={1.25}
          hover
          open={open}
        >
          <FaCaretDown />
        </HoverSpan>
        <SelectionMenu open={open}>
          <SelectionBtn onClick={() => changeMode("pop")}>pop</SelectionBtn>
          <SelectionBtn onClick={() => changeMode("bounce")}>
            bounce
          </SelectionBtn>
          <SelectionBtn onClick={() => changeMode("rain")}>rain</SelectionBtn>
          <SelectionBtn onClick={() => changeMode("none")}>none</SelectionBtn>
        </SelectionMenu>
      </SelectBar>
    </Row>
  );
};

export default BgSelector;
