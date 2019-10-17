import React from 'react';
import Header from "./Header";

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
      <Header/>
      <h1> {getPatientName(patient.name)} </h1>
    </div>
  );
}

export default App;
