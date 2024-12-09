"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the context type
interface AppContextType {
  detail: string | null;
  setDetail: (detail: string | null) => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [detail, setDetail] = useState<string | null>(null);
  return <AppContext.Provider value={{ detail, setDetail }}>{children}</AppContext.Provider>;
};

// Custom hook for using the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
