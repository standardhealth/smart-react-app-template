import React from 'react';
import Header from "./Header";
import Navigation from "./Navigation";

// get name from resource
const getPatientName = (name = [] ) => {
  const entry = name.find(n => n.use === 'official') || name[0];
  return entry ? `${entry.given.join(' ')} ${entry.family}` : 'No name';
};

const App = ({ patient }) => {
  return (
    <div >
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"/>
      <Header title='SMART App'/>
      <Navigation name={getPatientName(patient.name)}
                  birthDate={patient.birthDate}
                  gender={patient.gender}
                  address={patient.address} />
    </div>
  );
};

export default App;
