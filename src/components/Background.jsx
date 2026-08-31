import { motion } from "motion/react";

const particles = Array.from({ length: 35 }, (_, index) => ({
  id: index,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: `${Math.random() * 3 + 1}px`,
  duration: `${Math.random() * 4 + 3}s`,
  delay: `${Math.random() * 3}s`,
}));

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* Purple glow */}
      <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-purple-700/20 blur-[140px]" />

      {/* Blue glow */}
      <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[150px]" />

      {/* Bottom purple glow */}
      <div className="absolute bottom-[-300px] left-[-200px] h-[600px] w-[600px] rounded-full bg-violet-700/10 blur-[160px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 30%, black 80%, transparent 100%)",
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/50"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.15, 0.7, 0.15],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: Number(particle.duration.replace("s", "")),
            delay: Number(particle.delay.replace("s", "")),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050507_90%)]" />
    </div>
  );
}

export default Background;