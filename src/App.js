import React from 'react';

// get name from resource
const getPatientName = (name = [] ) => {
  const entry = name.find(n => n.use === 'official') || name[0];
  return entry ? `${entry.given.join(' ')} ${entry.family}` : 'No name';
};

const App = ({ patient }) => {
  return (
    <div >
      <h1> {getPatientName(patient.name)} </h1>
    </div>
  );
}

export default App;
