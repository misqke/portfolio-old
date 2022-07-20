import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const LightSpeed = () => {
  const canvasRef = useRef(null);
  const transition = useSelector((state) => state.transition.active);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const NUM_STARS = (canvas.width * canvas.height) / 2000;
    const STAR_SIZE = 1;
    const STAR_COLOR = "#eeeecc";

    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };

    window.addEventListener("resize", handleResize);

    const minMovementX = canvas.width / 10;
    const minMovementY = canvas.height / 10;

    const CENTER = { x: canvas.width / 2, y: canvas.height / 2 };

    const generateStartingPoint = () => {
      const primaryDir = Math.random() < 0.5 ? "x" : "y";
      const dirX = Math.random() < 0.5 ? 1 : -1;
      const dirY = Math.random() < 0.5 ? 1 : -1;
      if (primaryDir === "x") {
        const x =
          CENTER.x +
          (Math.random() * (CENTER.x - minMovementX) + minMovementX) * dirX;
        const y = CENTER.y + Math.random() * CENTER.y * dirY;
        return { x, y };
      } else if (primaryDir === "y") {
        const x = CENTER.x + Math.random() * CENTER.x * dirX;
        const y =
          CENTER.y +
          (Math.random() * (CENTER.y - minMovementY) + minMovementY) * dirY;
        return { x, y };
      }
    };

    class Star {
      constructor() {
        this.size = STAR_SIZE;
        this.opacity = Number(Math.random().toString().slice(0, 3));
        this.color = STAR_COLOR;
        this.startPos = generateStartingPoint();
        this.pos = { ...this.startPos };
        this.dirX = this.startPos.x >= canvas.width / 2 ? 1 : -1;
        this.dirY = this.startPos.y >= canvas.height / 2 ? 1 : -1;
        this.velY = this.startPos.y - CENTER.y;
        this.velX = this.startPos.x - CENTER.x;
        this.dulling = this.opacity >= 70 ? true : false;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(
          this.startPos.x,
          this.startPos.y,
          this.size,
          0,
          Math.PI * 2,
          true
        );
        ctx.fill();

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size * 2;
        ctx.beginPath();
        ctx.moveTo(this.startPos.x, this.startPos.y);
        ctx.lineTo(this.pos.x, this.pos.y);
        ctx.stroke();
      }
      animate() {
        if (transition) {
          if (this.size < 3) {
            this.size += 0.25;
          }
          if (this.opacity < 1) {
            this.opacity += 0.5;
          }
          if (
            this.pos.x > 0 &&
            this.pos.x < canvas.width &&
            this.pos.y > 0 &&
            this.pos.y < canvas.height
          ) {
            this.pos.x += this.velX / 5;
            this.pos.y += this.velY / 5;
          }
        } else {
          if (this.opacity >= 1) {
            this.dulling = true;
          }
          if (this.opacity <= 0.2) {
            this.dulling = false;
          }
          if (this.dulling) {
            this.opacity -= 0.025;
          } else {
            this.opacity += 0.025;
          }
        }
        this.draw();
      }
    }

    const starsArr = [];

    for (let i = 0; i < NUM_STARS; i++) {
      starsArr.push(new Star());
    }

    starsArr.forEach((star) => {
      star.draw();
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsArr.forEach((star) => {
        star.animate();
      });
      const animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [transition]);

  return <canvas ref={canvasRef}></canvas>;
};

export default LightSpeed;
