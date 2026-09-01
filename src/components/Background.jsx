import { motion } from "motion/react";

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Purple ambient orb */}
      <motion.div
        className="absolute -left-32 top-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]"
        animate={{
          x: [0, 100, 40, 0],
          y: [0, 80, 160, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue ambient orb */}
      <motion.div
        className="absolute -right-40 top-[20%] h-[550px] w-[550px] rounded-full bg-blue-600/15 blur-[130px]"
        animate={{
          x: [0, -100, -40, 0],
          y: [0, 100, -50, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center glow */}
      <motion.div
        className="absolute left-[35%] top-[45%] h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[120px]"
        animate={{
          x: [-50, 80, -30, -50],
          y: [40, -60, 70, 40],
          opacity: [0.4, 0.7, 0.35, 0.4],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 35 }).map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/30"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.7, 0.15],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              delay: (index % 7) * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]" />

    </div>
  );
}

export default Background;