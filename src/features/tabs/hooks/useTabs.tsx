import { createContext, useContext } from "react";

export const TabsContext = createContext<{ selectedTab: string; setSelectedTab: (value: string) => void } | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a <Tabs> component");
  }
  return context;
}
