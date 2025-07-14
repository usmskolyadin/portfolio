"use client";

const Circles = () => {
  const texts = [
    "BEATS",
    "M&M",
    "WORK TOGETHER",
    "SITE FOR UR BRAND",
    "LUV U ALL",
    "SPACY?",
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => {
        const randomText = texts[Math.floor(Math.random() * texts.length)];

        return (
          <span
            key={i}
            className="absolute  opacity-40 text-white blur-sm select-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
            }}
          >
            <h1 className="font-benzin font-bold text-4xl lg:text-5xl">
            {randomText}

            </h1>
          </span>
        );
      })}
    </div>
  );
};

export default Circles;
