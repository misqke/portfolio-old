import React, { useEffect, useRef } from "react";
import { ImageContainer } from "../../styles/components";
import { Canvas } from "../../styles/components";

const Portrait = ({ size }) => {
  const canvasRef = useRef();

  const canvasSize = size - 125;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = "/me.png";
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    const imageWidth = 501;
    const imageHeight = 766;

    const ratio = canvasSize / imageHeight;
    const newWidth = imageWidth * ratio;
    const newHeight = imageHeight * ratio;

    image.onload = () => {
      ctx.drawImage(
        image,
        0,
        0,
        imageWidth,
        imageHeight,
        (canvasSize - newWidth) / 2,
        0,
        newWidth,
        newHeight
      );
    };
  }, [canvasSize]);

  return <canvas ref={canvasRef}></canvas>;
};

export default Portrait;
