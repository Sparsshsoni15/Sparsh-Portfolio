import { motion } from "motion/react";

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]">

      {/* Purple moving glow */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full bg-purple-600/30 blur-[120px]"
        style={{ left: "-10%", top: "5%" }}
        animate={{
          x: [0, 180, 80, 0],
          y: [0, 100, 220, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue moving glow */}
      <motion.div
        className="absolute h-[550px] w-[550px] rounded-full bg-blue-500/25 blur-[130px]"
        style={{ right: "-10%", top: "25%" }}
        animate={{
          x: [0, -180, -70, 0],
          y: [0, 120, -100, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Violet center glow */}
      <motion.div
        className="absolute h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-[120px]"
        style={{ left: "40%", top: "45%" }}
        animate={{
          x: [-100, 100, -50, -100],
          y: [50, -100, 80, 50],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 30 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-white/50"
          style={{
            left: `${(index * 31) % 100}%`,
            top: `${(index * 47) % 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + (index % 4),
            repeat: Infinity,
            delay: index * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Dark vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.65)_100%)]" />
    </div>
  );
}

export default Background;