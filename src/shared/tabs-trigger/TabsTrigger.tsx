import { useTabs } from "@/src/features/tabs/hooks/useTabs";

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

export function TabsTrigger({ value, children }: TabsTriggerProps) {
  const { selectedTab, setSelectedTab } = useTabs();

  return (
    <button
      onClick={() => setSelectedTab(value)}
      className={`border border-[#929292] rounded-full font-bold lg:text-xl text-md mt-4 px-16 py-2 flex justify-center transform transition-transform duration-300 hover:scale-105 ${
        selectedTab === value ? " text-white" : "bg-gray-200 text-black"
      }`}
    >
      {children}
    </button>
  );
}