import React from "react";
import { IoMdSettings } from "react-icons/io";
import { SettingsBox } from "../../styles/components";

const Settings = ({ click, open }) => {
  return (
    <SettingsBox open={open} onClick={() => click()}>
      <IoMdSettings style={{ fontSize: "2rem" }} />
    </SettingsBox>
  );
};

export default Settings;
