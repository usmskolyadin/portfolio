"use client";

const Circles = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {Array.from({ length: 5 }).map((_, i) => (
            <div
                key={i}
                className="absolute w-64 h-64 bg-emerald-600 rounded-full opacity-40 blur-3xl"
                style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `translate(-50%, -50%)`,
                }}
            />
            ))}
      </div>
    )
}

export default Circles