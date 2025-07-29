import React, { createContext, useContext } from 'react';
import { useNetworkStatus } from './hooks/useNetworkStatus';


// 1. Create the context
const NetworkContext = createContext();

// 2. Create the Provider component
export const NetworkProvider = ({ children }) => {
  const isOnline = useNetworkStatus();

  return (
    <NetworkContext.Provider value={isOnline}>
      {children}
    </NetworkContext.Provider>
  );
};

// 3. Create a custom hook to easily consume the context
export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (context === undefined) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
};