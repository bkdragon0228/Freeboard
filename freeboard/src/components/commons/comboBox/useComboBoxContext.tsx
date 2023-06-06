import React from "react";

export interface ComboBoxContextProviderProps {
    handler : (value : string) => void;
    value : string;
}

const ComboBoxContext = React.createContext<ComboBoxContextProviderProps>(undefined);

function ComboBoxProvider({ children, value }) {
  return (
    <ComboBoxContext.Provider value={value}>{children}</ComboBoxContext.Provider>
  );
}

function useComboBoxContext() {
  const context = React.useContext(ComboBoxContext);
  if (context === undefined) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
}

export { ComboBoxProvider, useComboBoxContext };