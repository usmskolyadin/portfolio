interface TabsListProps {
  children: React.ReactNode;
}
export function TabsList({ children }: TabsListProps) {
  return <div className="flex gap-4 pb-2">{children}</div>;
}

