'use client'

import { TabsContext } from "@/src/features/tabs/hooks/useTabs";
import { useState } from "react";

interface TabsProps {
    children: React.ReactNode;
    defaultValue: string;
  }
  
  export function Tabs({ children, defaultValue }: TabsProps) {
    const [selectedTab, setSelectedTab] = useState(defaultValue);
  
    return (
      <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
        <div className="">
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
  