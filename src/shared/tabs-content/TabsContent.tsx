import { useTabs } from "@/src/features/tabs/hooks/useTabs";

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export function TabsContent({ value, children }: TabsContentProps) {
  const { selectedTab } = useTabs();
  return selectedTab === value ? <div className="mt-4">{children}</div> : null;
}
