import React, { useRef, useEffect } from "react";

const Torch = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const torchImg = new Image();
    torchImg.src = "/spritesheet.png";
    canvas.width = window.innerWidth / 10 < 80 ? window.innerWidth / 10 : 80;
    canvas.height = canvas.width * 2;
    const handleResize = (e) => {
      canvas.width =
        e.target.innerWidth / 10 < 80 ? window.innerWidth / 10 : 80;
      canvas.height = canvas.width * 2;
    };
    window.addEventListener("resize", handleResize);
    const frameWidth = 16;
    const frameHeight = 32;
    const numFrames = 4;
    const slowFactor = 20;
    let gameFrame = 0;
    const animate = () => {
      const position = Math.floor(gameFrame / slowFactor) % numFrames;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        torchImg,
        position * frameWidth,
        0,
        frameWidth,
        frameHeight,
        0,
        0,
        canvas.width,
        canvas.height
      );
      if (position === 4) {
        gameFrame = 0;
      } else {
        gameFrame++;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef}>Torch</canvas>;
};

export default Torch;
