import "./Background.css";

function Background() {
  return (
    <div className="portfolio-background" aria-hidden="true">
      {/* Ambient glows */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      {/* Stars */}
      <div className="stars">
        <span style={{ left: "4%", top: "13%", animationDelay: "0s" }} />
        <span style={{ left: "15%", top: "28%", animationDelay: "1.2s" }} />
        <span style={{ left: "23%", top: "17%", animationDelay: "2.4s" }} />
        <span style={{ left: "31%", top: "38%", animationDelay: "0.7s" }} />
        <span style={{ left: "41%", top: "21%", animationDelay: "1.8s" }} />
        <span style={{ left: "49%", top: "14%", animationDelay: "2.8s" }} />
        <span style={{ left: "58%", top: "30%", animationDelay: "0.5s" }} />
        <span style={{ left: "66%", top: "18%", animationDelay: "1.5s" }} />
        <span style={{ left: "73%", top: "35%", animationDelay: "2.2s" }} />
        <span style={{ left: "82%", top: "16%", animationDelay: "0.9s" }} />
        <span style={{ left: "91%", top: "28%", animationDelay: "2.6s" }} />

        <span style={{ left: "8%", top: "52%", animationDelay: "1.1s" }} />
        <span style={{ left: "19%", top: "67%", animationDelay: "2.1s" }} />
        <span style={{ left: "35%", top: "58%", animationDelay: "0.3s" }} />
        <span style={{ left: "46%", top: "72%", animationDelay: "1.7s" }} />
        <span style={{ left: "61%", top: "61%", animationDelay: "2.9s" }} />
        <span style={{ left: "78%", top: "70%", animationDelay: "0.8s" }} />
        <span style={{ left: "94%", top: "58%", animationDelay: "2s" }} />

        <span style={{ left: "13%", top: "87%", animationDelay: "1.4s" }} />
        <span style={{ left: "29%", top: "82%", animationDelay: "2.7s" }} />
        <span style={{ left: "52%", top: "91%", animationDelay: "0.6s" }} />
        <span style={{ left: "69%", top: "84%", animationDelay: "1.9s" }} />
        <span style={{ left: "88%", top: "91%", animationDelay: "2.5s" }} />
      </div>

      {/* Flowing dotted waves */}
      <svg
        className="wave-svg"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wavePurple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3154ff" />
            <stop offset="45%" stopColor="#7048ff" />
            <stop offset="75%" stopColor="#a04cff" />
            <stop offset="100%" stopColor="#3154ff" />
          </linearGradient>

          <linearGradient id="waveBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#273fff" />
            <stop offset="50%" stopColor="#586eff" />
            <stop offset="100%" stopColor="#8b4dff" />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        {/* BACK GLOW WAVE */}
        <g className="wave wave-back">
          <path
            d="M-100 250 C180 80 300 430 570 250 C820 80 910 390 1160 260 C1360 150 1470 300 1700 130"
            fill="none"
            stroke="url(#wavePurple)"
            strokeWidth="100"
            opacity="0.08"
            filter="url(#softGlow)"
          />

          <path
            d="M-100 250 C180 80 300 430 570 250 C820 80 910 390 1160 260 C1360 150 1470 300 1700 130"
            fill="none"
            stroke="url(#wavePurple)"
            strokeWidth="2"
            strokeDasharray="1 13"
            strokeLinecap="round"
            opacity="0.35"
          />
        </g>

        {/* MIDDLE WAVE */}
        <g className="wave wave-middle">
          <path
            d="M-150 530 C120 380 270 690 520 520 C790 340 900 670 1150 500 C1370 350 1500 580 1750 390"
            fill="none"
            stroke="url(#waveBlue)"
            strokeWidth="110"
            opacity="0.08"
            filter="url(#softGlow)"
          />

          <path
            d="M-150 530 C120 380 270 690 520 520 C790 340 900 670 1150 500 C1370 350 1500 580 1750 390"
            fill="none"
            stroke="url(#waveBlue)"
            strokeWidth="2"
            strokeDasharray="1 11"
            strokeLinecap="round"
            opacity="0.48"
          />

          <path
            d="M-150 550 C120 400 270 710 520 540 C790 360 900 690 1150 520 C1370 370 1500 600 1750 410"
            fill="none"
            stroke="url(#wavePurple)"
            strokeWidth="1"
            strokeDasharray="1 15"
            strokeLinecap="round"
            opacity="0.35"
          />
        </g>

        {/* FRONT WAVE */}
        <g className="wave wave-front">
          <path
            d="M-120 790 C170 590 300 940 580 760 C850 580 960 900 1200 730 C1410 590 1530 790 1720 650"
            fill="none"
            stroke="url(#wavePurple)"
            strokeWidth="140"
            opacity="0.10"
            filter="url(#softGlow)"
          />

          <path
            d="M-120 790 C170 590 300 940 580 760 C850 580 960 900 1200 730 C1410 590 1530 790 1720 650"
            fill="none"
            stroke="url(#wavePurple)"
            strokeWidth="2.5"
            strokeDasharray="1 10"
            strokeLinecap="round"
            opacity="0.60"
          />

          <path
            d="M-100 820 C170 620 310 960 590 790 C860 610 970 920 1210 760 C1410 620 1540 820 1730 680"
            fill="none"
            stroke="url(#waveBlue)"
            strokeWidth="1"
            strokeDasharray="1 14"
            strokeLinecap="round"
            opacity="0.35"
          />
        </g>
      </svg>
    </div>
  );
}

export default Background;