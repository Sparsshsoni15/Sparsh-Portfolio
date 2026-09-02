function Background() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{
        zIndex: 0,
        background: "#020205",
      }}
    >
      {/* Purple glow - LEFT */}
      <div
        className="absolute rounded-full"
        style={{
          width: "650px",
          height: "650px",
          left: "-250px",
          top: "5%",
          background: "rgba(139, 92, 246, 0.35)",
          filter: "blur(130px)",
          animation: "purpleMove 12s ease-in-out infinite",
        }}
      />

      {/* Blue glow - RIGHT */}
      <div
        className="absolute rounded-full"
        style={{
          width: "650px",
          height: "650px",
          right: "-250px",
          bottom: "0",
          background: "rgba(37, 99, 235, 0.30)",
          filter: "blur(140px)",
          animation: "blueMove 15s ease-in-out infinite",
        }}
      />

      {/* Purple center glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          left: "35%",
          top: "30%",
          background: "rgba(168, 85, 247, 0.16)",
          filter: "blur(140px)",
          animation: "centerMove 10s ease-in-out infinite",
        }}
      />

      {/* Futuristic grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 85%)",
        }}
      />

      {/* Moving particles */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.55,
          backgroundImage: `
            radial-gradient(circle, rgba(168,85,247,0.9) 1px, transparent 1px),
            radial-gradient(circle, rgba(59,130,246,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 160px 160px",
          backgroundPosition: "20px 20px, 80px 100px",
          animation: "particlesMove 25s linear infinite",
        }}
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Animations */}
      <style>
        {`
          @keyframes purpleMove {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }

            50% {
              transform: translate(180px, 80px) scale(1.2);
            }
          }

          @keyframes blueMove {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }

            50% {
              transform: translate(-160px, -100px) scale(1.2);
            }
          }

          @keyframes centerMove {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }

            50% {
              transform: translate(-80px, 70px) scale(1.25);
            }
          }

          @keyframes particlesMove {
            0% {
              transform: translate(0, 0);
            }

            50% {
              transform: translate(-50px, -80px);
            }

            100% {
              transform: translate(0, 0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Background;