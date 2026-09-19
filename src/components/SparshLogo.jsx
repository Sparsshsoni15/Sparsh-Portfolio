import logoMask from "../assets/sparsh-logo-theme-mask.png";

function SparshLogo({ className = "" }) {
  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      aria-label="Sparsh Soni Logo"
      role="img"
    >
      {/* Theme-colored logo */}
      <span
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              var(--theme-primary) 0%,
              var(--theme-secondary) 48%,
              var(--theme-primary) 100%
            )
          `,
          WebkitMaskImage: `url(${logoMask})`,
          maskImage: `url(${logoMask})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />

      {/* Very subtle theme glow */}
      <span
        className="absolute inset-0 opacity-30 blur-[5px]"
        style={{
          background: "var(--theme-primary)",
          WebkitMaskImage: `url(${logoMask})`,
          maskImage: `url(${logoMask})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    </span>
  );
}

export default SparshLogo;