import React, { FC, useState, useEffect } from 'react';

import Header from 'components/Header';
import Navigation from 'components/Navigation';

import logo from '../logo.svg';
import { getPatientRecord } from '../utils/fhirExtract';
import { FHIRCLientProvider } from './FHIRClient';
import { PatientProvider } from './PatientProvider';

interface AppProps {
  client: any; // TODO: fhirclient.Client
}

const App: FC<AppProps> = ({ client }) => {
  const [patientRecords, setPatientRecords] = useState<Array<any>>([]);

  useEffect(() => {
    getPatientRecord(client).then((records: Array<any>) => {
      setPatientRecords(records);
    });
  }, [client]);

  return (
    <FHIRCLientProvider client={client}>
      <PatientProvider>
        <div>
          <Header logo={logo} title="SMART App" />
          <Navigation />
        </div>

        <div>{`Fetched ${patientRecords.length} resources`}</div>
      </PatientProvider>
    </FHIRCLientProvider>
  );
};

export default App;
