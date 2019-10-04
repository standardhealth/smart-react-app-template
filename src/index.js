import React from 'react';
import ReactDOM from 'react-dom';
import FHIR from 'fhirclient';
import App from './App';

const rootElement = document.getElementById('root');

// Authorize application
FHIR.oauth2.init({
    clientId: 'Input client id you get when you register the app',
    scope: 'launch/patient openid profile'
}).then((client) => {
    // Fetch selected patient resource and render
    client.patient.read().then((patient) => {
        ReactDOM.render(<App patient={patient} />, rootElement);
    }, (error) => {
        console.error(error);
        ReactDOM.render(<p> {error.stack} </p>, rootElement);
    });
});
