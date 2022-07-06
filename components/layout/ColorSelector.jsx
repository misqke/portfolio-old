import React from "react";
import { ColorTrack, ColorBlock } from "../../styles/components";

const hueArr = [];
for (let i = 1; i < 361; i++) {
  hueArr.push(i);
}

const ColorSelector = ({ click }) => {
  return (
    <ColorTrack>
      {hueArr.length > 0 &&
        hueArr.map((num) => (
          <ColorBlock
            onClick={() => click(num)}
            key={num}
            style={{
              background: `hsl(${num}, 50%, 50%)`,
            }}
          />
        ))}
    </ColorTrack>
  );
};

export default ColorSelector;
