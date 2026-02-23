export default function ElectricLines() {
  return (
    <div className="fixed inset-0 lg:mt-32 pointer-events-none z-0">
      <svg 
        className="w-full h-full"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="emeraldImpulse" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#022C22" stopOpacity="0" />
            <stop offset="35%" stopColor="#059669" stopOpacity="1" />
            <stop offset="55%" stopColor="#34D399" stopOpacity="1" />
            <stop offset="65%" stopColor="#6EE7B7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#022C22" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[
          "M -200 120 C 200 80, 400 160, 800 120 S 1400 160, 1600 120",
          "M -200 240 C 250 200, 450 300, 850 240 S 1400 280, 1600 240",
          "M -200 360 C 300 340, 500 420, 900 360 S 1400 400, 1600 360",
        ].map((path, i) => (
          <g key={i}>
            <path
              d={path}
              stroke="rgba(148,163,184,0.25)"
              strokeWidth="1"
            />

            <path
              d={path}
              stroke="url(#emeraldImpulse)"
              strokeWidth="2.2"
              strokeLinecap="round"
              className={`impulse impulse-${i}`}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
