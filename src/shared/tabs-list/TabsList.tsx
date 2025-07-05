interface TabsListProps {
  children: React.ReactNode;
}
export function TabsList({ children }: TabsListProps) {
  return <div className="flex grid lg:gap-4 gap-2 lg:grid-cols-4 grid-cols-2">{children}</div>;
}

