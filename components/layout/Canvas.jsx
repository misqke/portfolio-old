import React, { useRef, useEffect } from "react";
import { Canvas } from "../../styles/components";

const CanvasBG = ({ theme, mode, hue }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width =
      window.innerWidth > 1200
        ? window.innerWidth - 300
        : window.innerWidth > 900
        ? window.innerWidth - 250
        : window.innerWidth;

    let numParticles =
      mode === "pop"
        ? canvas.width / 10
        : mode === "bounce"
        ? canvas.width / 7
        : mode === "rain"
        ? canvas.width / 3
        : 120;

    class Particle {
      constructor() {
        this.size = 1.5;
        this.x = Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.height);
        this.velocity = Math.random() * 3 + 1;
        this.dirX = Math.random() > 0.5 ? 1 : -1;
        this.dirY = Math.random() > 0.5 ? 1 : -1;
        this.opacity = 0.7;
      }
      draw() {
        ctx.fillStyle =
          theme === "light"
            ? `hsla(${hue}, 50%, 25%, ${this.opacity})`
            : `hsla(${hue}, 50%, 75%, ${this.opacity})`;
        ctx.opacity = this.opactity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, true);
        ctx.fill();
      }
      bounce() {
        this.size = 2;
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
          this.opacity = 0.7;
          this.x = Math.floor(Math.random() * canvas.width);
          this.y = Math.floor(Math.random() * canvas.height);
        } else {
          this.size += 0.25;
          this.opacity -= this.velocity / 200;
        }

        this.draw();
      }
      rain() {
        if (this.y >= canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        } else {
          this.y += (this.velocity + 2) * 2;
        }
        this.draw();
      }
    }

    class Square {
      constructor(delay) {
        this.width = canvas.width / 10;
        this.height = canvas.height / 10;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height / 2 - this.height / 2;
        this.ratio = canvas.height / canvas.width;
        this.delay = delay;
      }
      draw() {
        ctx.strokeStyle =
          theme === "light"
            ? `hsla(${hue}, 50%, 25%, .5)`
            : `hsl(${hue}, 50%, 75%, .5)`;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
      }
      grow() {
        this.width += 2;
        this.height = this.height + 2 * this.ratio;
        this.x -= 1;
        this.y = this.y - 1 * this.ratio;
        this.draw();
      }
    }

    if (mode === "squares") {
      const newSquare = new Square();
      let squaresArr = [newSquare];
      squaresArr.forEach((s) => {
        s.draw();
      });
      let frame = 0;
      const runSquareAnim = () => {
        if (mode === "none") {
          cancelAnimationFrame(squareAnimId);
        }
        const squaresArrClone = [...squaresArr];
        for (let i = 0; i < squaresArrClone.length; i++) {
          if (
            squaresArrClone[i].width > canvas.width &&
            squaresArrClone[i].height > canvas.height
          ) {
            squaresArr.shift();
          } else {
            break;
          }
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (frame % 30 === 0) {
          squaresArr.push(new Square());
        }
        squaresArr.forEach((s) => {
          s.grow();
        });
        frame++;
        const squareAnimId = requestAnimationFrame(runSquareAnim);
      };

      runSquareAnim();
    } else {
      const particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }

      particles.forEach((particle) => {
        particle.draw();
      });

      const runAnimation = () => {
        if (mode === "none") {
          cancelAnimationFrame(animID);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle) => {
          if (mode === "bounce") {
            particle.bounce();
          } else if (mode === "pop") {
            particle.pop();
          } else if (mode === "rain") {
            particle.rain();
          }
        });
        const animID = requestAnimationFrame(runAnimation);
      };

      runAnimation();
    }

    const handleResize = () => {
      canvas.height = window.innerHeight;
      canvas.width =
        window.innerWidth > 1200
          ? window.innerWidth - 300
          : window.innerWidth > 900
          ? window.innerWidth - 250
          : window.innerWidth;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme, mode, hue]);

  return <Canvas ref={canvasRef}>Canvas</Canvas>;
};

export default CanvasBG;
