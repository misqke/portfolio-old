import React, { useRef, useEffect } from "react";
import { Canvas } from "../../styles/components";
import { lightTheme, darkTheme } from "../../styles/themes";

const CanvasBG = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width =
        window.innerWidth > 1200
          ? window.innerWidth - 300
          : window.innerWidth > 800
          ? window.innerWidth - 250
          : window.innerWidth;
    };

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width =
      window.innerWidth > 1200
        ? window.innerWidth - 300
        : window.innerWidth > 800
        ? window.innerWidth - 250
        : window.innerWidth;

    ctx.fillStyle = theme === "light" ? lightTheme.bg : darkTheme.bg;
    ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return <Canvas ref={canvasRef}>Canvas</Canvas>;
};

export default CanvasBG;
