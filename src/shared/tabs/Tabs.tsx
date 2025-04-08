'use client'

import { TabsContext } from "@/src/features/tabs/hooks/useTabs";
import { useState } from "react";

interface TabsProps {
    children: React.ReactNode;
    defaultValue: string;
    className?: string;
}

export function Tabs({ children, defaultValue, className }: TabsProps) {
    const [selectedTab, setSelectedTab] = useState(defaultValue);

    return (
        <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
            <div className={className}>
                {children}
            </div>
        </TabsContext.Provider>
    );
}