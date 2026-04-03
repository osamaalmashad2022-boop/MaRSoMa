import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const CosmicBackground = () => {
  const stars = useMemo<Star[]>(() => {
    const colors = [
      "hsl(262 83% 58% / 0.3)",
      "hsl(187 92% 42% / 0.3)",
      "hsl(217 91% 60% / 0.3)",
      "hsl(152 69% 41% / 0.25)",
      "hsl(262 83% 68% / 0.2)",
    ];
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 3,
      color: colors[i % colors.length],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 cosmic-mesh" />

      {/* Animated orbs */}
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, hsl(262 83% 58% / 0.06), transparent 70%)",
          animationDuration: "12s",
        }}
      />
      <div
        className="absolute top-1/3 -left-48 h-[400px] w-[400px] rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, hsl(187 92% 42% / 0.06), transparent 70%)",
          animationDelay: "3s",
          animationDuration: "10s",
        }}
      />
      <div
        className="absolute bottom-10 right-1/3 h-[350px] w-[350px] rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, hsl(217 91% 60% / 0.05), transparent 70%)",
          animationDelay: "6s",
          animationDuration: "14s",
        }}
      />

      {/* Stars / Particles */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-star-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 cosmic-dot-pattern opacity-30" />
    </div>
  );
};

export default CosmicBackground;
