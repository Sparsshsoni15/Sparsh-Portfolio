import { useEffect, useRef } from "react";

const stars = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  delay: `${Math.random() * 6}s`,
  duration: `${4 + Math.random() * 5}s`,
}));

export default function Background() {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      bgRef.current.style.setProperty("--mouse-x", `${x}`);
      bgRef.current.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={bgRef} className="portfolio-background">
      {/* Ambient glow */}
      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />
      <div className="ambient-glow glow-three" />

      {/* Smooth flowing waves */}
      <div className="wave wave-one" />
      <div className="wave wave-two" />
      <div className="wave wave-three" />

      {/* Stars */}
      <div className="stars">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Soft vignette */}
      <div className="background-vignette" />
    </div>
  );
}