import React, { FC, createContext, useContext, ReactNode } from 'react';

interface FHIRClientProviderProps {
  client: any; // TODO: fhirclient.Client
  children: ReactNode;
}

export const FHIRClientContext = createContext(null);

export const FHIRClientProvider: FC<FHIRClientProviderProps> = ({ client, children }) => (
  <FHIRClientContext.Provider value={client}>{children}</FHIRClientContext.Provider>
);

export const useFHIRClient = (): any => useContext(FHIRClientContext);
