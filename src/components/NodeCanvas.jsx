import { useEffect, useRef } from "react";

export default function NodeCanvas() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;

    let height = canvas.height = 500;

    const particles = [];

    for (let i = 0; i < 70; i++) {

      particles.push({

        x: Math.random() * width,

        y: Math.random() * height,

        dx: (Math.random() - 0.5),

        dy: (Math.random() - 0.5),

      });

    }

    function animate() {

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {

        p.x += p.dx;

        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#2563eb";
        ctx.fill();

      });

      requestAnimationFrame(animate);

    }

    animate();

    const resize = () => {

      width = canvas.width = window.innerWidth;

      height = canvas.height = 500;

    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
    />
  );
}