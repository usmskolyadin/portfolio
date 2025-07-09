export function Card({ children }: { children: React.ReactNode }) {
    return <div className="rounded-3xl shadow-sm  border border-1 border-[#929292] bg-transperent backdrop-blur-xl backdrop-blur-md">{children}</div>;
  }