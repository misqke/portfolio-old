import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/HeroCanvas.module.scss";

const HeroCanvas = () => {
  const [play, setPlay] = useState(false);
  const [cancel, setCancel] = useState();
  const canvasRef = useRef();

  const handleClick = () => {
    if (play) {
      cancelAnimationFrame(cancel);
      setPlay(false);
    } else {
      setPlay(true);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 501;
    canvas.height = 735;
    const ctx = canvas.getContext("2d");

    const myImage = new Image();
    myImage.src = "/imgs/me3.png";

    myImage.onload = function () {
      ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
      if (play) {
        const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let particlesArray = [];
        const numberOfParticles = 1000;

        const calculateRelativeBrightness = (red, green, blue) => {
          return (
            Math.sqrt(
              red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
            ) / 100
          );
        };

        let mappedImage = [];
        for (let y = 0; y < canvas.height; y++) {
          let row = [];
          for (let x = 0; x < canvas.width; x++) {
            const red = pixels.data[y * 4 * pixels.width + x * 4];
            const green = pixels.data[y * 4 * pixels.width + x * 4 + 1];
            const blue = pixels.data[y * 4 * pixels.width + x * 4 + 2];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = {
              brightness,
              cellColor: `rgb(${red - 20}, ${green + 20}, ${blue + 30})`,
            };
            row.push(cell);
          }
          mappedImage.push(row);
        }

        class Particle {
          constructor() {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 2 + 4;
            this.pos2 = Math.floor(this.x);
            this.pos1 = Math.floor(this.y);
          }
          update() {
            this.pos2 = Math.floor(this.x);
            this.pos1 = Math.floor(this.y);
            this.speed = mappedImage[this.pos1][this.pos2].brightness;
            let movement = 3 - this.speed + this.velocity;

            this.y += movement / 2;
            // this.x += movement / 2;

            if (this.y >= canvas.height) {
              this.y = 0;
              this.x = Math.random() * canvas.width;
            }
            if (this.x >= canvas.width) {
              this.y = Math.random() * canvas.width;
              this.x = 0;
            }
          }
          draw() {
            ctx.beginPath();
            ctx.fillStyle = mappedImage[this.pos1][this.pos2].cellColor;
            // ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.rect(this.x, this.y, this.size, this.size);
            ctx.fill();
          }
        }

        const init = () => {
          for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
          }
        };

        init();

        const animate = () => {
          ctx.globalAlpha = 0.02;
          ctx.fillStyle = "rgb(0,0,0)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          // ctx.globalAlpha = 0.5;
          particlesArray.forEach((particle) => {
            particle.update();
            ctx.globalAlpha = particle.speed * 0.5;
            particle.draw();
          });
          const animation = requestAnimationFrame(animate);
          setCancel(animation);
        };

        animate();
      }
    };
  }, [play]);

  return (
    <canvas
      className={`${styles.container} ${play === false && styles.dull}`}
      onClick={handleClick}
      ref={canvasRef}
    ></canvas>
  );
};

export default HeroCanvas;
