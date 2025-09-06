//components/TiltCard.tsx

"use client";

import { useRef, MouseEvent } from "react";

interface TiltCardProps {
  title: string;
  description: string;
  gradient: string;
}

export default function TiltCard({ title, description, gradient }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`w-80 h-48 rounded-xl shadow-lg transition-transform duration-200 ease-out cursor-pointer p-6 flex flex-col justify-between ${gradient}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <h2 className="text-white text-2xl font-bold">{title}</h2>
      <p className="text-white/80">{description}</p>
    </div>
  );
}

