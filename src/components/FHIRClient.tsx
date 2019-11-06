import React, { FC, createContext, useContext, ReactNode } from 'react';

interface FHIRClientProviderProps {
  client: any; // TODO: fhirclient.Client
  children: ReactNode;
}

export const FHIRCLientContext = createContext(null);

export const FHIRCLientProvider: FC<FHIRClientProviderProps> = ({ client, children }) => (
  <FHIRCLientContext.Provider value={client}>{children}</FHIRCLientContext.Provider>
);

export const useFHIRClient = (): any => useContext(FHIRCLientContext);
