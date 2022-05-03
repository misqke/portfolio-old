import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { torch, lightning } from "../../helpers/heroCanvas";

const HeroCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let fontSize =
      window.innerWidth > 1400
        ? 50
        : window.innerWidth > 1100
        ? 45
        : window.innerWidth > 700
        ? 40
        : window.innerWidth > 500
        ? 30
        : 22;

    const torchImage = new Image();
    torchImage.src = torch.src;

    const lightningImage = new Image();
    lightningImage.src = lightning.src;

    const mouse = { x: null, y: null };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      fontSize = Math.floor(
        window.innerWidth / window.innerWidth < 800 ? 20 : 40
      );
    };

    const handleMouseClick = (e) => {
      if (e.layerY > canvas.height) {
        return;
      }
      strikePos = { x: mouse.x - lightning.width / 2, y: mouse.y + 128 };
      lightningBolt.x = mouse.x;
      lightningBolt.y = 0;
      lightningBolt.speed = mouse.y / 16;
      lightningStrike();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleMouseClick);
    window.addEventListener("mousemove", handleMouseMove);

    let lightningFrame = 0;
    let strikePos = { x: 0, y: 0 };
    let lightningBolt = { x: 0, y: 0, radius: 50, speed: 50 };
    let torchFrame = 0;

    const lightningStrike = () => {
      let position =
        Math.floor(lightningFrame / lightning.slowFactor) % lightning.maxFrame;
      let frame = position;
      ctx.drawImage(
        lightningImage,
        lightning.width * frame,
        0,
        lightning.width,
        lightning.height,
        strikePos.x,
        -40,
        lightning.width,
        strikePos.y
      );

      if (frame < 7) {
        lightningFrame++;
        if (lightningBolt.y - lightningBolt.speed < strikePos.y - 128) {
          lightningBolt.y += lightningBolt.speed;
        }
        requestAnimationFrame(lightningStrike);
      } else {
        lightningFrame = 0;
        lightningBolt.y = 0;
      }
    };

    ctx.fillStyle = "#48b";
    ctx.font = `${fontSize}px Monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "Mike Rust",
      canvas.width / 4,
      canvas.height / 8 - fontSize / 2
    );
    ctx.fillText(
      "Web Developer",
      canvas.width / 4,
      canvas.height / 8 + fontSize / 2
    );
    const textCoordinates = ctx.getImageData(
      0,
      0,
      canvas.width / 2,
      canvas.height / 2
    );
    let particleArray = [];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 1.25;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 50 + 50;
        this.color = "#48b";
      }
      // give particles a draw method
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      // update particles
      update() {
        let dx = lightningBolt.x - this.x;
        let dy = lightningBolt.y - this.y;
        let distance = Math.hypot(dx, dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = lightningBolt.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        if (distance < lightningBolt.radius) {
          this.x -= directionX;
          this.y -= directionY;
          this.color = "#4b8";
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 50;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 50;
          }
          if (this.x - this.baseX < 1 && this.y - this.baseY < 1) {
            this.color = "#48b";
          }
        }
      }
    }

    const init = () => {
      particleArray = [];

      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (
            textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] >
            128
          ) {
            let positionX = x;
            let positionY = y;
            particleArray.push(new Particle(positionX * 2, positionY * 2));
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let position = Math.floor(torchFrame / torch.slowFactor) % torch.maxFrame;
      let frame = torch.width * position;
      ctx.drawImage(
        torchImage,
        frame,
        0,
        torch.width,
        torch.height,
        canvas.width * (4 / 5) - torch.width * (torch.sizeMultiplier / 2),
        canvas.height / 2,
        torch.width * torch.sizeMultiplier,
        torch.height * torch.sizeMultiplier
      );
      ctx.drawImage(
        torchImage,
        frame,
        0,
        torch.width,
        torch.height,
        canvas.width * (1 / 5) - torch.width * (torch.sizeMultiplier / 2),
        canvas.height / 2,
        torch.width * torch.sizeMultiplier,
        torch.height * torch.sizeMultiplier
      );
      torchFrame++;
      particleArray.forEach((particle) => {
        particle.draw();
        particle.update();
      });
      // connect();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <Canvas ref={canvasRef}></Canvas>;
};

export default HeroCanvas;

const Canvas = styled.canvas`
  background: #111;
  width: 100%;
  height: 100%;
  margin: auto;
`;
