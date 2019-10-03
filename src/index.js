import React from 'react';
import ReactDOM from 'react-dom';
import FHIR from 'fhirclient';
import App from './App';

const rootElement = document.getElementById('root');

FHIR.oauth2.init({
    clientId: 'Input client id you get when you register the app',
    scope: 'launch/patient openid profile'
}).then((client) => {
    client.patient.read().then((patient) => {
        ReactDOM.render(<App patient={patient} />, rootElement);
    }, (error) => {
        console.error(error);
        ReactDOM.render(<p> {error.stack} </p>, rootElement);
    });
});
