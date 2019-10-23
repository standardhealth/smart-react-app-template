import React from 'react';
import ReactDOM from 'react-dom';
import FHIR from 'fhirclient';
import './index.css';
import App from './App';
const rootElement = document.getElementById('root');

const smartLaunch= () => {
  // Authorize application
  FHIR.oauth2.init({
    clientId: 'Input client id you get when you register the app',
    scope: 'launch/patient openid profile'
  }).then((client) => {
    // Fetch selected patient resource and render
    client.patient.read().then((patient) => {
        ReactDOM.render(<App patient={patient} client = {client} />, rootElement);
    }, (error) => {
      console.error(error);
      ReactDOM.render(<p> {error.stack} </p>, rootElement);
    });
  });
};

smartLaunch();
