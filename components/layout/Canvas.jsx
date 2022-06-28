import React, { useRef, useEffect } from "react";
import { Canvas } from "../../styles/components";
import { lightTheme, darkTheme } from "../../styles/themes";

const CanvasBG = ({ theme, mode }) => {
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

    class Particle {
      constructor() {
        this.size = 3;
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.height);
        this.velocity = Math.random() * 3 + 1;
        this.dirX = Math.random() > 0.5 ? 1 : -1;
        this.dirY = Math.random() > 0.5 ? 1 : -1;
        this.opacity = 1;
      }
      draw() {
        ctx.fillStyle =
          theme === "light"
            ? `hsla(199, 50%, 80%, ${this.opacity})`
            : `hsla(199, 60%, 12%, ${this.opacity})`;
        ctx.opacity = this.opactity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
        ctx.fill();
      }
      bounce() {
        if (this.x >= canvas.width || this.x <= 0) {
          this.dirX *= -1;
        }
        if (this.y >= canvas.height || this.y <= 0) {
          this.dirY *= -1;
        }
        this.x += this.velocity * this.dirX;
        this.y += this.velocity * this.dirY;

        this.draw();
      }
      pop() {
        if (this.opacity <= 0) {
          this.size = 1;
          this.opacity = 1;
          this.x = Math.floor(Math.random() * canvas.width);
          this.y = Math.floor(Math.random() * canvas.height);
        } else {
          this.size += 0.25;
          this.opacity -= this.velocity / 200;
        }

        this.draw();
      }
      follow() {}
    }

    const particles = [];
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle());
    }

    particles.forEach((particle) => {
      particle.draw();
    });

    const runAnimation = () => {
      ctx.fillStyle = "transparent";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        if (mode === "bounce") {
          particle.bounce();
        } else if (mode === "pop") {
          particle.pop();
        }
      });
      requestAnimationFrame(runAnimation);
    };

    window.requestAnimationFrame(runAnimation);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme, mode]);

  return <Canvas ref={canvasRef}>Canvas</Canvas>;
};

export default CanvasBG;
