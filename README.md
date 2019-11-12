# SMART on FHIR React Template [![Build Status](https://travis-ci.com/standardhealth/smart-react-app-template.svg?branch=master)](https://travis-ci.com/standardhealth/smart-react-app-template)

This project is meant to be a template for a minimal SMART on FHIR React application. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has installed the `fhirclient` library to facilitate the SMART authorization process and interactions with the EHR.

The rest of your application can be built out in `App.js` and beyond.  If additional FHIR resources are needed it can fetched in `index.js` by making a call using `client.request()` and passed down to `App.js`.

## Testing with a launcher

1. Run `yarn install` to install the necessary packages.
2. Run `yarn start` to start the application.
3. Launch the application from the SMART launcher.
    - Visit [SMART Launcher](http://launch.smarthealthit.org)
    - Launch `http://localhost:3000`
    - Select a practitioner and a patient
    - Page will load with name of selected patient displayed.
    
## Running tests

Tests can be run by executing:
```shell script
yarn test
```

## Running the code linter

Code liniting can be run by executing:

```shell script
yarn lint
```

Some issues can be automatically corrected with:

```shell script
yarn lint-fix
```
