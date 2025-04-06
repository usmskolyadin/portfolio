export function Card({ children }: { children: React.ReactNode }) {
    return <div className="rounded-3xl shadow-sm p-4 border border-1 border-[#929292] bg-transperent backdrop-blur-md">{children}</div>;
  }