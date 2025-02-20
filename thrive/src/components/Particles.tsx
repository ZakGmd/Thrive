// ParticleImage.tsx
import React, { useEffect, useRef } from 'react';

interface ParticleImageProps {
  imageUrl: string;
  width?: number;
  height?: number;
}

class Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  color: string;
  size: number;
  density: number;
  velocity: { x: number; y: number };

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.color = color;
    this.size = 1;
    this.density = (Math.random() * 30) + 1;
    this.velocity = { x: 0, y: 0 };
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouseX: number, mouseY: number, isHovering: boolean): void {
    if (isHovering) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = 100;
      const force = (maxDistance - distance) / maxDistance;

      if (distance < maxDistance) {
        this.velocity.x = -forceDirectionX * force * this.density * 0.5;
        this.velocity.y = -forceDirectionY * force * this.density * 0.5;
      }

      // Apply velocity with some friction
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.velocity.x *= 0.95;
      this.velocity.y *= 0.95;
    } else {
      // Return to base position when mouse leaves canvas
      const dx = this.baseX - this.x;
      const dy = this.baseY - this.y;
      this.x += dx * 0.1;
      this.y += dy * 0.1;
      this.velocity.x = 0;
      this.velocity.y = 0;
    }
  }
}

export const ParticleImage: React.FC<ParticleImageProps> = ({
  imageUrl,
  width = 400,
  height = 300
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const initImage = async () => {
      const img = new Image();
      img.src = imageUrl;
      
      await new Promise((resolve) => {
        img.onload = resolve;
      });

      // Draw initial image
      ctx.drawImage(img, 0, 0, width, height);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      
      // Create particles
      const particles: Particle[] = [];
      for (let y = 0; y < height; y += 4) {
        for (let x = 0; x < width; x += 4) {
          const index = (y * width + x) * 4;
          const alpha = pixels[index + 3];
          
          if (alpha > 128) {
            const red = pixels[index];
            const green = pixels[index + 1];
            const blue = pixels[index + 2];
            particles.push(
              new Particle(
                x,
                y,
                `rgb(${red},${green},${blue})`
              )
            );
          }
        }
      }
      
      particlesRef.current = particles;
      ctx.clearRect(0, 0, width, height);
      particles.forEach(particle => particle.draw(ctx));
    };

    initImage();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particlesRef.current.forEach(particle => {
        particle.update(mouseRef.current.x, mouseRef.current.y, mouseRef.current.isHovering);
        particle.draw(ctx);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imageUrl, width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="cursor-pointer -z-5"
    />
  );
};