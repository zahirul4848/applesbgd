"use client";

import { createContext, useContext, useState } from "react";
import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: SectionName | string;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName | string>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({children}: {children: React.ReactNode}) => {
  const [activeSection, setActiveSection] = useState<SectionName | string>("");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}


export default ActiveSectionContextProvider;


export const useActiveSectionContext = ()=> {
  const context = useContext(ActiveSectionContext);
  if(context === null) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");
  }
  return context;
}