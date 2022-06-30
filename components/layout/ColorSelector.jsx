import React from "react";
import { ColorTrack, ColorBlock } from "../../styles/components";

const hueArr = [];
for (let i = 1; i < 361; i++) {
  hueArr.push(i);
}

const ColorSelector = ({ click }) => {
  const handleClick = (num) => {
    window.localStorage.setItem("hue", num);
    click(num);
  };

  return (
    <ColorTrack>
      {hueArr.length > 0 &&
        hueArr.map((num) => (
          <ColorBlock
            onClick={() => handleClick(num)}
            key={num}
            style={{ background: `hsl(${num}, 90%, 50%)` }}
          />
        ))}
    </ColorTrack>
  );
};

export default ColorSelector;
