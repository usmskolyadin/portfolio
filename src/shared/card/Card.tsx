export function Card({ children }: { children: React.ReactNode }) {
    return <div className="rounded-4xl border border-white/20 bg-white/5 backdrop-blur-md rounded-[50px]">{children}</div>;
  }