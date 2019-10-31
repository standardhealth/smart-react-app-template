import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faUserCircle,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

import Header from 'components/Header';
import Navigation from 'components/Navigation';
import logo from '../logo.svg';
import { getPatientRecord } from './util/fhir_extract';

// set up fontawesome library
library.add(
  fab,
  faUserCircle,
  faChevronLeft
);

// get name from resource
const getPatientName = (name = [] ) => {
  const entry = name.find(n => n.use === 'official') || name[0];
  return entry ? `${entry.given.join(' ')} ${entry.family}` : 'No name';
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientRecord: []
        }

    }
    componentDidMount() {
        const patientRecordPromise = getPatientRecord(this.props.client);
        patientRecordPromise.then(patientRecord => this.setState({patientRecord}));
    }

    updateStateElement = (elementName, text) => {
        this.setState({ [elementName]: text });
    }


    render() {
        const {patient} = this.props;
        return (
            <div>
                <div >
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"/>
                <Header logo={logo} title='SMART App'/>
                <Navigation name={getPatientName(patient.name)}
                            birthDate={patient.birthDate}
                            gender={patient.gender}
                            address={patient.address} />
            </div>
                <div >
                <h1> {getPatientName(patient.name)} </h1>
                {`Fetched ${this.state.patientRecord.length} resources`}
                </div>
            </div>

          );
    }

}

export default App;
