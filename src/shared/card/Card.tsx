export function Card({ children }: { children: React.ReactNode }) {
    return <div className="rounded-3xl shadow-sm p-4 bg-black">{children}</div>;
  }