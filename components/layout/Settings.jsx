import React from "react";
import { IoMdSettings } from "react-icons/io";
import { SettingsBox } from "../../styles/components";

const Settings = ({ click }) => {
  return (
    <SettingsBox onClick={() => click()}>
      <IoMdSettings style={{ fontSize: "2rem" }} />
    </SettingsBox>
  );
};

export default Settings;
