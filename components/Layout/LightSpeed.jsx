import React, { useRef, useEffect } from "react";

const LightSpeed = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let NUM_STARS = canvas.width / 7;
    const STAR_SIZE = 1;
    const STAR_COLOR = "#eeeecc";

    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      NUM_STARS = canvas.width / 7;
    };

    window.addEventListener("resize", handleResize);

    const CENTER = { x: canvas.width / 2, y: canvas.height / 2 };
    const MIN_DISTANCE = 10;

    const calculateX = (r, a) => {
      return r * Math.sin(a) + CENTER.x;
    };
    const calculateY = (r, a) => {
      return r * Math.cos(a) + CENTER.y;
    };

    class Star {
      constructor() {
        this.size = STAR_SIZE;
        this.color = STAR_COLOR;
        this.distance = MIN_DISTANCE;
        this.angle = Math.random() * 360;
        this.pos = {
          x: calculateX(this.distance, this.angle),
          y: calculateY(this.distance, this.angle),
        };
        this.speed = Math.random() * 2 + 10;
      }
      draw() {
        ctx.fillStyle = "#eeeecc77";
        ctx.strokeStyle = this.color;
        ctx.shadowColor = "#eeeecc";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2, true);
        ctx.fill();
      }
      animate() {
        if (
          this.pos.x + this.size > canvas.width ||
          this.pos.x + this.size < 0 ||
          this.pos.y + this.size > canvas.height ||
          this.pos.y + this.size < 0
        ) {
          this.size = STAR_SIZE;
          this.angle = Math.random() * 360;
          this.distance = MIN_DISTANCE;
          this.speed = Math.random() * 2 + 2;
        } else {
          this.distance = this.distance + this.speed;
        }
        this.size += 0.025;
        if (this.speed > 2) this.speed -= 0.002;
        this.pos.x = calculateX(this.distance, this.angle);
        this.pos.y = calculateY(this.distance, this.angle);
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
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default LightSpeed;
