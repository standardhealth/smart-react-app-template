import React, { FC, useState, useEffect } from 'react';

import Header from 'components/Header';
import Navigation from 'components/Navigation';

import logo from '../logo.svg';
import { getPatientRecord } from '../utils/fhirExtract';
import { FHIRClientProvider } from './FHIRClient';
import { PatientProvider } from './PatientProvider';
import PatientRecord from './PatientRecord/PatientRecord';
import config from 'utils/ConfigManager';

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
    <FHIRClientProvider client={client}>
      <PatientProvider>
        <div>
          <Header logo={logo} title={config.get('appName', 'SMART App')} />
          <Navigation />
        </div>

        <div>{`Fetched ${patientRecords.length} resources`}</div>
        <PatientRecord resources={patientRecords} />
      </PatientProvider>
    </FHIRClientProvider>
  );
};

export default App;
